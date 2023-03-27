import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { INotificationsSESRepository } from 'src/domain/interfaces/notifications-ses.repository';

@Injectable()
export class NotificationSesRepository implements INotificationsSESRepository {
  private readonly logger = new Logger();

  constructor(private readonly httpService: HttpService) {}

  async loginUniversalApp() {
    try {
      const {
        UNIVERSAL_APP_URL,
        CLIENT_ID,
        UNIVERSAL_APP_USERNAME,
        UNIVERSAL_APP_PASSWORD,
      } = process.env;

      const { data } = await this.httpService.axiosRef.post(
        UNIVERSAL_APP_URL,
        {
          grant_type: 'password',
          client_id: CLIENT_ID,
          username: UNIVERSAL_APP_USERNAME,
          password: UNIVERSAL_APP_PASSWORD,
        },
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
      );
      return data;
    } catch (error) {
      this.logger.error(error);
    }
  }

  async sendMessage(to: any[]): Promise<boolean> {
    try {
      const { NOTIFICATIONS_API_URL, API_KEY, NODE_ENV } = process.env;

      const { access_token: token } = await this.loginUniversalApp();

      if (!token) return false;

      const headers = {};

      if (NODE_ENV == 'local') {
        headers['apikey'] = API_KEY;
        headers['Authorization'] = `Bearer ${token}`;
      }

      const { data } = await this.httpService.axiosRef.post(
        NOTIFICATIONS_API_URL,
        {
          payload: {
            sender: { email: 'eliana@kranio.io' },
            // template: 'SUAPPEnvioRealizado', // Template id
            to,
            // templateData:
            //   '{"params":{"USERNAME":"Luis","OS":"OSDESA","XX":"asasasSA"}}',
            htmlContent: '<h1>Hola mundo</h1>',
            subject: 'email subject',
          },
        },
        {
          headers,
        },
      );
      return data.status === 200;
    } catch (error) {
      this.logger.error(error);
      return false;
    }
  }
}

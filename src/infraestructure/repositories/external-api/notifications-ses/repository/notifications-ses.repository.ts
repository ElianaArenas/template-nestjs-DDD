import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { INotificationsSESRepository } from 'src/domain/interfaces/notifications-ses.repository';

@Injectable()
export class NotificationSesRepository implements INotificationsSESRepository {
  constructor(private readonly httpService: HttpService) {}

  async sendMessage(to: any[]): Promise<any> {
    const response = await this.httpService.axiosRef.post(
      process.env.NOTIFICATIONS_API_URL,
      {
        payload: {
          sender: 'prueba <prueba@gmail.com>',
          template: 'SUAPPEnvioRealizado', // Template id
          to,
          templateData:
            '{"params":{"USERNAME":"Luis","OS":"OSDESA","XX":"asasasSA"}}',
        },
      },
    );

    return response;
  }
}

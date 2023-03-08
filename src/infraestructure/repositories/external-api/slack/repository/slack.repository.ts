import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ISlackRepository } from 'src/domain/interfaces/slack.repository';

@Injectable()
export class SlackRepository implements ISlackRepository {
  constructor(private readonly httpService: HttpService) {}

  async sendNotification(message: string): Promise<any> {
    const { SLACK_HOOK_URL } = process.env;
    const response = await this.httpService.axiosRef.post(SLACK_HOOK_URL, {
      text: message,
    });
    return response;
  }
}

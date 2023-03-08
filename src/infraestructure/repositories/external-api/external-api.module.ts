import { Module } from '@nestjs/common';
import { SlackModule } from './slack/slack.module';
import { NotificationsSesModule } from './notifications-ses/notifications-ses.module';

@Module({
  imports: [SlackModule, NotificationsSesModule],
  exports: [SlackModule, NotificationsSesModule],
})
export class ExternalApiModule {}

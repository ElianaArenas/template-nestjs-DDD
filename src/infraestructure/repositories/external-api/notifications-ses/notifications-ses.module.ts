import { HttpModule } from '@nestjs/axios';
import { Module, Provider } from '@nestjs/common';
import { NotificationSesRepository } from './repository/notifications-ses.repository';

const providers: Provider[] = [
  {
    provide: 'SES_REPOSITORY',
    useClass: NotificationSesRepository,
  },
];

@Module({
  imports: [HttpModule],
  providers,
  exports: providers,
})
export class NotificationsSesModule {}

import { HttpModule } from '@nestjs/axios';
import { Module, Provider } from '@nestjs/common';
import { SlackRepository } from './repository/slack.repository';

const providers: Provider[] = [
  {
    provide: 'SLACK_REPOSITORY',
    useClass: SlackRepository,
  },
];

@Module({
  imports: [HttpModule],
  providers,
  exports: providers,
})
export class SlackModule {}

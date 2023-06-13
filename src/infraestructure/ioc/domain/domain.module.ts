import { Module, Provider } from '@nestjs/common';
import { TemplateService } from 'src/domain/services/template.service';
import { InfraestructureModule } from 'src/infraestructure/infraestructure.module';

const domainProviders: Provider[] = [
  {
    useClass: TemplateService,
    provide: 'TEMPLATE_SERVICE',
  },
];

@Module({
  imports: [InfraestructureModule],
  providers: domainProviders,
  exports: domainProviders,
})
export class DomainModule {}

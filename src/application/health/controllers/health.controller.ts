import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('Health')
@Controller('health')
export class HealthController {
  @Get('liveness')
  @ApiOperation({ summary: 'Check app liveness' })
  @ApiOkResponse({
    description: 'Working correctly',
  })
  liveness(@Res() res: Response) {
    return res.status(HttpStatus.OK).send('Working correctly');
  }

  @ApiOperation({ summary: 'Check app readiness' })
  @ApiOkResponse({
    description: 'Working correctly',
  })
  @Get('readiness')
  readiness(@Res() res: Response) {
    return res.status(HttpStatus.OK).send('Working correctly');
  }
}

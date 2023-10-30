import { Injectable } from '@nestjs/common';
import { LoggerService } from '@nestjs/common';
import customLog from 'src/common/logHandler';

@Injectable()
export class CustomLoggerMiddleware implements LoggerService {
    log(message: string) {
        if (message.includes("WARN")) {
            this.warn(message);
        } else if (message.includes("ERROR")) {
            customLog.errorDirect(message);
        } else {
            customLog.infoDirect(message);
        }
    }

    error(message: string, trace: string) {
        customLog.errorDirect(message, trace);
    }

    warn(message: string) {
        customLog.warn(message);
    }
}

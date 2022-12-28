import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Req,
  Res,
  Header,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/ping')
  @HttpCode(HttpStatus.ACCEPTED)
  @Header('Cache-Control', 'none')
  ping(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    res.status(200);
    return {
      ping: 'pong',
    };
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

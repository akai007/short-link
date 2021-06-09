import { Controller, Get, Param, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('ab_cd')
  @Redirect('', 302)
  async shortLink(@Param() params) {
    console.log(params, 'params');

    return { url: 'http://localhost:3001/link' };
  }
}

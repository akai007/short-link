import { Body, Controller, Get, Param, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  @Get(':code')
  @Redirect('', 302)
  async shortLink(@Param() params, @Body() body) {
    console.log(params, 'params', body);

    return { url: 'http://localhost:3001/link-mapping' };
  }
}

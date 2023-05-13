import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
	@Get('Home')
	@Render('Home')
	getHello() {
	  return { message: 'NestJS ❤ Svelte' };
	}

	@Get()
	@Render('login')
	gettset() {
	  return { login_text: "login" };
	}
}

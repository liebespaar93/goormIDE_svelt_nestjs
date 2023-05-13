import { Body, Controller, Get, Param, Post, Query, Render, Req, Res } from '@nestjs/common';
import { TokenService } from './token.service';
import { Request, Response } from 'express';
import axios from 'axios';

@Controller('token')
export class TokenController {

	constructor(readonly tokenService: TokenService){};

	@Get()
	@Render('token_data')
	getToken(@Req() req: Request) {
		return this.tokenService.getIntraInfo(req.query.code);
	}
}

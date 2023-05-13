import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { TokenResDto } from './dto/token_res';

@Injectable()
export class TokenService {


	public async getIntraInfo(code: any): Promise<any>
	{
		console.log("code : ", code);

		const url = 'https://api.intra.42.fr/oauth/token';

		const postData = JSON.stringify({
			"grant_type" : "authorization_code",
			"client_id" : "u-s4t2ud-b100866508cad63929fc2e8d790908afa93ae44346af725b6d3bebca7931318e",
			"client_secret" : "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",
			"code" : code,
			"redirect_uri" : "http://localhost:3000/token"
		});

		const res: AxiosResponse = await axios.post(url, postData, {
			headers: {
			Accept: "application/json",
			"Content-Type": "application/json;charset=UTF-8",
			},
		})

		console.log("response : ", res.data);
		const tokenResDto :TokenResDto = res.data;
		return {
			access_token : tokenResDto.access_token, 
			token_type : tokenResDto.token_type,
			expires_in : tokenResDto.expires_in,
			refresh_token : tokenResDto.refresh_token,
			scope : tokenResDto.scope,
		};
	}
}
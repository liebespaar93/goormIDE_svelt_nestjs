import { IsNumber, IsString} from "class-validator";

export class TokenResDto{
	@IsString()
	readonly access_token: string;
	@IsString()
	readonly token_type: string;
	@IsNumber()
	readonly expires_in: Number;
	@IsString()
	readonly refresh_token: string;
	@IsString()
	readonly scope: string;
}
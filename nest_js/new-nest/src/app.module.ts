import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { TokenController } from './token/token.controller';
import { TokenService } from './token/token.service';

@Module({
  imports: [MoviesModule],
  controllers: [AppController, TokenController],
  providers: [TokenService],
})
export class AppModule {}

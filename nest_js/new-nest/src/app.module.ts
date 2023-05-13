import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { TokenController } from './token/token.controller';
import { TokenService } from './token/token.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [MoviesModule, HttpModule],
  controllers: [AppController, TokenController],
  providers: [TokenService],
})
export class AppModule {}

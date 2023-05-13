import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
@Module({
	imports: [Movie],
	controllers: [MoviesController],
	providers: [MoviesService]
})
export class MoviesModule {}

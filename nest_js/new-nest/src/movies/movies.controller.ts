import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {

	constructor(readonly moviesService: MoviesService){};

	@Get()
	getAll(){
		return this.moviesService.getAll();
	}

	@Get(":id")
	getOne(@Param('id') movieId: number): Movie{
		console.log("Get : call => ", movieId);
		return this.moviesService.getOne(movieId);
	}

	@Post()
	create(@Body() movieData: CreateMovieDto) {
		console.log(movieData);
		return this.moviesService.create(movieData);
	}

	@Delete("/:id")
	remove(@Param('id') movieId: number) {
		return this.moviesService.deleteOne(movieId)
	}
	@Patch("/:id")
	patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
		console.log("Path : call => ",updateData);
		return this.moviesService.update(movieId, updateData);
	}
}

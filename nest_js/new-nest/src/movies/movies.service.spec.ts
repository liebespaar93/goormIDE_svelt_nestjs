import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { NotFoundException } from '@nestjs/common';
import exp from 'constants';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe ('getAll', () => {
    it ("should return an array", () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });
  
  describe ("getOne", () => {
    it ("should getone a movie", () => {
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      });
      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
    });
    it ("404 error", () => {
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      });
      try {
        service.getOne(1);
        service.getOne(999);
      }
      catch (e)
      {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Movie Id 999 not found.');
      }
    })
  });

  describe('deleteOne', () => {
    it ('deletes a movie', () => {
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      });
      const beforeMovie = service.getAll().length;
      service.deleteOne(1);
      const afterDelete = service.getAll().length;
      expect(afterDelete).toBeLessThan(beforeMovie);
    });
    it ("404 error", () => {
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      });
      try {
        service.getOne(1);
        service.getOne(999);
      }
      catch (e)
      {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Movie Id 999 not found.');
      }
    });
  });

  describe('ceate', () => {
    it ("should delete a movie", () => {
      const Beforecreate = service.getAll().length;
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      });
      const aftercreate = service.getAll().length;
      expect(aftercreate).toBeGreaterThan(Beforecreate);
    });
  });

  describe('update', () => {
    it ("should update a movie", () => {
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      });
      service.update(1, {
        title: 'Test update'
      });
      const movie = service.getOne(1);
      expect(movie.title).toEqual('Test update');
    });
    it ("404 error", () => {
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      });
      try {
        service.getOne(1);
        service.getOne(999);
      }
      catch (e)
      {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Movie Id 999 not found.');
      }
    });
  });
});

import { Resolver, Query, Args, ID, Mutation } from '@nestjs/graphql';
import { MovieService } from './movie.service';
import {Types} from 'mongoose';
import {Movie} from './movie.schema';
import { MovieInput } from './movie.input';

@Resolver()
export class MovieResolver {
    constructor(private readonly movieService:MovieService){}

    @Query(()=>[Movie])
    async getAllMovies(){
        return await this.movieService.getAll();
    }

    @Query(()=>Movie)
    async getOneMovie(
        @Args({name:'id',type:()=>ID})id:Types.ObjectId
    ){
        return await this.movieService.getById(id);
    }

    @Mutation(()=>Movie)
    async addMovie(
        @Args({name:'input',type:()=>MovieInput})input:MovieInput){
            return await this.movieService.create(input);
    }

    @Mutation(()=>Movie)
    async updateMovie(
        @Args({name:'id',type:()=>ID})id:Types.ObjectId,
        @Args({name:'input',type:()=>MovieInput})input:MovieInput
    ){
        return await this.movieService.updateById(id,input);
    }

}

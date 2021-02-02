import { Args, Mutation, Query, Resolver, ID } from '@nestjs/graphql';
import { TheatreService } from './theatre.service';
import {Theatre} from '../theatre/theatre.schema';
import { TheatreInput } from './theatre.input';
import {Types} from 'mongoose';

@Resolver()
export class TheatreResolver {
    constructor(private readonly theatreService:TheatreService){}

    @Query(()=>[Theatre])
    async  getAllTheatres(){
        return await this.theatreService.getAll();
    }

    @Query(()=>Theatre)
    async getOneTheatre(@Args({name:'id',type:()=>ID})id:Types.ObjectId){
        return await this.theatreService.getById(id);
    }

    @Mutation(()=>Theatre)
    async addTheatre(@Args('input')input:TheatreInput){
        return await this.theatreService.create(input);
    }

    @Mutation(()=>Theatre)
    async updateTheatre(
        @Args({name:'id',type:()=>ID})id:Types.ObjectId,
        @Args({name:'input',type:()=>TheatreInput})input:TheatreInput)
        {
        return await this.theatreService.updateById(id,input);
    }
}

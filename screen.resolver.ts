import { Args, Resolver, ID, Mutation, Query } from '@nestjs/graphql';
import { ScreenService } from './screen.service';
import { Types, Model } from 'mongoose';
import { ScreenInput } from './screen.input';
import {Screen} from '../screen/screen.schema';

@Resolver()
export class ScreenResolver {
    constructor(private readonly screenService:ScreenService){}

    @Query(()=>Screen)
    async getScreenByID(
        @Args({name:'id',type:()=>ID})id:Types.ObjectId
    ){
        return await this.screenService.getById(id);
    }

    @Query(()=>[Screen])
    async getScreens(){
        return await this.screenService.getAll();
    }

    @Mutation(()=>Screen)
    async updateScreenDetails(
        @Args('id',{type:()=>ID})id:Types.ObjectId,
        @Args('input')input:ScreenInput
    ){
        return this.screenService.updateById(id,input);
    }
}

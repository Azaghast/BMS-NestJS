import { Query, Args, Mutation, Resolver, ID } from '@nestjs/graphql';
import { LocationInput } from './location.input';
import { LocationService } from './location.service';
import {Types} from 'mongoose';
import {Location} from './location.schema';

@Resolver()
export class LocationResolver {
    constructor(private readonly locationService:LocationService){}

    @Mutation(()=>Location)
    async addLocation(@Args('input') input:LocationInput){
        console.log(input);
        return this.locationService.create(input);
    }
    
    @Mutation(()=>Location)
    async updateLocation(
        @Args('id',{type:()=>ID})id:Types.ObjectId,
        @Args('input')input:LocationInput
    ){
        return this.locationService.updateById(id,input);
    }

    @Query(()=>[Location])
    async getLocations(){
        return this.locationService.getAll();
    }
}

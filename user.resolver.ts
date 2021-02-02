
import { User } from './user.schema';
import { UserService } from './user.service';
import {UserInput} from '../user/user.input';
import { Resolver, Query, Args, Mutation, ID } from '@nestjs/graphql';
import {Types} from 'mongoose';

@Resolver()
export class UserResolver {
    constructor(private readonly userService:UserService){}

    @Query(()=>[User])
    async getUsers(){
        return await this.userService.getAll();
    }

    @Query(()=>User)
    async getUserDetails(@Args('id',{type:()=>ID})id:Types.ObjectId){
        return await this.userService.getById(id);
    }

    @Mutation(()=>User)
    async addUser(@Args('input')input:UserInput){
        return await this.userService.create(input);
    }

    @Mutation(()=>User)
    async updateUser(
        @Args('id',{type:()=>ID})id:Types.ObjectId,
        @Args('input')userInput:UserInput){
            console.log(id,userInput);
        return await this.userService.updateById(id,userInput);
    }
}

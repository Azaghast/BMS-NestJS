import { Field, ID, InputType } from "@nestjs/graphql";
import { Movie } from "src/movie/movie.schema";
import {Types} from 'mongoose';

@InputType()
export class ScreenInput{
    @Field(type=>ID)
    currentMovie:Types.ObjectId;

    @Field(type=>ID)
    nextMovie:Types.ObjectId;

    @Field()
    currentMovieStart:Date;

    @Field()
    nextMovieStart:Date;

    @Field()
    totalSeatsAvailable:number;

    @Field()
    pricePerSeat:number;
}
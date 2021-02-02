import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory, MongooseModule } from '@nestjs/mongoose';
import {Movie, MovieDocument} from '../movie/movie.schema';
import {Schema as MongooseSchema} from 'mongoose';

@ObjectType()
@Schema()
export class Screen{
    @Field(()=>ID)
    id:Types.ObjectId;

    @Field(type=>Movie)
    @Prop({
        type:MongooseSchema.Types.ObjectId,
        ref:Screen.name,
        autopopulate:true
    })
    currentMovie:MovieDocument;

    @Field(type=>Movie)
    @Prop({
        type:MongooseSchema.Types.ObjectId,
        ref:Screen.name,
        autopopulate:true
    })
    nextMovie:MovieDocument;

    @Field()
    @Prop()
    currentMovieStart:Date;

    @Field()
    @Prop()
    nextMovieStart:Date;

    @Field()
    @Prop()
    totalSeatsAvailable:number;

    @Field()
    @Prop()
    pricePerSeat:number;
}

export interface ScreenDocument extends Document{
    currentMovie: MovieDocument|Movie['id'];
    nextMovie: MovieDocument|Movie['id'];
    currentMovieStart:Date;
    nextMovieStart:Date;
    totalSeatsAvailable:number;
    pricePerSeat:number;
}

export interface ScreenPopulatedDocument extends ScreenDocument{
    currentMovie:MovieDocument;
    nextMovie: MovieDocument
}

export const ScreenSchema = SchemaFactory.createForClass(Screen);
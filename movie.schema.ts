import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@ObjectType()
@Schema()
export class Movie{
    @Field(()=>ID)
    id:Types.ObjectId;

    @Field()
    @Prop()
    movieName:string;

    @Field()
    @Prop()
    description:string;

    @Field()
    @Prop()
    genre:string;

    @Field()
    @Prop()
    languages:string[];

    @Field()
    @Prop()
    rating:number;

    @Field()
    @Prop()
    runtime:number;

    @Field()
    @Prop()
    releaseDate:Date;
}

export type MovieDocument = Movie & Document;
export const MovieSchema = SchemaFactory.createForClass(Movie);
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import {Location,LocationDocument} from '../location/location.schema';
//import {Screen, ScreenDocument} from '../screen/screen.schema';

@ObjectType()
@Schema()
export class Theatre{
    @Field(()=>ID)
    id:Types.ObjectId;

    @Field()
    @Prop()
    theatreName:string;

    @Field(type=>[Location])
    @Prop({
        type:[Types.ObjectId],
        ref:Location.name,
        autopopulate:true,
    })
    locations:LocationDocument[];

    /*@Field(type=>[Screen])
    @Prop({
        type:[Types.ObjectId],
        ref:Screen.name,
        autopopulate:true,
    })
    screens:ScreenDocument[];*/
}

export interface TheatreDocument extends Document{
    theatreName:string;
    locations:LocationDocument[]|[Location['id']];
    //screens:ScreenDocument[]|[Screen['id']];
}

export interface  TheatrePopulatedDocument extends TheatreDocument{
    locations:LocationDocument[];
    //screens:ScreenDocument[];
}

export const TheatreSchema = SchemaFactory.createForClass(Theatre);
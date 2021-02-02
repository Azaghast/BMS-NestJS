import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@ObjectType()
@Schema()
export class Location{
    @Field(()=>ID)
    id:Types.ObjectId;

    @Field({nullable:true})
    @Prop()
    city:string;

    @Field()
    @Prop()
    district:string;

    @Field()
    @Prop()
    state:string;

    @Field()
    @Prop()
    country:string;

    @Field()
    @Prop()
    PIN:number;
}

export type LocationDocument = Location & Document;
export const LocationSchema = SchemaFactory.createForClass(Location);
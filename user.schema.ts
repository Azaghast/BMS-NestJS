import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
//import {Booking}  from  '../booking/booking.schema';

@ObjectType()
@Schema()
export class User{
    @Field(()=>ID)
    id:Types.ObjectId;

    @Field()
    @Prop()
    username:string;

    @Field()
    @Prop()
    password:string;

    @Field()
    @Prop()
    mobileNumber:number;

    @Field()
    @Prop()
    location:string;

    @Field(type=>[String],{nullable:true})
    @Prop()
    history:string[];

    /*@Field(type=>[Booking])
    @Prop()
    seats:Booking[];*/
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
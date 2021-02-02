import { Type } from "mongoose";
import { Field, ID, InputType } from "@nestjs/graphql";
import {Location} from  "../location/location.schema";
//import {Screen} from  "../screen/screen.schema";

@InputType()
export class  TheatreInput{
    @Field()
    theatreName:string;

    @Field(type=>[ID])
    locations:[Type.ObjectId];

    /*@Field(type=>[ID])
    screens:Type.ObjectId;*/
}
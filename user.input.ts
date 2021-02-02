import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UserInput{
    @Field()
    username:string;

    @Field()
    password:string;

    @Field()
    mobileNumber:number;

    @Field()
    location:string;

    @Field(type=>[String])
    history:string[];

    /*@Field(type=>[Seat])
    seats:Seat[];*/
}
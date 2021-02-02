import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class LocationInput{
    @Field()
    city:string;

    @Field()
    district:string;

    @Field()
    state:string;

    @Field()
    country:string;

    @Field()
    PIN:number;
}
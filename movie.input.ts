import { Field, InputType } from "@nestjs/graphql";
import { fieldToFieldConfig } from "graphql-tools";

@InputType()
export class MovieInput{
    @Field()
    movieName:string;

    @Field()
    description:string;

    @Field()
    genre:string;

    @Field()
    languages:[string];

    @Field()
    rating:number;

    @Field()
    runtime:number;

    @Field()
    releaseDate:Date;
}
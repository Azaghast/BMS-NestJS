import { Injectable } from '@nestjs/common';
import {Theatre, TheatreDocument} from "../theatre/theatre.schema";
import {BaseService}  from '../commons/base.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TheatreService extends BaseService<TheatreDocument>{
    constructor(
        @InjectModel(Theatre.name)
        private readonly theatreModel:Model<TheatreDocument>,
    ){
        super(theatreModel);
    }
}
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'src/commons/base.service';
import { Screen,ScreenDocument } from './screen.schema';
import { Model } from 'mongoose';

@Injectable()
export class ScreenService extends BaseService<ScreenDocument>{
    constructor(
        @InjectModel(Screen.name)
        private readonly screenModel:Model<ScreenDocument>
    ){
        super(screenModel);
    }
}

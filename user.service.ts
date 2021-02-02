import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'src/commons/base.service';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService extends BaseService<UserDocument>{
    constructor(
        @InjectModel(User.name)
        private readonly userModel:Model<UserDocument>,
    ){
        super(userModel);
    }
}

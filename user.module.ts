import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserResolver } from './user.resolver';
import { User } from './user.schema';
import { UserService } from './user.service';
import {UserSchema} from './user.schema';

@Module({
    imports:[MongooseModule.forFeature([
        {
            name:User.name,
            schema:UserSchema,
        },
    ]),
],
providers:[UserService,UserResolver],
exports:[UserService],
})

export class UserModule {}

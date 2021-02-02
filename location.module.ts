import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationResolver } from './location.resolver';
import { LocationSchema } from './location.schema';
import { LocationService } from './location.service';
import {Location} from './location.schema';

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name:Location.name,
                schema:LocationSchema,
            },
        ]),
    ],
    providers:[LocationService,LocationResolver],
    exports:[LocationService],
})
export class LocationModule {}

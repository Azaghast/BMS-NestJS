import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TheatreResolver } from './theatre.resolver';
import { Theatre, TheatreSchema } from './theatre.schema';
import { TheatreService } from './theatre.service';

@Module({
    imports:[MongooseModule.forFeature([
        {
            name:Theatre.name,
            schema:TheatreSchema,
        },
    ]),
],
providers:[TheatreService,TheatreResolver],
exports:[TheatreService],
})
export class TheatreModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieResolver } from './movie.resolver';
import { Movie, MovieSchema } from './movie.schema';
import { MovieService } from './movie.service';

@Module({
    imports:[MongooseModule.forFeature([
        {
            name:Movie.name,
            schema:MovieSchema,
        },
    ]),
],
providers:[MovieService,MovieResolver],
exports:[MovieService],
})
export class MovieModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScreenResolver } from './screen.resolver';
import { Screen,ScreenSchema } from './screen.schema';
import { ScreenService } from './screen.service';

@Module({
    imports:[MongooseModule.forFeature([
        {
            name:Screen.name,
            schema:ScreenSchema,
        },
    ]),
],
providers:[ScreenService,ScreenResolver],
exports:[ScreenService],
})
export class ScreenModule {}

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { connection } from 'mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LocationModule } from './location/location.module';
import { TheatreResolver } from './theatre/theatre.resolver';
import { TheatreModule } from './theatre/theatre.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://Azaghast:u9g9Y2DWOtGdxVmF@cluster0.0enuy.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      connectionFactory:(connection)=>{
        connection.plugin(require('mongoose-autopopulate'));
        return connection;
      },
      useCreateIndex:true,
      useFindAndModify:false,
      useNewUrlParser:true,
      useUnifiedTopology:true,
    },
    ),
  GraphQLModule.forRoot({autoSchemaFile:true}),
  UserModule,
  LocationModule,
  TheatreModule,
  ],
  controllers: [],
  providers: [TheatreResolver],
})
export class AppModule {}

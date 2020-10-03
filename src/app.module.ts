import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.NODE_ENV == 'development' ?
        process.env.DATABASE_HOSTDEV : process.env.DATABASE_HOST,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
      }),
    ItemsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

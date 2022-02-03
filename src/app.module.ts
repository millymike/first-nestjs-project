import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { logger } from './middleware/logger.middleware';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

@Module({
  imports: [UsersModule, MongooseModule.forRoot(config.mongoURI)],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes(UsersController);
  }
}

import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AuthModule,
    UserModule,
    MongooseModule.forRoot(
      'mongodb://root:root@localhost:27017/elevate_dev?authSource=admin&w=1',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

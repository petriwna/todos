import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersService } from './users.service';
import User from './user.entity';
// import { UsersController } from './users.controller';
// import { DatabaseFilesModule } from '../databaseFiles/databaseFiles.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ConfigModule],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [],
})
export class UsersModule {}

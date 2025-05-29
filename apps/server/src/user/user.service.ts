import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return `This action adds a new user with name ${createUserDto.name}`;
  }

  findByEmail(email: string) {
    return `This action returns a user with email ${email}`;
  }
}

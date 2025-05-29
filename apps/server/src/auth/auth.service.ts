import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Injectable()
export class AuthService {
  registerUser(createUserDto: CreateUserDto) {
    return `This action registers a new user with name ${createUserDto.name}`;
  }
}

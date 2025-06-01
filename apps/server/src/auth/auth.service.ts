import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly useService: UserService) {}
  async registerUser(createUserDto: CreateUserDto) {
    const user = await this.useService.findByEmail(createUserDto.email);
    if (user) throw new ConflictException('User already exists');
    return this.useService.create(createUserDto);
  }
}

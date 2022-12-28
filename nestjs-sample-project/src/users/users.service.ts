import {
  BadRequestException,
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { CreateUserDTO, UpdateUserDTO } from './dtos';

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDTO) {
    console.log(createUserDto);
  }

  async findAll() {
    console.log('findAll');

    return 'findAll';
  }

  async findOne(id: string) {
    console.log(id);

    return 'user';
  }

  async update(id: string, updateUserDto: UpdateUserDTO) {
    console.log(id);

    return 'update';
  }

  async remove(id: string) {
    console.log(id);

    return 'remove';
  }
}

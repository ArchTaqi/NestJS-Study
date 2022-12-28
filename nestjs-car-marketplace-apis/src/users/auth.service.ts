import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

// scrypt func is async in nature. so rather than user promises, we used callbacks.
const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(email: string, password: string) {
    // see if email is in use
    const users = await this.usersService.find(email);
    if (!users) {
      throw new BadRequestException('User not found with email', email);
    }
    // gen salt, hash the users password
    const salt = randomBytes(8).toString('hex');
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    const hasedPassword = salt + '.' + hash.toString('hex');
    // create a new user and save it
    const user = await this.usersService.create(email, hasedPassword);
    // return the user
    return user;
  }

  async signin(email: string, password: string) {
    const user = await this.usersService.find(email);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    const [salt, storedHash] = user.password.split('.');
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    if (storedHash === hash.toString('hex')) {
      return user;
    } else {
      throw new BadRequestException('Bad Exception');
    }
    return user;
  }
}

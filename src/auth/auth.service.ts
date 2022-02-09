import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { comparePasswords } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);

    if (user) {
      const matched = comparePasswords(password, user.password);
      if (matched) {
        return user;
      }
      return null;
    }
  }
}

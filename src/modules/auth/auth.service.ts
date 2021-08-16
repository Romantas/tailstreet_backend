import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
// import { CreateUserDto } from '../user/dto/create-user.dto';
// import { UserRole, UserStatus } from '../user/enum';
// import { CryptographerService } from './cryptographer.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);

    if (user && user.password === password) {
      const { password, email, ...rest } = user;
      return rest;
    }

    return null;
  }

  async login(user: any) {
    const payload = { sub: user.id, role: user.role };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './passport/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('user/login')
  userLogin(@Request() req: any): any {
    return this.authService.login(req.user);
  }
}

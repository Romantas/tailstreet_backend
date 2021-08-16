import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'SECRET',
      ignoreExpiration: false,
    });
  }

  async validate(payload: any) {
    return {
      id: payload.sub,
      role: payload.role,
    };
  }
}

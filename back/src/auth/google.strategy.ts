import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { AuthService, Provider } from './auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly authService: AuthService) {
    super({
      clientID: process.env.CLIENTID,
      clientSecret: process.env.CLIENTSECRET,
      callbackURL: 'http://localhost:3000/auth/google/callback',
      passReqToCallback: true,
      scope: ['profile'],
    });
  }
  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile,
    done: Function,
  ): Promise<any> {
    try {
      console.log(profile);

      const jwt: string = await this.authService.validateOAuthLogin(profile.id, Provider.GOOGLE);
      const user = {
        jwt,
      };
      done(null, user);
    } catch (err) {
      console.log(err);
      done(err, false);
    }
  }
}

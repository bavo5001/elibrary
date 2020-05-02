import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { sign } from 'jsonwebtoken';
export enum Provider {
  GOOGLE = 'google',
}
@Injectable()
export class AuthService {
  private readonly JWT_SECRET = process.env.JWT_LONG;
  constructor(private readonly usersService: UsersService) {}

  async validateOAuthLogin(
    thirdPartyId: string,
    provider: Provider,
  ): Promise<string> {
    try {
      // You can add some registration logic here,
      // to register the user using their thirdPartyId (in this case their googleId)
      // let user: IUser = await this.usersService.findOneByThirdPartyId(thirdPartyId, provider);

      // if (!user)
      // user = await this.usersService.registerOAuthUser(thirdPartyId, provider);
      const payload = {
        thirdPartyId,
        provider,
      };
      const jwt: string = sign(payload, this.JWT_SECRET, { expiresIn: 3600 });
      return jwt;
    } catch (e) {
      throw new InternalServerErrorException('validateOAuthLogin', e.message);
    }
  }
}

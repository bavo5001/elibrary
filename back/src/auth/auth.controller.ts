import { Controller, Get, Res, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleLogin() {
    // initiates the Google OAuth2 login flow
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleLoginCallback(@Req() req, @Res() res): Promise<any> {
    //handles the Google OAuth2 Callback
    const jwt: string = req.user.jwt;
    if (jwt) {
      res.redirect('http://localhost:4200/login/success/' + jwt);
    } else {
      res.redirect('http://localhost:4200/login/failure');
    }
  }
  @Get('protected')
  @UseGuards(AuthGuard('jwt'))
  async protectedResource(): Promise<string> {
    return 'JWT is working';
  }
}

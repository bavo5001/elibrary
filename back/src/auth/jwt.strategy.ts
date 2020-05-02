import {PassportStrategy} from "@nestjs/passport";
import {Injectable, UnauthorizedException} from "@nestjs/common";
import {ExtractJwt, Strategy} from "passport-jwt";
import {AuthService} from "./auth.service";
import FunctionLike = jest.FunctionLike;
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'jwt'){
    constructor(private readonly authService:AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_LONG
        });
    }
    async validate(payload, done: Function): Promise<any>{
        try{
            // You could add a function to the authService to verify the claims of the token:
            // i.e. does the user still have the roles that are claimed by the token
            //const validClaims = await this.authService.verifyTokenClaims(payload);

            //if (!validClaims)
            //    return done(new UnauthorizedException('invalid token claims'), false);

            done(null, payload);
        }
        catch (e) {
            throw new UnauthorizedException('UnauthorizedException', e.message);
        }
    }
}

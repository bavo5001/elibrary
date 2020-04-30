import {Injectable} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import { Strategy } from "passport-google-oauth20";
import {AuthService} from "./auth.service";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor(private readonly authService: AuthService) {
        super({
            clientID : process.env.CLIENTID,
            clientSecret: process.env.CLIENTSECRET,
            callbackURL: 'http://localhost:3000/auth/google/callback',
            passReqToCallback: true,
            scope: ['profile']
        })
    }
    async validate(request: any, accessToken: string, refreshToken: string, profile, done: Function){
        try {
            console.log(profile);

            const jwt : string = 'placeholderJWT';
            const user = {
                jwt
            }
            done(null, user);
        }
        catch (err) {
           console.log(err);
           done(err, false)
        }
    }
}

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile, VerifyCallback } from 'passport-42';

@Injectable()
export class FtStrategy extends PassportStrategy(Strategy, '42') 
{
  constructor(private readonly configService: ConfigService) 
  {
    super({
      clientID: configService.get<string>('FORTYTWO_CLIENT_ID'),
      clientSecret: configService.get<string>('FORTYTWO_CLIENT_SECRET'),
      callbackURL: '/login/42/return',
      passReqToCallback: true,

});
  }

  /*async validate(request: { session: { accessToken: string } }, accessToken: string, refreshToken: string, profile: Profile, cb: VerifyCallback, ): Promise<any> 
  {
    request.session.accessToken = accessToken;
    console.log('accessToken', accessToken, 'refreshToken', refreshToken);
    console.log("salut je suis ici les amis -- ft-strategy\n");
    return cb(null, profile);
  }*/
  async validate(
    request: { session: { accessToken: string } },
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    cb: VerifyCallback,
  ): Promise<any> {
    request.session.accessToken = accessToken;
    profile.twoFactorSecret = 'YOUR_SECRET';  // Vous devez définir un secret unique pour chaque utilisateur lors de l'inscription de la 2FA.
    profile.isTwoFactorAuthenticated = false; // Ce champ sera défini sur true après une authentification 2FA réussie.
    return cb(null, profile);
  }
}

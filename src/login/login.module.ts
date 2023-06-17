import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FtStrategy } from './ft.strategy';
import { LoginController } from './login.controller';
import { SessionSerializer } from './session.serializer';
//import { GoogleStrategy } from '/home/adnen/Desktop/42_api3/src/login/google.strategy'; // Ajout pour Google OAuth
import { GoogleStrategy } from './google.strategy';

@Module({
  controllers: [LoginController],
  providers: [ConfigService, FtStrategy, SessionSerializer, GoogleStrategy], // Ajout de GoogleStrategy ici
})
export class LoginModule {}

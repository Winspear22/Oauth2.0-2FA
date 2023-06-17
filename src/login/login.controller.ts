import { Controller, Get, Redirect, UseGuards } from '@nestjs/common';
import { FtOauthGuard } from './guards/ft-oauth.guard';
import { AuthGuard } from '@nestjs/passport';  // Ajout pour Google OAuth

@Controller('login')
export class LoginController {
  @Get('42')
  @UseGuards(FtOauthGuard)
  ftAuth() {}

  @Get('42/return')
  @UseGuards(FtOauthGuard)
  @Redirect('/login/google')  // Redirige vers Google après le succès de 42
  ftAuthCallback() {}

  @Get('google')
  @UseGuards(AuthGuard('google'))  // Authentification Google OAuth
  googleAuth() {}

  @Get('google/return')
  @UseGuards(AuthGuard('google'))  // Callback de Google OAuth
  @Redirect('/')
  googleAuthCallback() {}
}

/*import {
  Controller,
  Get,
  Redirect,
  Render,
  Req,
  UseGuards,
  Session,
  Post
} from '@nestjs/common';
import { User } from './login/user.decorator';
import { Profile } from 'passport-42';
import { AuthenticatedGuard } from './login/guards/authenticated.guard';
import { Request } from 'express';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly httpService: HttpService, private readonly appService: AppService) {}

  @Get()
  @Render('home')
  home(@User() user: Profile) {
    return { user };
  }

  @Get('login')
  @Render('login')
  logIn() {
    return;
  }

  @Get('profile')
  @UseGuards(AuthenticatedGuard)
  @Render('profile')
  profile(@User() user: Profile) {
    return { user };
  }

  @Get('data')
  @UseGuards(AuthenticatedGuard)
  @Render('data')
  async data(@User() user: Profile, @Session() session: Record<string, any>) {
    const accessToken: string = session.accessToken;
    console.log(accessToken);
    const data$ = this.httpService
      .get('https://api.intra.42.fr/v2/campus', {
        headers: {
          authorization: 'bearer ' + accessToken,
        },
      })
      .pipe(
        map((response) =>
          response.data
            .sort((a: any, b: any) => (a.id > b.id ? 1 : -1))
            .map((item: any) => {
              if (!item.website.match(/^http/)) {
                item.website = 'https://' + item.website;
              }
              return item;
            }),
        ),
      );
    const data = await firstValueFrom(data$);
    return { user, data };
  }

  @Get('logout')
  @Redirect('/')
  logOut(@Req() req: Request) {
    req.logOut();
  }

  @Get()
  @UseGuards(AuthGuard('42'), AuthGuard('google'))  // Ajout des guards ici
  async googleAuth(@Req() req) {}

  @Get('auth/google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.appService.googleLogin(req);

  }
}*/

/*import {
  Controller,
  Get,
  Redirect,
  Render,
  Req,
  UseGuards,
  Session,
  Post
} from '@nestjs/common';
import { User } from './login/user.decorator';
import { Profile } from 'passport-42';
import { AuthenticatedGuard } from './login/guards/authenticated.guard';
import { Request } from 'express';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly httpService: HttpService, private readonly appService: AppService) {}

  @Get()
  @Render('home')
  home(@User() user: Profile) {
    return { user };
  }

  @Get('login')
  @Render('login')
  logIn() {
    return;
  }

  @Get('profile')
  @UseGuards(AuthenticatedGuard)
  @Render('profile')
  profile(@User() user: Profile) {
    return { user };
  }

  @Get('data')
  @UseGuards(AuthenticatedGuard)
  @Render('data')
  async data(@User() user: Profile, @Session() session: Record<string, any>) {
    const accessToken: string = session.accessToken;
    console.log(accessToken);
    const data$ = this.httpService
      .get('https://api.intra.42.fr/v2/campus', {
        headers: {
          authorization: 'bearer ' + accessToken,
        },
      })
      .pipe(
        map((response) =>
          response.data
            .sort((a: any, b: any) => (a.id > b.id ? 1 : -1))
            .map((item: any) => {
              if (!item.website.match(/^http/)) {
                item.website = 'https://' + item.website;
              }
              return item;
            }),
        ),
      );
    const data = await firstValueFrom(data$);
    return { user, data };
  }

  @Get('logout')
  @Redirect('/')
  logOut(@Req() req: Request) {
    req.logOut();
  }

  @Get('auth/google')
  @UseGuards(AuthGuard('google'))  // Utilisez le guard ici
  async googleAuth(@Req() req) {}

  @Get('auth/google/callback')
  @UseGuards(AuthGuard('google')) // Utilisez le guard ici aussi
  googleAuthRedirect(@Req() req) {
    return this.appService.googleLogin(req);
  }
}

*/

import {
  Controller,
  Get,
  Redirect,
  Render,
  Req,
  UseGuards,
  Session,
  Post,
  Res
} from '@nestjs/common';
import { User } from './login/user.decorator';
import { Profile } from 'passport-42';
import { AuthenticatedGuard } from './login/guards/authenticated.guard';
import { Request, Response } from 'express';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly httpService: HttpService, private readonly appService: AppService) {}

  @Get()
  @Render('home')
  home(@User() user: Profile) {
    return { user };
  }

  @Get('login')
  @Render('login')
  logIn() {
    return;
  }

  @Get('profile')
  @UseGuards(AuthenticatedGuard)
  @Render('profile')
  profile(@User() user: Profile) {
    return { user };
  }

  @Get('data')
  @UseGuards(AuthenticatedGuard)
  @Render('data')
  async data(@User() user: Profile, @Session() session: Record<string, any>) {
    const accessToken: string = session.accessToken;
    console.log(accessToken);
    const data$ = this.httpService
      .get('https://api.intra.42.fr/v2/campus', {
        headers: {
          authorization: 'bearer ' + accessToken,
        },
      })
      .pipe(
        map((response) =>
          response.data
            .sort((a: any, b: any) => (a.id > b.id ? 1 : -1))
            .map((item: any) => {
              if (!item.website.match(/^http/)) {
                item.website = 'https://' + item.website;
              }
              return item;
            }),
        ),
      );
    const data = await firstValueFrom(data$);
    return { user, data };
  }

  @Get('logout')
  @Redirect('/')
  logOut(@Req() req: Request) {
    req.logOut();
  }

  @Get('auth/42')
  @UseGuards(AuthGuard('42'))  // Utilisation uniquement du guard pour 42
  async auth42(@Req() req) {}

  @Get('auth/google')
  @UseGuards(AuthGuard('google'))  // Utilisation uniquement du guard pour Google
  async authGoogle(@Req() req) {}

  /*@Get('auth/google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.appService.googleLogin(req);*/

  @Get('auth/google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req, @Res() res: Response) {
    this.appService.googleLogin(req);
    res.redirect('/');
  }
}

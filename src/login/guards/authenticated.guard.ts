import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AuthenticatedGuard implements CanActivate 
{
  async canActivate(context: ExecutionContext): Promise<boolean> 
  {
    const req: Request = context.switchToHttp().getRequest();
    console.log("salut je suis ici les amis -- auth-guard\n");

    return req.isAuthenticated();
  }
}

/*@Injectable()
export class AuthenticatedGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req: Request = context.switchToHttp().getRequest();
    return req.isAuthenticated() && req.user.isTwoFactorAuthenticated;
  }
}
*/

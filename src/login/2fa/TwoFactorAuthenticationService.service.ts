/*import { Injectable } from '@nestjs/common';
import * as speakeasy from 'speakeasy';

@Injectable()
export class TwoFactorAuthenticationService {
  generateSecret() {
    const secret = speakeasy.generateSecret();
    return secret.base32;
  }

  validateToken(twoFactorAuthenticationCode: string, userTwoFactorAuthenticationSecret: string): boolean {
    return speakeasy.totp.verify({
      secret: userTwoFactorAuthenticationSecret,
      encoding: 'base32',
      token: twoFactorAuthenticationCode,
    });
  }
}*/

import { Injectable } from '@nestjs/common';
import * as speakeasy from 'speakeasy';

@Injectable()
export class TwoFactorAuthenticationService {
  generateSecret() {
    const secret = speakeasy.generateSecret();
    return secret.base32;
  }

  validateToken(twoFactorAuthenticationCode: string, userTwoFactorAuthenticationSecret: string): boolean {
    return speakeasy.totp.verify({
      secret: userTwoFactorAuthenticationSecret,
      encoding: 'base32',
      token: twoFactorAuthenticationCode,
    });
  }

  generateAndStoreSecret(session: Record<string, any>) {
    const secret = this.generateSecret();
    // Store the 2FA secret on the session.
    session.twoFactorAuthenticationSecret = secret;
    return secret;
  }
}

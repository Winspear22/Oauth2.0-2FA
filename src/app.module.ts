import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { configValidationSchema } from './config.schema';
import { LoginModule } from './login/login.module';
import { AppService } from './app.service';
import { GoogleStrategy } from './login/google.strategy';
import { GoogleAuthGuard } from './login/guards/google-auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      validationSchema: configValidationSchema,
    }),
    LoginModule,
    HttpModule,
  ],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy, GoogleAuthGuard], // Ajoutez GoogleStrategy et GoogleAuthGuard ici
})
export class AppModule {}


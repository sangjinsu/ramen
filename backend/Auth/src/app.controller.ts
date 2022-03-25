import {
  Controller,
  Get,
  Post,
  Req,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/guard/local-auth.guard';
import { Public } from './skip-auth.decorator';

@Controller('v1/member')
export class AppController {
  constructor(private authService: AuthService) {}
}

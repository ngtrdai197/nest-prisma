import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Post()
  getUser(@Body() userData: { name?: string; email: string }) {
    return this.userService.create(userData);
  }
}

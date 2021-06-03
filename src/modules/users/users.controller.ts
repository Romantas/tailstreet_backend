import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOneById(+id);
  }

  @Post('login')
  userLogin(@Body() loginUserDto: any) {
    return this.usersService.userLogin(loginUserDto);
  }

  @Post('company/login')
  login(@Body() loginUserDto: any) {
    return this.usersService.login(loginUserDto);
  }

  @Post()
  create(@Body() createUserDto: any) {
    return this.usersService.createUser(createUserDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceDto: any) {
    return this.usersService.update(+id, updateServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Get('reviews/:id')
  getAllReviewsByCompany(@Param('id') id: string) {
    return this.usersService.getAllReviewsByCompany(+id);
  }

  @Post('reviews')
  createReview(@Body() createUserDto: any) {
    return this.usersService.createReview(createUserDto);
  }
}

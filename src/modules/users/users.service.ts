import { Injectable, Inject } from '@nestjs/common';
import { User } from './entity/user.entity';
// import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Review } from './entity/review.entity';
import { CompanyInfo } from '../company-info/entities/company-info.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: typeof User,
    @Inject('REVIEW_REPOSITORY') private reviewRepository: typeof Review,
    private jwtService: JwtService,
  ) {}

  private salt = bcrypt.genSaltSync(10);

  async login(loginUserDto: any): Promise<any> {
    const hash = await bcrypt.hash(loginUserDto.password, this.salt);
    console.log(loginUserDto);
    const user = await this.userRepository.findOne({
      where: {
        email: loginUserDto.email,
        password: hash,
      },
      include: [{ model: CompanyInfo }],
    });

    console.log(user);

    const payload = { email: user.email, userId: user.id, role: user.role };

    // return {
    //   accessToken: this.jwtService.sign(payload),
    // };
    console.log(user);
    return user;
  }

  async userLogin(loginUserDto: any): Promise<any> {
    const hash = await bcrypt.hash(loginUserDto.password, this.salt);
    const user = await this.userRepository.findOne({
      where: {
        email: loginUserDto.email,
        password: hash,
      },
    });

    console.log(user);

    return user;
  }

  async createUser(createUser: any): Promise<User> {
    const hash = await bcrypt.hash(createUser.password, this.salt);
    return await this.userRepository.create<User>({
      ...createUser,
      password: hash,
    });
  }

  async update(id: number, updateServiceDto: any) {
    let user = await this.userRepository.findOne<User>({ where: { id } });

    if (!user.id) {
      return 'user not exists';
    }

    return this.userRepository.update(updateServiceDto, {
      where: { id: id },
    });
  }

  remove(id: number) {
    return this.userRepository.destroy({ where: { id: id } });
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { email } });
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }

  async getAllReviewsByCompany(id: number): Promise<Review[]> {
    return await this.reviewRepository.findAll({
      where: {
        companyId: id,
      },
    });
  }

  async createReview(createReview: any): Promise<Review> {
    return await this.reviewRepository.create<Review>(createReview);
  }
}

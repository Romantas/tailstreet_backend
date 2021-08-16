import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { Review } from './entity/review.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
  ) {}

  async login(loginUserDto: any): Promise<any> {
    // const hash = await bcrypt.hash(loginUserDto.password, this.salt);
    // const user = await this.userRepository.findOne({
    //   where: {
    //     email: loginUserDto.email,
    //     // password: hash,
    //   },
    //   include: [{ model: CompanyInfo }],
    // });
    // console.log(user);
    // const payload = { email: user.email, userId: user.id, role: user.role };
    // // return {
    // //   accessToken: this.jwtService.sign(payload),
    // // };
    // console.log(user);
    // return user;
  }

  async userLogin(loginUserDto: any): Promise<any> {
    // // const hash = await bcrypt.hash(loginUserDto.password, this.salt);
    // const user = await this.userRepository.findOne({
    //   where: {
    //     email: loginUserDto.email,
    //     // password: hash,
    //   },
    // });
    // console.log(user);
    // return user;
  }

  async createUser(createUser: any) {
    // // const hash = await bcrypt.hash(createUser.password, this.salt);
    // return await this.userRepository.create<User>({
    //   ...createUser,
    //   // password: hash,
    // });
  }

  async update(id: number, updateServiceDto: any) {
    // let user = await this.userRepository.findOne<User>({ where: { id } });
    // if (!user.id) {
    //   return 'user not exists';
    // }
    // return this.userRepository.update(updateServiceDto, {
    //   where: { id: id },
    // });
  }

  remove(id: number) {
    // return this.userRepository.destroy({ where: { id: id } });
  }

  async findOneByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }

  async findOneById(id: number) {
    // return await this.userRepository.findOne<User>({ where: { id } });
  }

  async getAllReviewsByCompany(id: number) {
    // return await this.reviewRepository.findAll({
    //   where: {
    //     companyId: id,
    //   },
    // });
  }

  async createReview(createReview: any) {
    // return await this.reviewRepository.create<Review>(createReview);
  }
}

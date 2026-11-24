
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUser() {
    return ['EOhit', 'Rohit', 'MOgit'];
  }
}

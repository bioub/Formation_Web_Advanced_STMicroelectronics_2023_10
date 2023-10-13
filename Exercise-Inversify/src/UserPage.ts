import { injectable } from 'inversify';
import { UserService } from './UserService';

@injectable()
export class UserPage {
  
  constructor(protected userService: UserService) {}
  
  async render() {
    const users = await this.userService.fetchUsers();

    for (const user of users) {
      console.log(user.name);
    }
  }
}

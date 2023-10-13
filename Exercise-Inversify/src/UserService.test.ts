import { HttpClient } from './HttpClient';
import { UserService } from './UserService';

test('fetchUsers resolves users', async () => {
  const httpClient = new HttpClient();
  const userService = new UserService(httpClient);
  const users = await userService.fetchUsers();
  expect(users[0].name).toBe('Leanne Graham');
});

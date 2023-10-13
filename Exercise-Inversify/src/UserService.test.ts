import { FakeHttpClient } from './FakeHttpClient';
import { UserService } from './UserService';

test('fetchUsers resolves users', async () => {
  const httpClient = new FakeHttpClient();
  httpClient.setFakeData([{ id: 1, name: 'Toto' }]);

  const userService = new UserService(httpClient);
  const users = await userService.fetchUsers();
  expect(users[0].name).toBe('Toto');
});

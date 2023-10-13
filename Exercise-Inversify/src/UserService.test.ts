import { FakeHttpClient } from './FakeHttpClient';
import { HttpClientInterface } from './HttpClientInterface';
import { UserService } from './UserService';
import { container } from './container';

beforeEach(() => {
  container.snapshot();
});

afterEach(() => {
  container.restore();
});

test('fetchUsers resolves users', async () => {
  const httpClient = new FakeHttpClient();
  httpClient.setFakeData([{ id: 1, name: 'Toto' }]);

  container.rebind(HttpClientInterface).toConstantValue(httpClient);

  const userService = container.get(UserService);

  const users = await userService.fetchUsers();
  expect(users[0].name).toBe('Toto');
});

test('fetchUsers resolves users', async () => {
  const userService = container.get(UserService);
  const users = await userService.fetchUsers();
  expect(users[0].name).toBe('Leanne Graham');
});

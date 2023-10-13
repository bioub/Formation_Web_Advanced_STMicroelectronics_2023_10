import { HttpClientInterface } from './HttpClientInterface';

export class FakeHttpClient implements HttpClientInterface {
  private data!: unknown;
  async get<T>(_: string): Promise<T> {
    return await (this.data as T);
  }
  setFakeData(data: unknown) {
    this.data = data;
  }
}

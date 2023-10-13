export interface HttpClientInterface {
  get<T>(url: string): Promise<T>
}

export const HttpClientInterface = Symbol('HttpClientInterface');
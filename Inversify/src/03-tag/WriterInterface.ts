export interface WriterInterface {
  write(msg: string): Promise<void>;
}

export const WriterInterface = Symbol();

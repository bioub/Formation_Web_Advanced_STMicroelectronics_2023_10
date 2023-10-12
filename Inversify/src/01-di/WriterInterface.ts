export interface WriterInterface {
  write(msg: string): Promise<void>;
}

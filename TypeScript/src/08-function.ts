function hello2(name: string): string {
  // if (true) {
  //   return;
  // }

  return `Hello ${name}`;
}

function hello3(name: string): string | undefined {
  if (Math.random() > 0.5) {
    return;
  }

  return `Hello ${name}`;
}

function log(val: any): void {
  console.log(val);
}

function throwError(): never {
  throw new Error('Message');
}

function withOptionnalParam(msg = '') {
  return msg;
}
withOptionnalParam();

function withOptionnalParam2(msg?: string) {
  return msg;
}
withOptionnalParam2();

function withVariableParams(...nbs: number[]) {

}

withVariableParams(1, 2, 3, 4, 5);

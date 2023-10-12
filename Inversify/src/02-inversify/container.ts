import { Container } from 'inversify';
import { Logger } from './Logger.js';
import { WriterInterface } from './WriterInterface.js';
import { ConsoleWriter } from './ConsoleWriter.js'; // @injectable à l'intérieur
import { FileWriter } from './FileWriter.js';

export const container = new Container();

container.bind(FileWriter).toDynamicValue(() => {
  return new FileWriter('app.log');
}).inSingletonScope();
container.bind(ConsoleWriter).toSelf().inSingletonScope();
container.bind(Logger).toSelf().inSingletonScope();

if (process.env.NODE_ENV === 'production') {
  container.bind(WriterInterface).toService(FileWriter);
} else {
  container.bind(WriterInterface).toService(ConsoleWriter);
}

// .inRequestScope() === inSingletonScope()
// si on demande MyService (qui dépend 2 fois de ConsoleWriter)
// .inRequestScope() === inTranscientScope() si je demande dans mon main 2 fois  ConsoleWriter
//     ConsoleWriter
//          ^      ^
//          |       \
//       Logger      \
//          ^    LambdaService
//           \    ^
//            \  /
//          MyService


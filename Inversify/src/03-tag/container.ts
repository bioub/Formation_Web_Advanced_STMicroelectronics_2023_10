import { Container } from 'inversify';
import { Logger } from './Logger.js';
import { WriterInterface } from './WriterInterface.js';
import { ConsoleWriter } from './ConsoleWriter.js'; // @injectable à l'intérieur
import { FileWriter } from './FileWriter.js';

export const container = new Container();

container.bind(WriterInterface).toDynamicValue(() => {
  return new FileWriter('app.log');
}).inSingletonScope().whenTargetTagged('env', 'production');

container.bind(WriterInterface).to(ConsoleWriter).inSingletonScope().whenTargetTagged('env', 'development');

container.bind(Logger).toSelf().inSingletonScope();



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


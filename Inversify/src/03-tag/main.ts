import 'reflect-metadata'; // avant tous les @injectable

import { container } from "./container.js";
import { Logger } from "./Logger.js";

const logger = container.get(Logger);
await logger.log('Message');


const logger2 = container.get(Logger);
console.log(logger === logger2); // true

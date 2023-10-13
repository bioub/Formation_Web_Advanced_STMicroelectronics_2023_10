import 'reflect-metadata';

import { UserPage } from './UserPage';
import { container } from './container';

const userPage = container.get(UserPage);
userPage.render();

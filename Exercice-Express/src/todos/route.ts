import express from 'express';
import {
  createCtrl,
  deleteCtrl,
  listCtrl,
  replaceCtrl,
  showCtrl,
  updateCtrl,
} from './controller';

export const router = express.Router();

// prettier-ignore
router.get(
  '', // préfixé par /api/todos (enregistré dans app.js)
  listCtrl,
);

// prettier-ignore
router.get(
  '/:todoId', // préfixé par /api/todos (enregistré dans app.js)
  showCtrl,
);

// prettier-ignore
router.post(
  '', // préfixé par /api/todos (enregistré dans app.js)
  express.json(),
  createCtrl,
);

// prettier-ignore
router.delete(
  '/:todoId', // préfixé par /api/todos (enregistré dans app.js)
  deleteCtrl,
);

// prettier-ignore
router.put(
  '/:todoId', // préfixé par /api/todos (enregistré dans app.js)
  express.json(),
  replaceCtrl,
);

// prettier-ignore
router.patch(
  '/:todoId', // préfixé par /api/todos (enregistré dans app.js)
  express.json(),
  updateCtrl,
);

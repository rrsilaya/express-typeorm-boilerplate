import { Router } from 'express';

import {
  entityRouter
} from './entities';

const router = Router();

router.use(entityRouter);

export default router;
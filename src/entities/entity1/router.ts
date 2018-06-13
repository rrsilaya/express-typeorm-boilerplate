import { Router } from 'express';
import * as Ctrl from './controller';

import { authMiddleware } from './middleware';

const router = Router();

router.get('/entity', authMiddleware, Ctrl.getEntities);
router.get('/entity/:id', Ctrl.getEntity);
router.post('/entity', Ctrl.addEntity);
router.put('/entity/:id', Ctrl.editEntity);
router.delete('/entity/:id', Ctrl.deleteEntity);

export default router;
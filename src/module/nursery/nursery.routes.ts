import express from 'express';
import { nurseryController } from './nursery.controller';
import nurseryValidationSchema from './nursery.validation';
import validateRequst from '../../utils/validationRequest';

const router = express.Router();

router.post(
  '/create-nursery',
  validateRequst(nurseryValidationSchema),
  nurseryController.createNursery,
);

router.get('/', nurseryController.getAllNursery);
router.get(
  '/:id',
  nurseryController.getNurseryById,
  router.put('/:id', nurseryController.updateNursery),
);

router.delete('/:id', nurseryController.deleteNursery);

export const nurseryRoute = router;

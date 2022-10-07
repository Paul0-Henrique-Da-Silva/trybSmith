import { Router } from 'express';
import ControllerOrder from '../controllers/orders.controller';

const router = Router();

const controllerOrder = new ControllerOrder();

router.get('/', controllerOrder.getAll);

export default router;

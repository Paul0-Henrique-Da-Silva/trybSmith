import { Router } from 'express';
import ControllerProduct from '../controllers/products.controller';

const router = Router();

const controllerProduct = new ControllerProduct();

router.post('/', controllerProduct.create);

export default router;

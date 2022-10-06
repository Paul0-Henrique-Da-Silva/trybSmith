import { Router } from 'express';
import ControllerUser from '../controllers/users.controlle';

const router = Router();

const controlleUser = new ControllerUser();

router.post('/', controlleUser.create);

export default router;

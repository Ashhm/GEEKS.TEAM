import express, {Router} from 'express';
import * as authController from '../controllers/auth';

const router = express.Router();

router.post('/signin', authController.signin);
router.post('/signup', authController.signup);

export default router;

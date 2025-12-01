import express from 'express';
import { authFoodPartnerMiddleware } from '../middleware/auth.middleware.js';
import { createFood } from '../controller/food.controller.js';
import { getFoodItems } from '../controller/food.controller.js';
const router = express.Router();
import multer from 'multer';
import { authUserMiddleware } from '../middleware/auth.middleware.js';
const upload = multer({
  storage: multer.memoryStorage(),
});

router.post('/', authFoodPartnerMiddleware, upload.single('video'), createFood);

router.get('/', authUserMiddleware, getFoodItems);

export default router;

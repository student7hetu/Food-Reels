import express from 'express';
import authFoodPartnerMiddleware from '../middleware/auth.middleware.js';
import createFood from '../controller/food.controller.js';
const router = express.Router();
import multer from 'multer';

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post('/', authFoodPartnerMiddleware, upload.single('video'), createFood);

export default router;

import express from 'express';
import {
  loginUser,
  registerUser,
  logoutUser,
  registerFoodPartner,
  loginFoodPartner,
  logoutFoodPartner,
} from '../controller/auth.controller.js';

const router = express.Router();

//user auth api
router.post('/user/register', registerUser);
router.post('/user/login', loginUser);
router.post('/user/logout', logoutUser);

//food partner auth api
router.post('/food-partner/register', registerFoodPartner);
router.post('/food-partner/login', loginFoodPartner);
router.post('/food-partner/logout', logoutFoodPartner);

export default router;

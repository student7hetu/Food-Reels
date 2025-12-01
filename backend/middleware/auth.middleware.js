import { foodPartnerModel } from '../models/foodpartner.model.js';
import jwt from 'jsonwebtoken';
import { userModel } from '../models/user.model.js';

const authFoodPartnerMiddleware = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Login first" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const foodPartner = await foodPartnerModel.findById(decoded.id);

    if (!foodPartner) {
      return res.status(404).json({ message: "Food partner not found" });
    }

    req.foodPartner = foodPartner;
    next();
    
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};


const authUserMiddleware = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Login first" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;
    next();

  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export { authFoodPartnerMiddleware, authUserMiddleware };
import { userModel } from '../models/user.model.js';
import { foodPartnerModel } from '../models/foodpartner.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const registerUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    const isUserAlreadyExists = await userModel.findOne({ email });

    if (isUserAlreadyExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      fullName,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_SECRET
    );
    res.cookie('token', token);

    res.status(201).json({ message: 'User registered successfully:', user });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: 'User does not exist' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    JWT_SECRET
  );
  res.cookie('token', token);
  res.status(200).json({ message: 'Login successful', user });
};

const logoutUser = (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ message: 'User logout successful' });
};

const registerFoodPartner = async (req, res) => {
  const { name, email, password } = req.body;

  const isAccountAlreadyExists = await foodPartnerModel.findOne({ email });

  if (isAccountAlreadyExists) {
    return res.status(400).json({ message: 'Account already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const foodPartner = await foodPartnerModel.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign(
    {
      id: foodPartner._id,
    },
    JWT_SECRET,
  );
  res.cookie('token', token);

  res
    .status(201)
    .json({ message: 'Food partner registered successfully', foodPartner });
};

const loginFoodPartner = async (req, res) => {
  const { email, password } = req.body;

  const foodPartner = await foodPartnerModel.findOne({ email });

  if (!foodPartner) {
    return res.status(400).json({ message: 'Food partner does not exist' });
  }

  const isPasswordValid = await bcrypt.compare(password, foodPartner.password);

  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign(
    {
      id: foodPartner._id,
    },
    JWT_SECRET
  );
  res.cookie('token', token);
  res.status(200).json({ message: 'Login successful', foodPartner });
};

const logoutFoodPartner = (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ message: 'Food partner logout successful' });
};

export {
  registerUser,
  loginUser,
  logoutUser,
  registerFoodPartner,
  loginFoodPartner,
  logoutFoodPartner,
};

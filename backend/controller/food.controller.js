import { foodModel } from '../models/food.model.js';

const createFood = async (req, res) => {
    console.log(req.foodPartner);
    console.log(req.body);
};

export default createFood;

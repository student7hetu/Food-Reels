import { foodModel } from "../models/food.model.js";
import { uploadFile } from "../services/storage.services.js";
import { v4 as uuid } from "uuid";

const createFood = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Video file is required" });
    }

    const fileBase64 = req.file.buffer.toString("base64");
    const fileUploadResult = await uploadFile(fileBase64, uuid());

    const foodItem = await foodModel.create({
      name: req.body.name,
      description: req.body.description,
      video: fileUploadResult.url,
      foodPartner: req.foodPartner._id,
    });

    res.status(201).json({ message: "Food created successfully", foodItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating food" });
  }
};

const getFoodItems = async (req, res) => {
  const foodItems = await foodModel.find({});
  res.status(200).json({ foodItems });
};

export { createFood, getFoodItems };

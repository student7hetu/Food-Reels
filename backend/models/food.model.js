import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    video: {
        type: String,
        required: true,
    },
    description: {
        type: String,   
    },
    foodPartner: {
        type: mongoose.Schema.ObjectId,
        ref: 'foodPartnerModel',
    }
}, { timestamps: true });

export const foodModel = mongoose.model('foodModel', foodSchema);

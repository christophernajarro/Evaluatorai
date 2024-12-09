import mongoose from "mongoose";
import { paymentMethods } from "../utils/utils.js";

const PurchaseSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.ObjectId,
            required: true
        },
        itemId: {
            type: mongoose.Schema.ObjectId,
            required: true
        },
        transactionId: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true,
        },
        paymentMethod: {
            type: String,
            required: true,
            enum: paymentMethods
        },
    },
    { timestamps: true }
);

const Purchase = mongoose.model("Purchase", PurchaseSchema);

export default Purchase;
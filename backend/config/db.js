import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://sonuchawhan28:sonuchawhan82.@cluster0.b59mclf.mongodb.net/food-del").then(()=>console.log("DB Connected"));
}

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.info("MongoDB: ", "Connecting");
    await mongoose.connect(process.env.MONGO_DB_URI as string);
  } catch (error) {
    console.log("MongoDB: error", error);
  }
};

export default connectDB;

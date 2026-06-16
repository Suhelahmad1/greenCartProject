import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Datebase Connected"),
    );
    await mongoose.connect(`${process.env.MONGO_URI}`);
  } catch (err) {
    console.error(err.message);
  }
};

export default connectDB;

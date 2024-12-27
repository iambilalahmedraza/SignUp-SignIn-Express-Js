import mongoose from "mongoose";

const connection = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/secure-auth")
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB", err);
    });
};

export default connection;

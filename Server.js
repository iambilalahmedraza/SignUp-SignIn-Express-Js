import dotenv from "dotenv";
import express from "express";
import connection from "./Database/connection.js";
dotenv.config();
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sign Up Route

app.use("/user", userRoutes);
connection();
const PORT = 5019;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import express from "express";

import {
  deleteUser,
  getAllUsers,
  getSingleUser,
  signin,
  signUp,
  updateUser,
} from "../controller/userControllers.js";

const router = express.Router();

// Sign Up Route

router.post("/signupuser", signUp);
//signin user
router.post("/signinuser", signin);

//get all users
router.get("/getusers", getAllUsers);

//update user
router.put("/updateuser/:id", updateUser);

//delete user
router.delete("/deleteuser/:id", deleteUser);

// get single user

router.get("/getuser/:id", getSingleUser);

export default router;

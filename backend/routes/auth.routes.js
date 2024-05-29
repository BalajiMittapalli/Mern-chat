import express from "express";
import { login,signUp,logout } from "../controllers/authController.js"
const router=express.Router()

router.post("/signUp",signUp);

router.post("/login",login);

router.post("/logOut",logout);

export default router;
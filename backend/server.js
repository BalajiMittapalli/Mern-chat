import express from "express";
import dotenv from "dotenv";

import cookieParser from "cookie-parser";
import authRoutes from  "./routes/auth.routes.js"
import messageRoutes from  "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoutes.js";
import path from "path";

import connectToMongoDB from "./db/connectToMongoDB.js";
import {app,server} from './socket/socket.js';

app.use(express.json());
app.use(cookieParser())

dotenv.config();

const PORT=process.env.PORT || 5000;


app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);



server.listen(PORT,()=> {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)}
);


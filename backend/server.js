import express from "express";
import dotenv from "dotenv";

import cookieParser from "cookie-parser";
import authRoutes from  "./routes/auth.routes.js"
import messageRoutes from  "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoutes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
const app = express();
app.use(express.json());
app.use(cookieParser())

dotenv.config();

const PORT=process.env.PORT || 5000;

// app.get("/",(req,res)=>{
// //    root route http://localhost:8000/
//     res.send("Hello from server")
// })

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);
app.listen(PORT,()=> {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)}
);


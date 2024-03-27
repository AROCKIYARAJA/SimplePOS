import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Router from "./Routes.js";
import cors from "cors";

dotenv.config()

// const CONNECT_URL = process.env.CONNECT_URL;
// const PORT = process.env.PORT;

const app = express();
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use("/Emart", Router);
app.use(cors());
app.use(express.json());


mongoose.connect(mongodb+srv://DemoOne:DemoOne@arockiyaraja.6ottvpg.mongodb.net/SIMPLEPOS?retryWrites=true&w=majority&appName=arockiyaraja).then(() => {
    app.listen(5000, () => {
        console.log(`\n The Server is Running on http://localhost:5000 \n`)
    })
}).catch(error => console.log(error))

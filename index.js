import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Router from "./Routes.js";
import cors from "cors";

dotenv.config()

const CONNECT_URL = process.env.CONNECT_URL;
const PORT = process.env.PORT;

const app = express();
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use("/Emart", Router);
app.use(cors());
app.use(express.json());


mongoose.connect(CONNECT_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`\n The Server is Running on http://localhost:${PORT} \n`)
    })
}).catch(error => console.log(error))

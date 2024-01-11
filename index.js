import express from "express";
const app = express();
import dotenv from "dotenv"
import Connection from "./db/conn.js";
import productRouter from "./routes/productRoutes.js";

dotenv.config()
const PORT = process.env.PORT || 8000;
Connection();
app.use(express.json())

app.use("/api/v1/product", productRouter)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})
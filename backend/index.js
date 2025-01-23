import mongoose  from "mongoose"
import express from "express"
import User from "./model/schema.js"
import connectDB from "./config/db.js"
import chatRoutes from "./routes/chatRoutes.js"

const app = express();

app.use(express.json());
connectDB();

app.get("/", (req, res) => {
    res.send("API is running");
});

app.use("/api/users", chatRoutes);

const PORT =5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
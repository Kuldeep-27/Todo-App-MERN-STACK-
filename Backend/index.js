const express = require('express');
const connectDB = require('./dbConnect');
const app = express();
require('dotenv').config();
const cors = require('cors');
const authRouter = require("./routes/authRouter");
const todoRouter = require("./routes/todoRouter");

app.use(express.json({ limit: "10mb" }));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173"
  
  })
);

app.use("/auth",authRouter);
app.use("/todo",todoRouter);



connectDB().then(()=>{
    app.listen(process.env.PORT,()=>console.log("Server is Listen on Port 4000"))


})



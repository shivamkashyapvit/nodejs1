require("dotenv").config();

const express = require ('express');
const { json } = require('express/lib/response');
const app = express();
const userRouter = require("./api/users/user.router")

app.use(express.json())

app.use("/api/users",userRouter)

app.listen(process.env.APP_PORT,() =>{
    console.log("server up and running this : ", process.env.APP_PORT);
})
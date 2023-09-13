import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app=express();
const port=5000;

app.use(bodyParser());
app.use(cors());

app.get("/",(req,res)=>res.send("hii"));

app.listen(port,()=>
console.log(`Server running on port:http//:localhost:${port}`));

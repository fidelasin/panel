import  express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

const app =express();
dotenv.config();
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.get("/",(req,res)=>{
    res.json({
        "yayinci":"mehmet ayyıldız"
    })
})

const PORT =process.env.PORT || 5000;

const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    app.listen(PORT,()=>{
        console.log("Çalışıyor");
    })
})
.catch((error)=>{console.error(error.message)})

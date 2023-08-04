import dotenv from "dotenv";
dotenv.config();
import  express from 'express';
import  mongoose from 'mongoose';
import  router from './routes/ToDoRoute.js';
import  cors from 'cors';

const app = express();
const Port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())
mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log("connected"))
.catch((err)=>console.log(err))

app.use(router);
app.listen(Port, function(){
    console.log("server is listening")
})
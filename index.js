import express from 'express' ;
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

//For Post routes
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
// Cors header
app.use(cors());

app.use('/posts',postRoutes);// Every route inside postroutes is gonna start with /posts...localhost5000/posts

app.get("/",(req,res)=>{
    res.send("Hello to celebrations api")
})

//Connecting server to the database
// const CONNECTION_URL = 'mongodb+srv://Shishir123:Shishir123@cluster0.14ymp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser:true, useUnifiedTopology:true})
 .then(() => app.listen(PORT, () => console.log(`Server running on port:${PORT}`)))
 .catch((error) =>console.log(error.message));

 mongoose.set('useFindAndModify',false);
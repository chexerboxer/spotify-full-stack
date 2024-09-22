//cloudinary -> images and audio
//multer -> upload impage file 
//cors -> connect backend with front end
//express -> backend apis
//mongoose DB

import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRoute.js';

// config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middleware
app.use(express.json());
app.use(cors());

// initialize routes
app.use("/api/song", songRouter)
app.use("/api/album", albumRouter)

app.get('/', (req,res)=>res.send("API working!"));
app.listen(port, ()=>console.log(`Server started on ${port}`))

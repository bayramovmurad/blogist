import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import postRouter from './router/posts.js'

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


app.get('/', (req, res) => {
    res.json({
        author: "coding with murad...",
        describe: "bla bla bla"
    })
});

app.use("/posts", postRouter);

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.CONNECTION_URL)
    .then(()=>{
        app.listen(PORT, ()=>{
            console.log(`Server is running on ${PORT}`);
        })
    })
    .catch(error => console.log(error));


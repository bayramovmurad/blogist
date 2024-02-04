import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import mongoose from 'mongoose';

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
})

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.CONNECTION_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        app.listen(PORT, ()=>{
            console.log(`Server is running on ${PORT}`);
        })
    })
    .catch(error => console.log(error));

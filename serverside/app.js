import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import interviewRouter from './Controller/interview.js';
import employeeRouter from './Controller/employee.js';

// Base Configuration
const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))


// Route Configuration
app.use("/interview/" , interviewRouter);
app.use("/employee/" , employeeRouter);


// Mongo Connection
const PORT = process.env.PORT || 5000;
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is Listening at http://localhost:${PORT}/  `);
    })
}).catch((err)=>{
    console.log(`${err} Not Connected `);
})

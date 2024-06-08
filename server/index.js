import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());      //to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);

// app.get('/', (req,res) => {
//   res.send("Server is running!!");
// });


app.listen(port, () => {
  connectToMongoDB();
  console.log(`Server is running on Port ${port}`);
})
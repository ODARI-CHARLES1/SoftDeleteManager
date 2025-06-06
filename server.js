import express from 'express';
import userRegistration from './Services/userRegistration.js';
import { config } from 'dotenv';
import router from './Routes/user.js';
const app = express();
app.use(express.json())
config()


const mongo_url=process.env.MONGO_URL
const PORT = process.env.PORT || 3000;
const register=new userRegistration()

register.connect(mongo_url)

app.use("/user/register",router)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:PORT`);
});
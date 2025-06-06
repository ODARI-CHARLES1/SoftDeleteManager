import express from 'express';
import UserRegistration from '../Services/userRegistration.js';
import user from '../Models/user.js';
import { saveNewUser,getRegisteredUsers } from '../Controllers/user.js';

const router = express.Router();

router.post("/", saveNewUser);

router.get("/",getRegisteredUsers)
export default router;

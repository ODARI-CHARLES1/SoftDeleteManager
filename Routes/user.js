import express from 'express';
import UserRegistration from '../Services/userRegistration.js';
import user from '../Models/user.js';
import { saveNewUser,getRegisteredUsers, updateUserById,getRegisteredUserById } from '../Controllers/user.js';

const router = express.Router();

router.post("/", saveNewUser);
router.get("/users",getRegisteredUsers)
router.get("/:id",getRegisteredUserById)
router.post("/update/:id",updateUserById)
export default router;

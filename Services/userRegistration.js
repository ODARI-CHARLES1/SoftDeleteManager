import mongoose, { mongo } from "mongoose";
import user from "../Models/user.js";
import dbConnect from "../Config/db.js";
class UserRegistration {

  constructor() {
  }

  async connect(mongo_url) {
    dbConnect(mongo_url)
  }
  
  async saveUser(body){
    try{
        const {name,email}=body
        const newUser=new user({name,email})
        await newUser.save();
        console.log("user saved successfully.......")
        return newUser
    }
    catch(err){
        console.log("failed to save user............")
    }
  }

  async getUsers(){
    try {
        const users=await user.find()
        return users
    } catch (error) {
        console.log("failed to collect data from db.....")
    }

  }
}


export default UserRegistration;

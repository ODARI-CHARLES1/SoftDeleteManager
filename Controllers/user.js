import UserRegistration from "../Services/userRegistration.js";

export const saveNewUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required." });
    }

    const register = new UserRegistration();
    const registeredUser = await register.saveUser(req.body);

    if (registeredUser.status) {
      return res.status(201).json({
        message: "User Registered Successfully.",
        user: registeredUser.user,
      });
    } else {
      return res.status(409).json({
        message: "User Already Exists",
        user: "already exists",
      });
    }

  } catch (error) {
    return res.status(500).json({ error: "Failed to register new user." });
  }
};

export const getRegisteredUsers = async (req, res) => {
  try {
    const register = new UserRegistration();
    const users = await register.getUsers();

    return res.status(200).json({ message: "Stored users", users });
  } catch (err) {
    console.error("Error fetching users:", err);
    return res.status(500).json({ error: "Failed to retrieve users." });
  }
};

export const getRegisteredUserById=async(req,res)=>{
  try {
    const registered=new UserRegistration()
    const user=await registered.getUserById(req.params.id)
    if(user){
      return res.status(200).json({message:"Stored user",user})
    }
    else{
      return res.status(404).json({message:"User doesnt exist",user:"None"})
    }
  } catch (error) {
    console.error("Error Fetching user",error)
    return res.status(500).json({error:"Failed to retrieve user"})
  }
}



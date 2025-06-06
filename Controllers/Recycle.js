
import UserRegistration from "../Services/index.js";
export const saveNewUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required." });
    }

    const register = new UserRegistration();
    const registeredUser = await register.saveUser(req.body);

    console.log("Registered user:", registeredUser);
    res.status(201).json({ message: "User registered successfully", user: registeredUser });

  } catch (error) {
    console.error("Failed to register new user.", error);
    res.status(500).json({ error: "Failed to register new user." });
  }
};

export const getRegisteredUsers = async (req, res) => {
  try {
    const register = new UserRegistration();
    const users = await register.getUsers();

    res.status(200).json({ message: "Stored users", users });
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Failed to retrieve users." });
  }
};

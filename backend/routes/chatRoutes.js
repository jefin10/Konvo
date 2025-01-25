import express from "express";
import User from "../model/schema.js";

const router = express.Router()
router.post('/register', async(req,res) =>{
    const { userId,username, password } = req.body;
    try{
        const user = await User.findOne({userId});
        if (user){
            return res.status(400).json({ message: "User already exists" });
        }
        const newuser = new User({
            userId:userId,
            username:username,
            password:password,
        })
        await newuser.save();
        res.status(201).json({ message: "User created successfully", user: newuser });
    } catch (err) {
        res.status(500).json({ message: "Error creating user", error: err.message });
    }
    
});
router.post('/send-message', async(req,res) =>{
    console.log("inside backend send")
    const { userId, chatPerson, text } = req.body;
    console.log("inside backend send1")
    try{
        console.log("inside backend send1")
        const user = await User.findOne({userId});
        console.log("inside backend send1")
        if (!user) {
            console.log("inside backend send2")
            return res.status(404).json({ message: "User not found" });
        }
        console.log("inside backend send1")
        let chatPersonEntry = user.chat_people.find(cp => cp.chat_person === chatPerson);
        if (!chatPersonEntry){
            user.chat_people.push({
                chat_person: chatPerson,
                chat: [], 
                timestamp: Date.now(),
            });

            chatPersonEntry = user.chat_people[user.chat_people.length - 1];
        }
        console.log("inside backend send1")
        chatPersonEntry.chat.push({
            text,
            time: Date.now(),
            sent: true,
        });
        await user.save();

        const rec = await User.findOne({userId: chatPerson});
        if (!rec) {
            return res.status(404).json({ message: "Recipient user not found" });
        }
        
        let recchatPersonEntry = rec.chat_people.find(cp => cp.chat_person === userId);
        if (!recchatPersonEntry){
            rec.chat_people.push({
                chat_person: userId,
                chat: [], 
                timestamp: Date.now(),
            });

            recchatPersonEntry = rec.chat_people[rec.chat_people.length - 1];
        }
        recchatPersonEntry.chat.push({
            text,
            time: Date.now(),
            sent: false,
        });
        await rec.save();
        res.status(200).json({ message: "Message sent successfully" });

    }catch (err) {
        res.status(500).json({ message: "Error sending message", error: err.message });
    }
});
router.get("/:userId/chats/:chatPerson", async (req,res) => {
    const { userId, chatPerson }=req.params;

    try {
        const user = await User.findOne({ userId });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const chatPersonEntry = user.chat_people.find(
            cp => cp.chat_person.trim().toLowerCase() === chatPerson.trim().toLowerCase()
        );
        

        if (!chatPersonEntry) {
            return res.status(404).json({ message: "Chat not found" });
        }

        res.status(200).json(chatPersonEntry.chat);
    } catch (err) {
        res.status(500).json({ message: "Error fetching chats", error: err.message });
    }
});
router.get("/chat/:userId/:password", async (req, res) => {
    const {userId, password} = req.params;
    console.log(userId , password)

    try {
        console.log("Processing login for userId:", userId);
        const user = await User.findOne({userId});

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: "Wrong password" });
        }

        res.status(200).json(user);
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ message: "Error during login", error: err.message });
    }
});
router.get('/chats/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findOne({ userId });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        const chatPeople = user.chat_people;
        
        if (!chatPeople || chatPeople.length === 0) {
            return res.status(200).json([]); 
        }
        
        return res.status(200).json(chatPeople);
        
    } catch (err) {
        res.status(500).json({ message: "Error fetching chats", error: err.message });
    }
});
router.get('/search/:query', async (req, res) => {
    const { query } = req.params;
  
    try {
      const user = await User.findOne({ userId: query });
      if (user) {
        return res.status(200).json({ exists: true, userId: user.userId });
      } else {
        return res.status(404).json({ exists: false });
      }
    } catch (error) {
      console.error('Error searching user:', error);
      res.status(500).json({ error: 'Error searching user' });
    }
});
export default router;


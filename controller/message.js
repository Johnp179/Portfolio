const express = require("express")
const router = express.Router()
const Message = require("../models/Message.js")


router.get("/get-all", async(req, res)=> {
    try{
        const messages = await Message.find({});
        res.send(messages)
    }catch(e){
        res.status(500).end();
        console.error(e);
    }
 
})
 
router.post("/add", async (req, res)=>{
    const message = new Message(req.body);

    try{
        await message.save();
        res.status(201).end();
    }catch(e){
        res.status(500).end();
        console.error(e);
    }

    
})


module.exports = router

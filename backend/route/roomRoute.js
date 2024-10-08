const express = require("express");
const router = express.Router();
const Room = require('../models/room');

// ดึงข้อมูลห้องทั้งหมด
router.get("/getallrooms", async (req, res) => {
   try {
       const rooms = await Room.find({});
       res.send(rooms);
   } catch (error) {
       return res.status(400).json({ message: error });
   }
});

// ดึงข้อมูลห้องโดยใช้ ID
router.get("/getroombyid/:roomid", async (req, res) => {
     const roomid = req.params.roomid; // ใช้ req.params แทน req.body
     try {
         const room = await Room.findOne({ _id: roomid });
         if (!room) {
             return res.status(404).json({ message: "Room not found" }); // เพิ่มการตรวจสอบว่า room พบหรือไม่
         }
         res.send(room);
     } catch (error) {
         return res.status(400).json({ message: error });
     }
});

module.exports = router;

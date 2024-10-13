const express = require("express");
const router = express.Router();
const Room = require('../models/room');

// ดึงข้อมูลห้องทั้งหมด
router.get("/getallrooms", async (req, res) => {
    try {
        const rooms = await Room.find({});
        res.status(200).json(rooms); // ส่งสถานะ 200 พร้อมข้อมูลห้อง
    } catch (error) {
        console.error("Error fetching all rooms:", error); // เพิ่มการ log ข้อผิดพลาด
        res.status(500).json({ message: "Server error" }); // ส่งสถานะ 500 สำหรับข้อผิดพลาดของเซิร์ฟเวอร์
    }
});

// ดึงข้อมูลห้องโดยใช้ ID
router.get("/getroombyid/:roomid", async (req, res) => {
    const roomid = req.params.roomid; // ใช้ req.params แทน req.body
    try {
        const room = await Room.findById(roomid); // ใช้ findById แทน findOne
        if (!room) {
            return res.status(404).json({ message: "Room not found" }); // เพิ่มการตรวจสอบว่า room พบหรือไม่
        }
        res.status(200).json(room); // ส่งสถานะ 200 พร้อมข้อมูลห้อง
    } catch (error) {
        console.error("Error fetching room by ID:", error); // เพิ่มการ log ข้อผิดพลาด
        res.status(500).json({ message: "Server error" }); // ส่งสถานะ 500 สำหรับข้อผิดพลาดของเซิร์ฟเวอร์
    }
});

module.exports = router;
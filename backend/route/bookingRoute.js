const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");
const moment = require("moment");
router.post("/bookroom", async (req, res) => {
    const { room, userid, fromDate, toDate, totalDays, totalAmount } = req.body; 
    
    try {
      const newBooking = new Booking({
        room: room.name,
        roomid: room._id,
        userid,
        fromdate: moment(fromDate).format("DD-MM-YYYY"),
        todate: moment(toDate).format("DD-MM-YYYY"),
        totalamount: totalAmount,
        totaldays: totalDays,
        transactionId: '1234'
      });
  
      // บันทึก booking ลงฐานข้อมูล
      const booking = await newBooking.save();
      
      // ส่งผลลัพธ์กลับ
      res.status(200).json({ success: true, booking });
    } catch (error) {
      console.error('Error saving booking:', error);
      res.status(500).json({ success: false, message: "An error occurred" });
    }
  });
  

module.exports = router;

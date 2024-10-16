const mongoose = require('mongoose');

const mongoURL = 'your-mongodb-connection-string';  // ใส่ MongoDB URL ที่ถูกต้อง

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('เชื่อมต่อ MongoDB สำเร็จ');
});

connection.on('error', (err) => {
    console.log('การเชื่อมต่อ MongoDB ล้มเหลว:', err);
});
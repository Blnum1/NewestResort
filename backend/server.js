const express = require("express");

const app = express();

const dbConfig = require('./db');
const roomsRoute = require('./route/roomRoute');
const usersRoute = require('./route/usersRoute');
const bookingRoute = require('./route/bookingRoute');

app.use(express.json())
app.use('/api/rooms' , roomsRoute)
app.use('/api/users' , usersRoute)
app.use('/api/booking' , bookingRoute)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Node server Started using nodemon`));
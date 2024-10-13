import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../components/Room";
import Loader from "../components/Loader";
import 'antd/es/style/reset.css';
import Error from "../components/Error";
import moment from 'moment';
import { DatePicker, Space } from 'antd'; 
const { RangePicker } = DatePicker;

function Homescreen() {
  const [rooms, setrooms] = useState([]); 
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  const [fromDate, setfromdate] = useState();
  const [toDate, settodate] = useState();

  useEffect(() => {
    (async () => {
      try {
        setloading(true);
        const { data } = await axios.get("/api/rooms/getallrooms");
        setrooms(data);
        setloading(false);
      } catch (error) {
        seterror(error);
        console.log(error);
        setloading(false);
      }
    })();
  }, []);

  function filterByDate(dates) {
    if (dates && dates.length) {
        const fromdate = dates[0].format('DD-MM-YYYY'); // ได้รับวันที่แบบ string
        const todate = dates[1].format('DD-MM-YYYY'); // ได้รับวันที่แบบ string
        setfromdate(fromdate); // ตั้งค่าที่เป็น string
        settodate(todate); // ตั้งค่าที่เป็น string
        console.log("From Date:", fromdate);
        console.log("To Date:", todate);
    } else {
        console.log("No dates selected");
    }
}

  return (
    <div className="container">
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <div className='row mt-5'>
          <div className='col-md-3'>
            <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          {loading ? (
            <Loader />
          ) : error ? (
            <Error />
          ) : (
            rooms.map((room) => (
              <div className="col-md-9 mt-2" key={room.id}>
                <Room room={room} fromdate={fromDate} todate={toDate} />
              </div>
            ))
          )}
        </div>
      </Space>
    </div>
  );
}

export default Homescreen;
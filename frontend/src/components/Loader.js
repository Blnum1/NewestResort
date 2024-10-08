import React from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import { useState } from 'react';




function Loader() {
  let [loading] = useState(true); // ตั้งค่าให้ loading เป็น true
  
  
  return (
    <div style={{marginTop: '150px'}}>
    <div className="sweet-loading">
      <SyncLoader
        color="#70f6ff"
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
    </div>
  );
}

export default Loader;

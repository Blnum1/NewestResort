import React from 'react';

function NewsScreen() {
  const newsArticles = [
    {
      id: 1,
      title: "โปรโมชั่นพิเศษเดือนนี้",
      date: "2024-10-01",
      content: "เข้าพัก 3 คืน รับส่วนลด 20% ในการจองห้องพัก!",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/598698793.jpg?k=06a1d82a977b8abcd07b1a62cd7dc02d40fa8fc3d91d32a666dacbf27d4309c0&o=&hp=1",
    },
    {
      id: 2,
      title: "กิจกรรมพิเศษในวันหยุด",
      date: "2024-10-05",
      content: "เข้าร่วมกิจกรรมทำอาหารที่รีสอร์ทในสุดสัปดาห์นี้!",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/212067293.jpg?k=e7ed97cc7b9888711e33d022a55d2dfb801045a92b0cb7ed7329a682cd3ff85d&o=&hp=1", // เปลี่ยนเป็น URL ของภาพที่แท้จริง
    },
    {
      id: 3,
      title: "บริการใหม่ที่รีสอร์ท",
      date: "2024-10-07",
      content: "เรามีบริการสปาใหม่ ที่จะทำให้คุณรู้สึกผ่อนคลาย!",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/273295139.jpg?k=fd78a47ee5c09df0131d54472a15f6f7bf964412efeaaa31526205ead7efd461&o=&hp=1", // เปลี่ยนเป็น URL ของภาพที่แท้จริง
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">ข่าวสารและกิจกรรม</h1>
      <div className="row">
        {newsArticles.map(article => (
          <div className="col-md-4 mb-4" key={article.id}>
            <div className="card">
              <img src={article.image} alt={article.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text"><strong>{article.date}</strong></p>
                <p className="card-text">{article.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsScreen;

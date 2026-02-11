const planets = {
  mercury: {
    name: "ดาวพุธ",
    img: "https://solarsystem.nasa.gov/system/feature_items/images/18_mercury_new.png",
    detail: "ดาวเคราะห์ใกล้ดวงอาทิตย์ที่สุด\nอุณหภูมิเปลี่ยนแปลงรุนแรง\nไม่มีบรรยากาศหนาแน่น"
  },
  venus: {
    name: "ดาวศุกร์",
    img: "https://solarsystem.nasa.gov/system/feature_items/images/27_venus_jg.png",
    detail: "บรรยากาศหนามาก\nเกิดภาวะเรือนกระจก\nร้อนที่สุดในระบบสุริยะ"
  },
  earth: {
    name: "โลก",
    img: "https://solarsystem.nasa.gov/system/feature_items/images/17_earth.png",
    detail: "มีน้ำในสถานะของเหลว\nมีบรรยากาศเหมาะสม\nมีสิ่งมีชีวิตอาศัย"
  },
  mars: {
    name: "ดาวอังคาร",
    img: "https://solarsystem.nasa.gov/system/feature_items/images/19_mars.png",
    detail: "พื้นผิวสีแดง\nมีน้ำแข็งใต้ผิวดิน\nเป้าหมายสำรวจมนุษย์"
  },
  jupiter: {
    name: "ดาวพฤหัสบดี",
    img: "https://solarsystem.nasa.gov/system/feature_items/images/16_jupiter_new.png",
    detail: "ใหญ่ที่สุดในระบบสุริยะ\nมีจุดแดงใหญ่\nเป็นแก๊สยักษ์"
  },
  saturn: {
    name: "ดาวเสาร์",
    img: "https://solarsystem.nasa.gov/system/feature_items/images/28_saturn.png",
    detail: "มีวงแหวนชัดเจน\nประกอบด้วยน้ำแข็ง\nสวยงามโดดเด่น"
  },
  uranus: {
    name: "ดาวยูเรนัส",
    img: "https://solarsystem.nasa.gov/system/feature_items/images/29_uranus.png",
    detail: "หมุนเอียงเกือบ 90 องศา\nมีฤดูกาลรุนแรง\nเป็นแก๊สน้ำแข็ง"
  },
  neptune: {
    name: "ดาวเนปจูน",
    img: "https://solarsystem.nasa.gov/system/feature_items/images/30_neptune.png",
    detail: "ลมแรงที่สุด\nสีน้ำเงินเข้ม\nอยู่ไกลดวงอาทิตย์มาก"
  }
};

function showPlanet(key) {
  const p = planets[key];
  document.getElementById("planetName").innerText = p.name;
  document.getElementById("planetImage").src = p.img;
  document.getElementById("planetDetail").innerText = p.detail;
}

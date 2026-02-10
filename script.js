const planets = {
  mercury: {
    name: "ดาวพุธ",
    detail: "อยู่ใกล้ดวงอาทิตย์ที่สุด\nอุณหภูมิเปลี่ยนรุนแรง\nพื้นผิวคล้ายดวงจันทร์"
  },
  venus: {
    name: "ดาวศุกร์",
    detail: "ร้อนที่สุดในระบบสุริยะ\nมีบรรยากาศหนา\nเมฆกรดกำมะถัน"
  },
  earth: {
    name: "โลก",
    detail: "มีสิ่งมีชีวิต\nมีน้ำในสถานะของเหลว\nมีสนามแม่เหล็ก"
  },
  mars: {
    name: "ดาวอังคาร",
    detail: "ดาวสีแดง\nเคยมีน้ำในอดีต\nเป้าหมายการสำรวจ"
  },
  jupiter: {
    name: "ดาวพฤหัสบดี",
    detail: "ใหญ่ที่สุด\nมีจุดแดงใหญ่\nมีดวงจันทร์จำนวนมาก"
  },
  saturn: {
    name: "ดาวเสาร์",
    detail: "มีวงแหวนสวยงาม\nประกอบด้วยน้ำแข็ง\nความหนาแน่นต่ำ"
  }
};

function showPlanet(key) {
  document.getElementById("planetName").innerText = planets[key].name;
  document.getElementById("planetDetail").innerText = planets[key].detail;
}

function shareLink() {
  navigator.clipboard.writeText(window.location.href);
  alert("คัดลอกลิงก์แล้ว!");
}

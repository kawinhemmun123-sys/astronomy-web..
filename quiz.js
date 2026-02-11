const quiz = [
  {
    q: "ดาวใดอยู่ใกล้ดวงอาทิตย์ที่สุด?",
    c: ["โลก", "ดาวพุธ", "ดาวศุกร์", "ดาวอังคาร"],
    a: 1
  },
  {
    q: "ดาวเคราะห์ที่ใหญ่ที่สุดคือ?",
    c: ["ดาวเสาร์", "ดาวพฤหัสบดี", "โลก", "ดาวเนปจูน"],
    a: 1
  },
  {
    q: "ดาวใดมีวงแหวนเด่นชัด?",
    c: ["ดาวอังคาร", "ดาวพุธ", "ดาวเสาร์", "ดาวศุกร์"],
    a: 2
  }
];

let i = 0;
let score = 0;

function loadQ() {
  document.getElementById("question").innerText = quiz[i].q;
  quiz[i].c.forEach((v, n) => {
    document.getElementById("c"+n).innerText = v;
  });
}

function checkAnswer(x) {
  if (x === quiz[i].a) {
    document.getElementById("result").innerText = "✅ ถูกต้อง";
    score++;
    document.getElementById("score").innerText = score;
  } else {
    document.getElementById("result").innerText = "❌ ยังไม่ถูก";
  }
}

function nextQuestion() {
  i++;
  if (i >= quiz.length) {
    document.getElementById("quizBox").innerHTML =
      `<h2>🎉 จบแบบทดสอบ</h2><p>คะแนนทั้งหมด: ${score}</p>`;
  } else {
    loadQ();
  }
}

loadQ();

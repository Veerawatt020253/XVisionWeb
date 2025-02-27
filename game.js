const wordsold = [
  // ชุด 1
  "กระต่ายกระโดดข้ามรั้ว",
  "ปราสาทประดับเพชร",
  "ปลาว่ายในแม่น้ำลำธาร",
  "แสงแดดส่องประกายระยิบ",
  "ประตูบ้านประดับลายไม้",
  "ดอกไม้บานระบัดกลิ่นหอม",
  "ครูตรวจการบ้านนักเรียน",
  "ปลาสร้อยกระโดดข้ามโขดหิน",
  "ประสานใจเพื่อความสงบสุข",
  "โปรดอย่าลืมปิดประตู",
  // ชุด 2
  "ปราชญ์ผู้ชาญฉลาด",
  "กรอบภาพประดับลวดลายทอง",
  "พรายน้ำสะท้อนแสงแดด",
  "กวางป่ากระโดดข้ามทุ่ง",
  "วัดประจำหมู่บ้าน",
  "พยุงประตูให้คงที่",
  "กรุงเก่ามีปราสาท",
  "พระเจ้าประดับด้วยเพชร",
  "การรณรงค์เพื่อความสงบสุข",
  "ขลุ่ยไม้ไผ่บรรเลงเพลงเพราะ",
  // ชุด 3
  "ปลาสร้อยลอยตามลำธาร",
  "ปราสาทสวยงามระยับ",
  "กรวดน้ำหลังจากไหว้พระ",
  "ปรากฏการณ์ท้องฟ้าสีทอง",
  "ประมงจับปลาด้วยแห",
  "กระเพราหอมกรุ่นในกระทะ",
  "ปราบโจรร้ายที่ปล้นบ้าน",
  "ขับรถประจำทางในกรุงเทพ",
  "กระบี่ของพระนเรศวร",
  "ประคองเด็กเล็กข้ามถนน",
  // ชุด 4
  "พลอยประดับในกรอบทอง",
  "ลำธารใสและปลาสร้อยแหวกว่าย",
  "กระเป๋าหนังจระเข้สีดำ",
  "ขลุ่ยไทยบรรเลงเพลงกล่อม",
  "กระจกรถสะท้อนแสงแดด",
  "ปรากฏตัวในงานเลี้ยง",
  "ประตูใหญ่ถูกลมกระแทก",
  "พลับพลากลางน้ำในกรุงเก่า",
  "ครูประจำชั้นดูแลนักเรียน",
  "ขวัญใจคนไทยทั้งประเทศ",
  // ชุด 5
  "ปลาทูทอดกรอบรสอร่อย",
  "โปรแกรมเมอร์เขียนโค้ดด้วยความตั้งใจ",
  "ขวดน้ำประดับด้วยคริสตัล",
  "กล้วยไม้ผลิบานงดงาม",
  "ประทัดดังสนั่นในงานวัด",
  "ครกหินบดพริกในครัว",
  "กรุงเทพ เมืองหลวงของไทย",
  "ปรบมือให้กับผู้ชนะ",
  "พระปรางค์วัดอรุณสว่างไสว",
  "กระเช้าดอกไม้ประดับห้อง",
  // ชุด 6
  "ปลาหมอแหวกว่ายในคลอง",
  "กระท่อมริมธารน้ำใส",
  "ประดับไฟในสวนสวย",
  "พระอาทิตย์ส่องแสงทอง",
  "ขลุ่ยฟังเพลงกล่อมใจ",
  "กระเทียมเจียวหอมกรุ่น",
  "กราบพระประจำบ้าน",
  "โปรดปรานอาหารไทย",
  "กระเช้าต้นไม้ประดับ",
  "ประจบผู้ใหญ่ในงาน",
  // ชุด 7
  "โปรดระวังไฟแดง",
  "กระโดดข้ามรั้วสูง",
  "ประดับเพชรที่หัวเข็มขัด",
  "กระเบื้องหลังคาสีฟ้า",
  "ปลากระพงทอดกรอบ",
  "พระปรมาภิไธยในราชวงศ์",
  "กรงนกทำจากไม้สัก",
  "ประตูเหล็กหนักมาก",
  "กระจกเงาสะท้อนภาพ",
  "ประภาคารกลางทะเล",
  // ชุด 8
  "ประมงพื้นบ้านจับปลา",
  "กรอบรูปวาดพระบรมฉายาลักษณ์",
  "กระป๋องน้ำสีแดง",
  "ขลุ่ยไม้แกะสลัก",
  // "ปราสาทโบราณอายุหลายร้อยปี",
  "กรณีศึกษาสำคัญในประวัติศาสตร์",
  "ปราณีตในการปักผ้า",
  "กระแสน้ำพัดแรง",
  "ประโยชน์ของการอ่านหนังสือ",
  "พระปรางค์สูงเสียดฟ้า",
];

const words = [
  // ชุด 1
  "ดอกไม้บาน",
  "พระอาทิตย์ตก",
  "น้ำใสเย็น",
  "หมาป่านอน",
  "นกบินสูง",
  "เด็กเล่นทราย",
  "แมวขี้เซา",
  "ฝนตกพรำ",
  "ลมพัดเย็น",
  "พระจันทร์สวย",

  // ชุด 2
  "ภูเขาสูง",
  "ทะเลสีฟ้า",
  "ผึ้งดูดน้ำหวาน",
  "ปลาแหวกว่าย",
  "ต้นไม้เขียว",
  "กระต่ายน่ารัก",
  "เสือคำราม",
  "กวางกินหญ้า",
  "แมวร้องเหมียว",
  "หมีเดินช้า",

  // ชุด 3
  "นกแก้วพูดเก่ง",
  "ดอกบัวงาม",
  "เด็กวิ่งเร็ว",
  "ม้าแข่งวิ่ง",
  "เรือแล่นน้ำ",
  "เมฆลอยต่ำ",
  "ดาวเต็มฟ้า",
  "แม่น้ำกว้าง",
  "ลมหนาวเย็น",

  // ชุด 4 (เพิ่มเติม)
  "ฟ้าสีคราม",
  "ดวงตาสดใส",
  "หมอกยามเช้า",
  "แมวลูบนุ่ม",
  "เด็กยิ้มแย้ม",
  "แกะกินหญ้า",
  "น้ำตกเสียงดัง",
  "ลิงปีนต้นไม้",
  "ดวงจันทร์เต็มดวง",
  "แมงมุมถักใย",
  "ใบไม้ปลิว",
  "เด็กอ่านหนังสือ",
  "หมาวิ่งเล่น",
  "หงส์ลอยน้ำ",
  "ผีเสื้อบิน",
  "น้ำแข็งละลาย",
  "ปลาในลำธาร",
  "ต้นไผ่ลู่ลม",
  "เม็ดทรายละเอียด",
  "ดอกทานตะวัน",
  "ก้อนเมฆขาว",
  "เด็กเขียนการบ้าน",
  "นกฮูกกลางคืน",
  "หญ้าเขียวสด",
  "แมลงวันบินวน",
  "สายรุ้งเจ็ดสี",
  "ปลาดาวสวย",
  "ลูกบอลกลิ้ง",
  "แสงเทียนริบหรี่",
  "จักจั่นร้อง",
  "ไก่ขันเสียงดัง",
  "ดอกมะลิหอม",
  "แมงป่องเดินช้า",
  "เต่าคลานช้า",
  "ลำธารน้ำใส",
  "เด็กหัวเราะดัง",
  "แมงกะพรุนใส",
  "หมอนนุ่มมาก",
  "แมววิ่งเร็ว",
  "เด็กขี่จักรยาน",
  "ลมทะเลเย็น",
  "ใบหญ้าพลิ้ว",
  "ลูกโป่งลอยฟ้า",
  "นาฬิกาเดินติ๊ก",
  "ขนมหวานนุ่ม",
  "ขนนกปลิว",
  "ไม้ล้มง่าย",
];


let currentWord = "";
let score = 0;
let timeLeft = 15;
let timerInterval;
let recognition = null;

// เตรียมเสียงตอบถูก
const correctSound = document.getElementById("correctsound");

// ดึง element คำที่ต้องพูด
const wordElement = document.getElementById("word");
const timerElement = document.getElementById("timer");
const startButton = document.getElementById("startButton");
const textButton = document.getElementById("textButton")
const scorep  = document.getElementById("scorep");

// ฟังก์ชันเริ่มต้นสำหรับ Speech Recognition
function initSpeechRecognition() {
  if ("webkitSpeechRecognition" in window) {
    recognition = new webkitSpeechRecognition();
    recognition.lang = "th-TH";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = function (event) {
      const spokenWord = event.results[0][0].transcript.trim();
      console.log(`User said: ${spokenWord}`);

      if (spokenWord === currentWord) {
        // เล่นเสียงตอบถูก
        correctSound.play();

        score++;
        scorep.textContent = "score : " + score
        resetTimer();
        selectNewWord();
      } else {
        Swal.fire({
          title: "พูดไม่ตรง",
          text: `คุณพูดว่า: "${spokenWord}" ลองอีกครั้ง`,
          icon: "error",
          width: '90%'
        });
      }
    };

    recognition.onend = function () {
      if (timeLeft > 0) {
        recognition.start();

        // startButton.addEventListener("click", endGame);
      }
    };
  } else {
    Swal.fire({
      title: "ไม่รองรับ",
      text: "เบราว์เซอร์ของคุณไม่รองรับ Speech Recognition",
      icon: "error",
      width: '90%'
    });
  }
}

// ฟังก์ชันสำหรับเลือกคำใหม่
function selectNewWord() {
  currentWord = words[Math.floor(Math.random(12456678) * words.length)];
  wordElement.textContent = `พูดคำว่า: "${currentWord}"`; // แสดงคำที่ต้องพูด
}

// ฟังก์ชันเริ่มเกม
function startGame() {
  // If click button again
  if (textButton.textContent === "หยุด") {
    startButton.classList.add("text-box-s")
    startButton.classList.remove("text-box-r")
    recognition.stop();
    endGame()
    return
  }

  score = 0;
  timeLeft = 15;
  timerElement.textContent = timeLeft;
  // startButton.disabled = true;
  textButton.textContent = "หยุดเล่น"
  startButton.classList.add("text-box-r")
  startButton.classList.remove("text-box-s")
  // textButton.className = ".text-c-r";

  selectNewWord();
  startTimer();

  if (!recognition) {
    initSpeechRecognition();
  }
  recognition.start();
}

// ฟังก์ชันสำหรับเริ่มตัวจับเวลา
function startTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  timerInterval = setInterval(function () {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

// ฟังก์ชันสำหรับรีเซ็ตเวลา
function resetTimer() {
  timeLeft = 15;
  timerElement.textContent = timeLeft;
}

// ฟังก์ชันเมื่อจบเกม
function endGame() {
  resetTimer()
  clearInterval(timerInterval);
  if (recognition) {
    recognition.stop();
  }
  textButton.textContent = "เริ่มอีกครั้ง";
  startButton.classList.remove("text-box-r")
  startButton.classList.add("text-box-s")

  scorep.textContent = "lastscore : " + score
  Swal.fire({
    title: "จบเกม!",
    text: `คะแนนที่คุณได้คือ: ${score}`,
    icon: "success",
    width: '90%'
  });
  startButton.disabled = false;
  wordElement.textContent = "สวัสดี"; // รีเซ็ตคำที่ต้องพูดเมื่อจบเกม
}

// กดปุ่มเริ่มเกม
startButton.addEventListener("click", startGame);

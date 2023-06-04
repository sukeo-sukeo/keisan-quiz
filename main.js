// const btn = document.getElementsByClassName("menu-btn");

// [...btn].forEach(b => {
//   console.log(b.textContent);
//   if (b.textContent === "たしざん") {
//     b.addEventListener("click", () => main(generateRandomAddition));
//   }
//   if (b.textContent === "ひきざん") {
//     b.addEventListener("click", () => generateSubtractionProblem())
//   }
// })
var num1, num2, question, answer;
var correct = 0

const main = (text) => {
  document.getElementById("answer").focus();
  if (text === "たしざん") {
    question = generateRandomAddition()
  }
  if (text === "ひきざん") {
    question = generateSubtractionProblem()
  }
  document.getElementById("question").innerHTML = question;
  document.getElementById("answer").value = ""; // 答えの欄を空にする
  document.getElementById("result").innerHTML = ""; // 結果の欄を空にする
}


const generateRandomAddition = () => {
  num1 = Math.floor(Math.random() * 10); // 0から9までのランダムな整数を生成
  num2 = Math.floor(Math.random() * 10);
  answer = num1 + num2;
  return num1 + " + " + num2 + " = ?";
}

function generateSubtractionProblem() {
  num1 = Math.floor(Math.random() * 10); // ランダムな一桁の数を生成
  num2 = Math.floor(Math.random() * num1); // num1より小さいランダムな数を生成
  answer = num1 - num2;
  return num1 + " - " + num2 + " = ?";
}

function checkAnswer() {
  var userAnswer = document.getElementById("answer").value;
  if (userAnswer == answer) {
    document.getElementById("result").innerHTML = "せいかいです！";
    correct++
    document.getElementById("correct").innerHTML = correct;
  } else {
    document.getElementById("result").innerHTML =
      "ちがうよ！せいかいは" + answer + "です。";
  }
}


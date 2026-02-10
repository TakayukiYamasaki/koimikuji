const fortunes = [
  "大吉 💕 素敵な出会いがあるかも！",
  "中吉 😊 少し勇気を出そう",
  "小吉 🙂 自分磨きの日",
  "凶 😢 今日は様子見"
];

const button = document.getElementById("drawBtn");
const overlay = document.getElementById("overlay");

button.addEventListener("click", function () {

  // 全画面アニメーションを表示
  overlay.classList.remove("hidden");

  // 結果を決める
  const random = Math.floor(Math.random() * fortunes.length);
  const result = fortunes[random];

  // 2秒後に結果ページへ
  setTimeout(function () {
    location.href = "result.html?fortune=" + encodeURIComponent(result);
  }, 2000);

});
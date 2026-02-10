const fortunes = [
  "大吉 💕 素敵な出会いがあるかも！",
  "中吉 😊 少し勇気を出すと良いことが起きる",
  "小吉 🙂 今日はゆっくり過ごそう",
  "凶 😢 無理せず慎重に行動しよう"
];

const button = document.getElementById("drawBtn");
const animation = document.getElementById("animation");

button.addEventListener("click", function () {
  // アニメーション表示
  animation.classList.remove("hidden");

  // ランダム結果を決める
  const random = Math.floor(Math.random() * fortunes.length);
  const result = fortunes[random];

  // 2秒後に結果ページへ移動
  setTimeout(function () {
    location.href = "result.html?fortune=" + encodeURIComponent(result);
  }, 2000);
});
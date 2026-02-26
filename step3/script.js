const results = [
    { rank: "大吉", msg: "最高の運勢！何をやっても上手くいきます。" },
    { rank: "中吉", msg: "良い波が来ています。自信を持って進みましょう。" },
    { rank: "小吉", msg: "ラッキーな出来事があるかも。笑顔を忘れずに。" },
    { rank: "吉", msg: "平穏無事。今日はのんびり過ごすのが良さそうです。" },
    { rank: "末吉", msg: "これから運気が上がっていきます。焦らずに。" },
    { rank: "凶", msg: "今日は無理せず早めに帰りましょう。忘れ物に注意！" }
];

function startDraw() {
    // 1. カードを隠す
    document.getElementById('card-container').style.display = 'none';
    
    // 2. アニメーションを表示
    const overlay = document.getElementById('animation-overlay');
    overlay.style.display = 'flex';

    // 3. 2秒後に結果を表示する
    setTimeout(() => {
        overlay.style.display = 'none'; // アニメ終了
        showResult(); // 結果発表
    }, 2000); 
}

function showResult() {
    const randomResult = results[Math.floor(Math.random() * results.length)];
    const rankEl = document.getElementById('luck-rank');
    const msgEl = document.getElementById('luck-message');
    const resultArea = document.getElementById('result-area');
    
    // 前回の演出をクリア
    clearEffects();

    rankEl.innerText = randomResult.rank;
    msgEl.innerText = randomResult.msg;
    resultArea.style.display = 'block';

    if (randomResult.rank === "大吉") {
        rankEl.classList.add('special');
        createConfetti();
    } else if (randomResult.rank === "凶") {
        rankEl.classList.add('bad');
        createDarkness(); // どんより演出を呼び出し
    }
}

// 紙吹雪を生成する関数
function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // ランダムな色と位置
        const colors = ['#f1c40f', '#e67e22', '#e74c3c', '#2ecc71', '#3498db'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        
        // ランダムなスピードと遅延
        const duration = Math.random() * 2 + 3 + 's';
        const delay = Math.random() * 2 + 's';
        confetti.style.animationDuration = duration;
        confetti.style.animationDelay = delay;

        document.body.appendChild(confetti);

        // アニメーション終了後に要素を削除（メモリ節約）
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}
// どんより演出を作る関数
function createDarkness() {
    // 画面を暗くする
    const darkOverlay = document.createElement('div');
    darkOverlay.id = 'dark-overlay';
    darkOverlay.classList.add('dark-mode');
    document.body.appendChild(darkOverlay);

    // 雲をいくつか流す
    for (let i = 0; i < 3; i++) {
        const cloud = document.createElement('div');
        cloud.classList.add('cloud');
        cloud.innerText = '☁️';
        cloud.style.top = (20 + i * 25) + '%'; // 重ならないように配置
        cloud.style.animationDuration = (10 + Math.random() * 10) + 's';
        cloud.style.animationDelay = (i * 2) + 's';
        document.body.appendChild(cloud);
    }
}

// 演出をリセットする関数（「もう一度ひく」で使う）
function clearEffects() {
    const rankEl = document.getElementById('luck-rank');
    rankEl.classList.remove('special', 'bad');
    
    // 追加した演出要素（紙吹雪、暗幕、雲）を全部消す
    const elementsToRemove = document.querySelectorAll('.confetti, .cloud, #dark-overlay');
    elementsToRemove.forEach(el => el.remove());
}

// resetGame関数も更新
function resetGame() {
    clearEffects(); // 演出を消す
    document.getElementById('card-container').style.display = 'flex';
    document.getElementById('result-area').style.display = 'none';
}
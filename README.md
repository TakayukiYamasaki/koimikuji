恋みくじ Webアプリ（教材用）

このリポジトリは、HTML / CSS / JavaScript の基礎を学ぶための教材です。<br>
高校生（プログラミング未経験）を対象に、段階的に完成度を高めていく構成になっています。

トップページ（index.html）から各ステップへ移動できる構成です。


📁 プロジェクト構成

```
koimikuji/
├─ index.html   … 教材トップ（目次ページ）
├─ style.css    … トップページ用スタイル
├─ step0/       … HTMLのみでおみくじ表示
├─ step1/       … 結果を別ページ（result.html）に表示
├─ step2/       … 全画面アニメーション後に結果表示
└─ README.md
```


🟢 STEP 0：HTML&CSS+JavaScript入門（★☆☆）

学習ポイント<br>
・HTMLの基本構造<br>
・ボタンと表示エリアの作成<br>
・JavaScriptの基礎（配列・ランダム処理）<br>
・textContent による文字の書き換え<br>

実装内容<br>
・おみくじ結果を配列 fortunes で用意<br>
・ボタン（drawBtn）をクリック<br>
・ランダムで結果を選択<br>
・同じページ内に結果を表示<br>

できること<br>
・ボタンを押すとその場に結果が表示される<br>
・画面遷移はしない<br>


🟡 STEP 1：別ページに結果表示（★★☆）

学習ポイント<br>
・ページ遷移の仕組み<br>
・データの受け渡し<br>
・HTMLファイルを分ける設計<br>

実装内容<br>
・ボタンを押す<br>
・result.html に移動<br>
・別ページでおみくじ結果を表示<br>

できること<br>
・結果ページを分離した構造になる<br>
・Webアプリらしい動きになる<br>


🔵 STEP 2：完成形（★★★）

学習ポイント<br>
・画面全体を使った演出<br>
・setTimeout による待ち時間処理<br>
・CSSアニメーション<br>
・ページ遷移との組み合わせ<br>

実装内容<br>
・ボタンを押す<br>
・画面全体にアニメーションを表示<br>
・一定時間後に結果ページへ移動<br>
・結果を表示<br>

できること<br>
・演出付きのWebアプリになる<br>
・実際のサービスに近い構造を体験できる<br>


🌐 公開ページ（GitHub Pages）

※ ユーザー名部分は各自のアカウント名に変更してください。<br>
・トップ：https://takayukiyamasaki.github.io/koimikuji/<br>
・step0：https://takayukiyamasaki.github.io/koimikuji/step0/<br>
・step1：https://takayukiyamasaki.github.io/koimikuji/step1/<br>
・step2：https://takayukiyamasaki.github.io/koimikuji/step2/<br>


🏫 授業での使い方（例）<br>
・第1コマ：steo0 を完成させる（基本構造＋ランダム処理）<br>
・第2コマ：step1 でページ分割<br>
・第3コマ：step2 STEP2 の演出を実装<br>

発展例<br>
・結果の種類を増やす<br>
・デザインを変更する<br>
・画像や効果音を追加する<br>
・オリジナルテーマのおみくじに改造する<br>


✍️ ライセンス・利用について<br>
・授業・教材利用：自由<br>
・改変・再配布：可<br>
・商用利用：可<br>

教育目的で自由に活用してください。
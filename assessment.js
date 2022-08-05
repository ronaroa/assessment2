'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area'); 

assessmentButton.onclick = () => {
  const userName = userNameInput.value;
  if (userName.length === 0) {
    // 名前が空の時は処理を終了する
    return;
  }
  console.log('userName');
  // TODO 診断結果表示エリアの作成
  resultDivided.innerText = '';
  const header = document.createElement('h3');
  header.innerText = '座禅診断結果';
  resultDivided.appendChild(header);

  const paragraph = document.createElement('P');
  const result = assessment(userName);
  paragraph .innerText = result;
  resultDivided.appendChild(paragraph);

  // TODO ツイートエリアの作成
  tweetDivided.innerText = ''
  const anchor = document.createElement('a');
  const hrefValue = 
  'https://twitter.com/intent/tweet?button_hashtag=あなたのいいところ&ref_src=twsrc%5Etfw';

  anchor.setAttribute('href', hrefValue);
  anchor.setAttribute('class', 'twitter-hashtag-button');
  anchor.setAttribute('date-text', result);
  anchor.innerText = 'Tweet #あなたの座禅';
  tweetDivided.appendChild(anchor);

  // widgets.js の設定
  const script = document.createElement('script');
  script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
  tweetDivided.appendChild(script);
};
const answers = [
    '{userName}は曹洞宗です。心が疲れた時に座禅をしよう。',
    '{userName}は臨済宗です。運動で疲れた時に座禅しよう。',
    '{userName}は黄檗宗です。眠たい時に座禅しよう。',
    '{userName}は座禅は特にありません。なんでも大丈夫です',
    '{username}は普通の座禅です、とにかく頑張って。'
];

/**
 * 名前の文字列を渡すと渡すと診断結果を返す関数
 * @param{string} userNmae ユーザーの名前
 * @return{string} 診断結果
 */
function assessment(userName) {
    // TODO 診断結果を実装
    return '';
}
function assessment(userName) {
    //全文字のコード番号を取得してそれを足し合わせる
    let sumOfCharCode = 0;
    for (let i = 0; i < userName.length; i++) {
        sumOfCharCode = sumOfCharCode+userName.charCodeAt(i);
    }
    //文字のコード番号の合計を回答の数で割って添字の数値を求める
    const index = sumOfCharCode % answers.length;
    let result = answers[index];

    result = result.replaceAll('{userName}', userName);
  return result;
}

userNameInput.onkeydown = event => {
  if (event.key === 'Enter') {
    //TODO ボタンのonclick() 処理を呼び出す
    assessmentButton.onclick();
  }
};

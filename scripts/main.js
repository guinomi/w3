// Image switcher code

let myImage = document.querySelector('img');
// documentは組み込みのオブジェクト、
// ブラウザが表示しているページ、DOM　とも呼ぶ。　Document Object Modelの略。
// querySelectorはページの一部（HTML要素）を選ぶ関数

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/myimage.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('名前を入力してください');
  // promptは組み込みの関数、prompt (pop-up)Windowを表示して、ユーザ入力をさせる。
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    //入力データを、特別な場所（変数ではない、ファイルなどに相当）に保存する。
    myHeading.innerHTML = 'こんにちは, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  //以前に特罰な場所（ファイルなど）保存していた名前があれば、それを使う。
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'さようなら, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

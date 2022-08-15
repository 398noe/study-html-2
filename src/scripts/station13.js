function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  var flag = false;

  const checker = document.getElementById("check");
  const text = document.getElementById("text");

  if (checker.checked) {
    text.style.backgroundColor = "red";
  } else {
    text.style.backgroundColor = "transparent";
  }
}

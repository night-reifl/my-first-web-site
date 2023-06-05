
// 버튼 클릭 시 야간 모드와 주간 모드 전환
function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");
}

var button = document.createElement("button");
button.textContent = "모드 전환";
button.addEventListener("click", toggleDarkMode);
document.body.appendChild(button);

window.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('night-mode');
    const isNightMode = document.body.classList.contains('night-mode');
    localStorage.setItem('nightMode', isNightMode);
  });

  const isNightMode = localStorage.getItem('nightMode') === 'true';
  if (isNightMode) {
    document.body.classList.add('night-mode');
  }
});
function updateDateTime() {
  var now = new Date();
  var date = now.toLocaleDateString();
  var time = now.toLocaleTimeString();

  var datetimeElement = document.getElementById('datetime');
  datetimeElement.innerHTML = date + ' ' + time;
}

setInterval(updateDateTime, 1000);
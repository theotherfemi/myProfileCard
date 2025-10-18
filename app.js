function updateTime() {
  const now = new Date();
  document.getElementById("time").textContent = now.getTime();
}

setInterval(updateTime, 1000);
updateTime();

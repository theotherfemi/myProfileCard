function updateTime() {
  const now = new Date();
  document.getElementById("time").textContent = now.getTime();
}

setInterval(updateTime, 1000);
updateTime();

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
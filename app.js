console.log('Working...')

function updateTime() {
  const now = new Date();
  document.getElementById("time").textContent = now.getTime();
}

setInterval(updateTime, 1000);
updateTime();

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', (e) => {
  e.stopPropagation();
  navLinks.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  const isClickInsideMenu = navLinks.contains(e.target);
  const isClickOnHamburger = hamburger.contains(e.target);

  if (!isClickInsideMenu && !isClickOnHamburger) {
    navLinks.classList.remove('active');
  }
});

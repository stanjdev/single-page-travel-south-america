
/* Animate On Scroll */
AOS.init({
  duration: 1000
});


const navLinks = document.querySelectorAll('.nav-bar > a');

const selectNav = id => {
  navLinks.forEach(link => {
    if (link.getAttribute('href') === id) {
      link.classList.add('selected');
    } else link.classList.remove('selected');
  })
};

/* Smooth Scroll */
const body = document.querySelector('body');
body.addEventListener('click', e => {
  if (e.target.matches('.external')) return;
  // Fixed my a links not working
  if (e.target.target === "_blank") return;

  e.preventDefault();

  const href = e.target.closest('a').href;
  if (href) {
    selectNav(href);
    const id = href.split('#')[1];
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    })
  }
});
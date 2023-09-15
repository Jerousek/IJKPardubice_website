/* CONSTANTS */
const SECTION_OFFSET = 400; /* pixels before selectected section to be displayed as active  */

/* GENERAL */
/* get current year */
document.getElementById("current-year").innerHTML = new Date().getFullYear();

/* animate elements */
const animation_elements = document.querySelectorAll('.animate-right-to-left, .animate-bottom-to-top, .animate-left-to-right');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animation');
    }
  })
});

animation_elements.forEach((element) => {
  observer.observe(element);
})

/* NAVBAR */
/* react to first scroll*/
document.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

/* change active nav element based on section */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav .nav-links ul li");

window.onscroll = () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - SECTION_OFFSET) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.classList.contains(current)) {
      link.classList.add("active");
    }
  });
};

/* toggle mobile screen menu */
document.getElementById("nav-check").onchange = (e) => {
  let checked = e.target.checked;
  if (checked) {
    document.querySelector("nav").classList.add("nav-menu-opened");
    document.querySelector("html").classList.add("no-scroll");
  } else {
    closeMenu();
  }
}

/* close menu after click on on link small screen & toggle menu */
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("nav-check").checked = false;
    closeMenu();
  });
});

/* menu closing handling*/
function closeMenu() {
  document.querySelector("nav").classList.remove("nav-menu-opened");
  document.querySelector("html").classList.remove("no-scroll");
}
/* GALLERY */

let galleryContainer = document.querySelector('#container');

/* get width of image */
function getWidthOfImage() {
  let width = galleryContainer.offsetWidth;
  return width;
}
/* next image*/
function move_up() {
  galleryContainer.scrollLeft += getWidthOfImage();
}
/*prev image*/
function move_down() {
  galleryContainer.scrollLeft -= getWidthOfImage();
}





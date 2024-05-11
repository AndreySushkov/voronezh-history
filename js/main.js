const header = document.querySelector('.header')

window.addEventListener('scroll', function() {
  let scrolled = window.scrollY  

  if (scrolled > 50) {
    header.classList.add('header--small')
  } else {
    header.classList.remove('header--small')
  }
})

const html = document.querySelector('html')
const hamburgerBtn = document.querySelector('.hamburger')
const navList = document.querySelector('.nav__list')

hamburgerBtn.addEventListener('click', function() {
  html.classList.toggle('html-fixed')
  hamburgerBtn.classList.toggle('hamburger--active')
  navList.classList.toggle('nav__list--active')
})
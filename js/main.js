// анимация хедера
const header = document.querySelector('.header')

window.addEventListener('scroll', function() {
  let scrolled = window.scrollY  

  if (scrolled > 50) {
    header.classList.add('header--small')
  } else {
    header.classList.remove('header--small')
  }
})

// меню-бургер
const html = document.querySelector('html')
const hamburgerBtn = document.querySelector('.hamburger')
const navList = document.querySelector('.nav__list')

hamburgerBtn.addEventListener('click', function() {
  html.classList.toggle('html-fixed')
  hamburgerBtn.classList.toggle('hamburger--active')
  navList.classList.toggle('nav__list--active')
})

// валидация формы
const contactsForm = document.querySelector('.contacts__form')
const contactsCheckbox = document.querySelector('.contacts__form-checkbox')
const contactsSubmit = document.querySelector('.contacts__form-btn')

if (contactsSubmit) {
  contactsSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    if (contactsForm.reportValidity()) {
      if (!contactsCheckbox.checked) {
        alert('Вы не поставили галочку возле поля на согласие на обработку персональных данных!')
      } else {
        contactsForm.submit()
      }
    }
  })
}
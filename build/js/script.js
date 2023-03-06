const hamburgerBtn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('menu')

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('open')
  mobileMenu.classList.toggle('flex')
  mobileMenu.classList.toggle('hidden')
})

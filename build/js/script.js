const hamburgerBtn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('menu')

btn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('open')
  mobileMenu.classList.toggle('flex')
  mobileMenu.classList.toggle('hidden')
})

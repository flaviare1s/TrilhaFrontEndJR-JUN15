const body = document.getElementById('body')
const btnDark = document.getElementById('btn-lua')
const btnLight = document.getElementById('btn-sol')
const titleLight = document.getElementById('title-light')
const titleDark = document.getElementById('title-dark')
const imagemLight = document.getElementById('light-imagem')
const imagemDark = document.getElementById('dark-imagem')
const sobre = document.getElementById('sobre')
const footer = document.getElementById('footer')

btnLight.addEventListener('click', () => {
  btnLight.classList.add('hidden')
  btnDark.classList.remove('hidden')
  body.style.backgroundColor = '#000000'
  titleLight.classList.add('hidden')
  titleDark.classList.remove('hidden')
  imagemLight.classList.add('hidden')
  imagemDark.classList.remove('hidden')
  sobre.style.color = '#ffffff'
  footer.classList.add('footer-dark')
})

btnDark.addEventListener('click', () => {
  btnDark.classList.add('hidden')
  btnLight.classList.remove('hidden')
  body.style.backgroundColor = '#ffffff'
  titleDark.classList.add('hidden')
  titleLight.classList.remove('hidden')
  imagemDark.classList.add('hidden')
  imagemLight.classList.remove('hidden')
  sobre.style.color = '#000000'
  footer.classList.remove('footer-dark')
})


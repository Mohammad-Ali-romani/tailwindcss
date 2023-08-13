const burger = document.getElementById('burger')
const menu = document.getElementById('menu')

burger.onclick = ()=>{
  menu.classList.toggle('hidden')
  document.body.classList.toggle('overflow-hidden')
}
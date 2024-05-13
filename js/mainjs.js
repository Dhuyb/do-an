var menu = document.querySelector('.menu-repon')
var modal = document.querySelector('.modal')
var modalLay = document.querySelector('.modal-lay')
var exit = document.querySelector('.exit-menu')
var html = document.querySelector('html')
var item = document.getElementsByClassName('nav-item')
var menuLay = document.getElementsByClassName('menu-lay')
console.log(modalLay)

function showmodal() {
   modal.style.display = 'block'
   html.style.overflow = 'hidden'
}
function logout() {
   modal.style.display = 'none'
   html.style.overflow = 'unset'
}
function menuItem(i) {

}
menu.addEventListener('click',showmodal)
exit.addEventListener('click',logout)
modalLay.addEventListener('click',function(event) {
   event.stopPropagation()
})
//theme switcher

const themeSwitch = document.querySelector('.themeSwitch')
const header = document.querySelector('header')

const closePopUp = document.querySelector('.closePopUp')
const popUp = document.querySelector('.popUp')
const popUpWall = document.querySelector('.popUpWall')

themeSwitch.addEventListener('click',()=>{
       let temp = themeSwitch.getAttribute('data-status')
       if(temp == 'off'){
              themeSwitch.setAttribute('data-status','on')
              header.classList.add('header-bg-dark')
              themeSwitch.src='images/moon-fill.png'


}else{
       themeSwitch.setAttribute('data-status','off')
                     themeSwitch.src='images/sun-fill.png'
                     header.classList.remove('header-bg-dark')
       }
})


//////popup

setTimeout(() => {
       popUpWall.style.display='flex'
       popUp.style.left='50%'
}, 1000);

    closePopUp.addEventListener('click',()=>{
     
       popUp.remove()
       popUpWall.remove()
})

popUpWall.addEventListener('click',()=>{
       popUp.remove()
       popUpWall.remove()
})

///////////
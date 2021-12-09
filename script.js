navBtn = document.querySelector('.nav-btn')
nav = document.querySelector('.nav')

console.log(nav.classList);

navBtn.addEventListener('click', () => {
    nav.classList.toggle('nav--active')
    console.log(nav.classList.contains('nav--active'));

    if (nav.classList.contains('nav--active')){
        navBtn.innerHTML =  `<img src="./images/icon-close.svg"
        alt="icon close"
        class="nav-btn__close"
      />`
    } else {
        navBtn.innerHTML = ` <img
        src="./images/icon-hamburger.svg"
        alt="icon hamburger"
        class="nav-btn__burger"
      />`
    }
})
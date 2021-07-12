let logoImg = document.querySelector('.main__img')

logoImg.addEventListener('click', (eventing) => changeImg(eventing));


const changeImg = (event) => { 
    console.log(event.target);
}
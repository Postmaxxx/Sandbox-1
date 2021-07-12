let logoImg = document.querySelector('.main-text')

logoImg.addEventListener('click', (e) => changeText(e));

const changeText = (e) => {
    e.target.innerHTML += '!';
    console.log(e.target);
}

//# sourceMappingURL=index.js.map

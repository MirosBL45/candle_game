let play = document.querySelector('.play');
let howPlay = document.querySelector('.howPlay');

play.addEventListener('click', () => {
    let text = document.querySelector('.text');
    let cake = document.querySelector('.cake');
    let howPlay = document.querySelector('.howPlay');
    text.style.display = 'none';
    cake.style.filter = 'none';
    howPlay.style.display = 'flex';
});

howPlay.addEventListener('click', () => {
    let howPlay = document.querySelector('.howPlay');
    howPlay.style.display = 'none';
    let flames = document.querySelector('.flames');
    flames.style.display = 'block';
});

let flames = document.querySelectorAll('.flame');
let numOfFlames = flames.length;
let clickCount = 0;

flames.forEach((flame) => {
    flame.addEventListener('click', () => {
        flame.style.display = 'none';
        clickCount++;
        if (clickCount === numOfFlames) {
            let flames = document.querySelector('.flames');
            flames.style.display = 'none';
            let popUp = document.querySelector('.popUp');
            popUp.style.display = 'block';
            setTimeout(() => {
                let candle = document.querySelector('.candle');
                candle.style.display = 'none';
                let end = document.querySelector('.end');
                end.style.display = 'flex';
            }, 1900);
        }
    });
})
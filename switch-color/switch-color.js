

const refs = {
    start: document.querySelector('button[data-action=start]'),
    body: document.querySelector('body'),
    stop: document.querySelector('button[data-action=stop]'),
}




const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalColorChange

const changeColor = () => {

    intervalColorChange = setInterval(randomNumber => {
        randomNumber = randomIntegerFromInterval(0, 5);
        changeBackground(colors[randomNumber]);
    }, 2000);
}
const changeBackground = (color) => {
    refs.body.style.backgroundColor = color;
}
const stop = () => {
    clearInterval(intervalColorChange);

}
refs.start.addEventListener('click', changeColor);
refs.stop.addEventListener('click', stop);

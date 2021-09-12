// const colors = [
//     '#FFFFFF',
//     '#2196F3',
//     '#4CAF50',
//     '#FF9800',
//     '#009688',
//     '#795548',];

// const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// };



const refs = {
    start: document.querySelector('button[data-action=start]'),
    body: document.querySelector('body'),
    stop: document.querySelector('button[data-action=stop]'),
}


// let f = null




// const getRandomTime = (min, max) => {


//     return Math.floor(Math.random() * (max - min + 1) + min);

// };



// const drive = (pilot) => {

//     const a = getRandomTime(3000, 6000);

//     f = setInterval(() => {
//         refs.body.style.backgroundColor = pilot
//     }, a);
//     colors.map(pilot => pilot)

// };


// function remove() {
//     console.log(clearInterval(f));
// }

// refs.start.addEventListener('click', drive);
// refs.stop.addEventListener('click', remove);


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

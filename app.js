const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector('.btn__reset');
let missed = 0

const phrases = [
    [`To infinity and beyond`],
    [`It is what it is`],
    [`Have it your way`],
    [`Im king of the world`],
    [`Genie I set you free`]
];

btnReset.addEventListener('click', () => {
    const start = document.querySelector('.start');
    start.style.display = 'none';
});
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay')
let missed = 0

const phrases = [
    `To infinity and beyond`, 
    `It is what it is`,
    `Have it your way`,
    `Im king of the world`,
    `Genie I set you free`
];

btnReset.addEventListener('click', () => {
    const start = document.querySelector('.start');
    start.style.display = 'none';
});

function getRandomPhraseAsArray(arr){
    let randomNum =  Math.floor( Math.random() * arr.length )
    let randomPhrase = arr[randomNum];
    const split = randomPhrase.split("");
    return split;
}

const phraseArray = getRandomPhraseAsArray(phrases);
const phraseLi = phrase.querySelector('#phrase ul');

function addPhraseToDisplay(arr) {
    for ( let i = 0; i < arr.length; i++) {
    const list = document.createElement('li');
    let text = arr[i];
    list.textContent = text;
    if ( text === ' ' ) {
        list.className = 'space';
    } else {
        list.className = 'letter';
    }
    phraseLi.appendChild(list);
}
}

addPhraseToDisplay(phraseArray);

function checkLetter(clicked) {
    const checkLetter = document.getElementsByClassName('letter');
    let match = null;
    for (let i = 0; i < checkLetter.length; i++) {
    if ( checkLetter[i].textContent.toLowerCase() === clicked.textContent ) {
        checkLetter[i].classList.add('show');
        match = checkLetter.textContent;
    }
 }
return match;
};

qwerty.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.target.className = 'chosen';
        e.target.disabled = 'true';
    const letterFound = checkLetter(e.target);
    letterFound; 
     if (letterFound === null) {
        missed ++;
        const lives = document.querySelectorAll('.tries img');
        lives[missed -1].src = 'images/lostHeart.png';
     }
  }
  checkWin();
});

function checkWin () {
    const letter = document.getElementsByClassName('letter');
    const show = document.getElementsByClassName('show');
    if ( letter.length === show.length ) {
        overlay.classList.add('win');
        overlay.style.display = 'flex';
        document.querySelector('#overlay .title').textContent = 'Winner Winner Chicken Dinner';
    }
    if ( missed > 4 ) {
        overlay.classList.add('lose');
        overlay.style.display = 'flex';
        document.querySelector('#overlay .title').textContent = 'Better Luck Tomorrow';
    }
}
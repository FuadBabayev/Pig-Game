
// Selecting elements
const score0El = document.querySelector('#score--0');

const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');

const current1El = document.getElementById('current--1');

const diceEl = document.getElementsByClassName('dice')[0];

const btnNew = document.querySelector('.btn--new');

const btnRoll = document.querySelector('.btn--roll');

const btnHold = document.querySelector('.btn--hold');

const player0El = document.querySelector('.player--0');

const player1El = document.querySelector('.player--1');







let score, currentScore, activePlayer, playing;







// Starting conditions
const refresh = function(){  

  score = [0, 0];

  currentScore = 0;

  activePlayer = 0;

  playing = true;



  
  score0El.textContent = 0;
  
  score1El.textContent = 0;
  
  current0El.textContent = 0;
  
  current1El.textContent = 0;



  
  diceEl.classList.add('hidden');
  
  player0El.classList.remove('player--winner');
  
  player1El.classList.remove('player--winner');
  
  player0El.classList.add('player--active');
  
  player1El.classList.remove('player--active');


}


refresh();











const switchPlayer = function () {

  currentScore = 0;

  document.getElementById(`current--${activePlayer}`).textContent = currentScore;

  activePlayer = (activePlayer === 0) ? 1 : 0;

  player0El.classList.toggle('player--active');

  player1El.classList.toggle('player--active');


}










// Rolling dice functionality
btnRoll.addEventListener('click', () => {

  if (playing) {

    // 1. Generating a random dice roll
    let random = Math.floor(Math.random() * 6) + 1;


    // 2. Display dice
    diceEl.classList.remove('hidden');

    diceEl.src = `dice-${random}.png`;


    // 3. Check for rolled 1
    if (random !== 1) {

      // Add dice to current score
      currentScore += random;

      document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    } else {

   
      // Switch to next player
      switchPlayer();

    }

  }

})










btnHold.addEventListener('click', () => {

  if (playing) {

    // 1. Add current score to active player's score
    score[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore


    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

    if (score[activePlayer] >= 50) {

      playing = false;

      diceEl.classList.add('hidden');

      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');

      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

    } else {

      switchPlayer();

    }

  }

})











btnNew.addEventListener('click', refresh);
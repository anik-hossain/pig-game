let scores, roundValue, activePlayer, state;

function $(selector) {
    return document.querySelector(selector);
}
init();


$('#roll-dice').addEventListener('click', () => {
    if (state) {
        $('.dice').style.display = 'block';
        // Random Value
        let random = Math.floor(Math.random() * 6) + 1;
        $('.dice').src = './img/dice-' + random + '.jpg';


        if (random > 1) {
            roundValue = roundValue += random;
            $('.current-score-' + activePlayer).textContent = roundValue;
        } else {
            roundValue = 0;
            $('.current-score-' + activePlayer).textContent = roundValue;
            $('.dice').style.display = 'none';
            // Next Player
            nextPlayer();
        }
    }
});

$('#hold').addEventListener('click', () => {

    if (state) {
        // Add to global

        $('.total-score-' + activePlayer).textContent = scores[activePlayer] = roundValue + scores[activePlayer];
        // Check If Own
        if (scores[activePlayer] >= 100) {
            $('.player-name-' + activePlayer).textContent = 'Winner!';
            state = false;
            $('.dice').style.display = 'none';
        } else {
            // Next Player
            nextPlayer();
        }
    }
});

$('#reset').addEventListener('click', init)

function nextPlayer() {
    roundValue = 0;
    activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
    $('.player-0').classList.toggle('active');
    $('.player-1').classList.toggle('active');
}

function init() {
    scores = [0, 0];
    roundValue = 0;
    activePlayer = 0;
    state = true;
    $('.dice').style.display = 'none';
    $('.player-name-0').textContent = 'PLAYER-1';
	$('.player-name-1').textContent = 'PLAYER-2';
    $('.total-score-0').textContent = '0';
    $('.total-score-1').textContent = '0';
    $('.current-score-0').textContent = '0';
    $('.current-score-1').textContent = '0';
    $('.player.player-0').classList.remove('active');
    $('.player.player-1').classList.remove('active');
    $('.player.player-0').classList.add('active');
}
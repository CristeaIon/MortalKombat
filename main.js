//Task 0
const $arena = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Katana', 'Kunai'],
    attack: function() {
        console.log(this.name + ' ' + 'Fight..')
    }

}

const player2 = {
    player: 2,
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: [],
    attack: function() {
        console.log(this.name + ' ' + 'Fight..')
    }
}

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className)
    }
    return $tag;
}



function createPlayer(object) {
    const $player = createElement('div', 'player' + object.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $image = createElement('img');

    $life.style.width = object.hp + '%'
    $name.innerText = object.name
    $image.src = object.img

    $progressbar.appendChild($name);
    $progressbar.appendChild($life);

    $character.appendChild($image)

    $player.appendChild($character);
    $player.appendChild($progressbar);

    return $player
}

function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    const number = Math.ceil(Math.random() * 20);
    if (player.hp > 0) {
        if (number > player.hp) {
            $playerLife.style.width = '0%';
            player.hp -= player.hp;
        } else {
            player.hp -= number;
            $playerLife.style.width = player.hp + '%';
        }
    } else {
        player.hp = 0;
    }
    console.log(player.hp);
}

function getWinner(playerA, playerB) {
    changeHP(playerA);
    changeHP(playerB);
    if (playerA.hp == 0 && playerB.hp > 0) {
        $arena.appendChild(playerWin(playerB.name));
        $randomButton.disabled = true;
    }
    if (playerB.hp == 0 && playerA.hp > 0) {
        $arena.appendChild(playerWin(playerA.name));
        $randomButton.disabled = true;
    }

    if (playerA.hp == 0 && playerB.hp == 0) {
        $arena.appendChild(noWinners());
        $randomButton.disabled = true;
    }

}

function noWinners() {
    const $noWinnersTitle = createElement('div', 'winTitle');
    $noWinnersTitle.innerText = 'No winners!';
    return $noWinnersTitle;
}

function playerWin(name) {
    const $loseTitle = createElement('div', 'winTitle');
    $loseTitle.innerText = name + ' win!';

    return $loseTitle;
}

$randomButton.addEventListener('click', function() {
    console.log('####:Click Random Button');
    getWinner(player1, player2);
});

$arena.appendChild(createPlayer(player1));
$arena.appendChild(createPlayer(player2));
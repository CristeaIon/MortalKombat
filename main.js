//Task 0
const player1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Katana', 'Kunai'],
    attack: function() {
        console.log(this.name + ' ' + 'Fight..')
    }

}

const player2 = {
    name: 'Sonya',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: [],
    attack: function() {
        console.log(this.name + ' ' + 'Fight..')
    }
}



function createPlayer(player, object) {
    const $player = document.createElement('div');
    $player.classList.add(player)

    const $arena = document.querySelector('.arenas');
    $arena.appendChild($player);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar')

    const $character = document.createElement('div');
    $character.classList.add('character')

    const $image = document.createElement('img');
    $image.src = object.img

    const $life = document.createElement('div');
    $life.classList.add('life')
    $life.style.width = `${object.hp}%`

    const $name = document.createElement('div');
    $name.classList.add('name')
    $name.innerText = object.name



    const $playerElem = document.querySelector(`.${player}`);
    $playerElem.appendChild($progressbar);
    $playerElem.appendChild($character);

    const $progressbarElem = document.querySelector(`.${player} .progressbar`);
    $progressbarElem.appendChild($life);
    $progressbarElem.appendChild($name);

    const $characterImg = document.querySelector(`.${player} .character`);
    $characterImg.appendChild($image)


}

createPlayer("player1", player1)
createPlayer("player2", player2)
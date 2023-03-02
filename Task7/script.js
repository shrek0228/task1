let map = [
    '1111111111111111111'.split(''),
    '1000000000010100001'.split(''),
    '1111101111010101001'.split(''),
    '1000001000010100001'.split(''),
    '1011111011110000001'.split(''),
    '1010000010110110001'.split(''),
    '1010111110110100111'.split(''),
    '1010000000000100001'.split(''),
    '1P11111111111110101'.split(''),
    '1010001010001000101'.split(''),
    '1010001000001000111'.split(''),
    '1011100000100000001'.split(''),
    '1000110111111111001'.split(''),
    '1010010000000001101'.split(''),
    '1011011111111101111'.split(''),
    '1010000000000101101'.split(''),
    '1011111111100100001'.split(''),
    '10100010001001111F1'.split(''),
    '1000100010110010001'.split(''),
    '1111111111111111111'.split(''),
]

let indexX = 0
let indexY = 0
let playerX, playerY = (0, 0)
const mazeField = document.querySelector('.maze-field')
for ( let row of map ) {
    for ( let cell of row ) {
        if ( cell == '1') {
            let div = document.createElement('div')
            div.classList.add('maze-block')
            div.style.top = indexY * 25 + 'px'
            div.style.left = indexX * 25 + 'px'
            mazeField.append(div)
        }
        if ( cell == 'P') {
            player.style.top = indexY * 25 + 'px'
            player.style.left = indexX * 25 + 'px'
            playerX = indexX
            playerY = indexY
        }
        if ( cell == 'F') {
            finish.style.top = indexY * 25 + 'px'
            finish.style.left = indexX * 25 + 'px' 
        }
        indexX += 1
    }
    indexX = 0
    indexY += 1
}

function move (direction) {
    if ( direction == 'down') {
        if (map[playerY+1][playerX] == '0') {
            map[playerY][playerX] = '0'
            map[playerY+1][playerX] = 'P'
            playerY++
            return true
        }
        if (map[playerY+1][playerX] == 'F') {
            return 'win'
        }
    }

    if ( direction == 'up') {
        if (map[playerY-1][playerX] == '0') {
            map[playerY][playerX] = '0'
            map[playerY-1][playerX] = 'P'
            playerY--
            return true
        } 
        if (map[playerY-1][playerX] == 'F') {
            return ' win'
        }
    }

    if ( direction == 'left') {
        if (map[playerY][playerX-1] == '0') {
            map[playerY][playerX] = '0'
            map[playerY][playerX-1] = 'P'
            playerX--
            return true
        }   
        if (map[playerY][playerX-1] == 'F') {
            return 'win'
        }
    }

    if ( direction == 'right') {
        if (map[playerY][playerX+1] == '0') {
            map[playerY][playerX] = '0'
            map[playerY][playerX+1] = 'P'
            playerX++
            return true
        }  
        if (map[playerY][playerX+1] == 'F') {
            return 'win'
        } 
    }

    return false
}

function bobr (event) {
    let direction = null
    if (event.key == 'd') {
        direction = 'right'
    }
    if (event.key == 'a') {
        direction = 'left'
    }
    if (event.key == 'w') {
        direction = 'up'
    }
    if (event.key == 's') {
        direction = 'down'
    }
    const moved = move(direction)
    if (moved == 'win') {
        points.innerText = 'Points 1'
        document.removeEventListener('keydown', bobr)
    }
    if (moved) {
        player.style.top = playerY * 25 + 'px'
        player.style.left = playerX * 25 + 'px'
    }
}

document.addEventListener('keydown', bobr)


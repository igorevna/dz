const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const w = canvas.width
const h = canvas.height

const r = 8

let score = 0

let ballColor = "#f40"
let paddleColor = "#05A"
let brickColor = "#3D7"
let textColor = "#999"

let x = canvas.width / 2
let y = canvas.height - 2*r

let dx = 3
let dy = -3

let dpx = 10

var lives = 3;
var livesText;
var lifeLostText;

var level = 1;

var paddleWidth = w/2
var paddleHeight = r

let paddleX = (w - paddleWidth) / 2
let paddleY = h - paddleHeight

let rightPressed = false
let leftPressed = false

const brickRows = 3
const brickCols = 10
const brickGap = 10 
const brickHeight = 1.5*r
const brickWidth = w / brickCols - 2*brickGap

let bricks = []
for(let c=0; c<brickCols; c++) {
    bricks[c] = []
    for(let r=0; r<brickRows; r++) {
        bricks[c][r] = {x:0, y:0, status: true}
    }
}

function drawBall() {
    ctx.beginPath()
    ctx.arc(x,y, r, 0, Math.PI*2)
    ctx.fillStyle = ballColor
    ctx.fill()
    ctx.closePath()
}
function drawPaddle() {
    ctx.beginPath()
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight)
    ctx.fillStyle = paddleColor
    ctx.fill()
    ctx.closePath()
}
function drawBricks() {
    for(let c=0; c<brickCols; c++) {
        for(let r=0; r<brickRows; r++) {
            if(bricks[c][r].status) {
                let bx = c*(brickWidth + 2*brickGap) + brickGap
                let by = r*(brickHeight + brickGap) + brickGap + 30
                bricks[c][r].x = bx
                bricks[c][r].y = by
    
                ctx.beginPath()
                ctx.rect(bx, by, brickWidth, brickHeight)
                ctx.fillStyle = brickColor
                ctx.fill()
                ctx.closePath()
            }
        }
    }
}
function drawScore() {
    ctx.font = "20px Arial"
    ctx.fillStyle = textColor
    ctx.fillText(`Счёт: ${score}`, 10, 25)
    //ctx.closePath()
    ctx.font = "20px Arial"
    ctx.fillStyle = textColor
    ctx.fillText(`Уровень : ${level}`, 450, 25)

    ctx.font = "20px Arial"
    ctx.fillStyle = textColor
    ctx.fillText(`Жизни : ${lives}`, 870, 25) 
    if(score === brickCols*brickRows) {
        clearInterval(interval)
        alert('you have won')
    }
}

function detectCollision() {
    for(let c=0; c<brickCols; c++) {
        for(let r=0; r<brickRows; r++) {
            let brick = bricks[c][r]
            if(brick.status) {

                // if(x >= brick.x - r && x <= brick.x + brickWidth + r && y <= brick.y + brickHeight + r) {
                //     dy = -dy
                //     brick.status = false
                //     score++
                // }
                // if(y >= brick.y - r && y <= brick.y + brickHeight + r && x >= brick.x - r) {
                //     dx = -dx
                //     brick.status = false
                //     score++
                // }
                // if(y >= brick.y - r && y <= brick.y + brickHeight + r && x <= brick.x + brickWidth + r) {
                //     dx = -dx
                //     brick.status = false
                //     score++
                // }
                if(x >= brick.x && x <= brick.x + brickWidth && y <= brick.y + brickHeight) {
                    dy = -dy
                    brick.status = false
                    score++
                    if(level<3){
                        if(score> 9){
                            level++
                            paddleWidth = canvas.width/2-((level-1)*50)
                            paddleHeight = 8

                            paddleX = (canvas.width - paddleWidth) / 2
                            paddleY = canvas.height - paddleHeight

                            clearInterval(interval)
                            interval = setInterval(draw, 20-level*10)
                        }
                        

                        
                        
                    }
                }
            }
        }
    }
}

function randomColor(){
    const chars = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
    let color = '#'
    for(let i = 0; i<6; i++) {
        color += chars[Math.floor(Math.random()*chars.length)]
    }
    return color
}

function draw() {
    ctx.clearRect(0,0,w,h)
    drawBricks()
    detectCollision()
    drawBall()
    drawPaddle()
    drawScore()
    if(x + dx > w - r || x + dx < r) {
        // ballColor = randomColor()
        dx = -dx
    }
    if(y + dy < r) {
        // ballColor = randomColor()
        dy = -dy
    } else if(y +dy > h - r) {
        if(x > paddleX && x < paddleX + paddleWidth) dy = -dy
        else {
            lives--;
            if(lives){
                x = canvas.width / 2
                y = canvas.height - 2*r
                dx = 3
                dy = -3
                draw()
            } else{
                clearInterval(interval)
                alert('game over')
            }
            
        }
    }

    if(rightPressed) {
        paddleX += dpx
        if(paddleX + paddleWidth > w) paddleX = w - paddleWidth
    }
    if(leftPressed) {
        paddleX -= dpx
        if(paddleX < 0) paddleX = 0
    }

    x += dx
    y += dy
}

// draw()
let interval = setInterval(draw, 20-level*10)



//keyboard

document.addEventListener('keydown', keyDownHandler)
document.addEventListener('keyup', keyUpHandler)

function keyDownHandler(event) {
    if(event.key === 'ArrowRight' || event.key === 'Right') rightPressed = true
    if(event.key === 'ArrowLeft' || event.key === 'Left') leftPressed = true
}
function keyUpHandler(event) {
    if(event.key === 'ArrowRight' || event.key === 'Right') rightPressed = false
    if(event.key === 'ArrowLeft' || event.key === 'Left') leftPressed = false
}
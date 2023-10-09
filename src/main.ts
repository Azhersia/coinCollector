import { coinBoxes, coins, randomizePosition, removeCoin, renderCoins } from './coin';
import { randomFloat } from './random';
import './style.css'

type Block = {
  x: number,
  y: number,
  width: number,
  height: number,
}

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d')!;
document.querySelector('#app')!.append(canvas);
canvas.width = 800;
canvas.height = 600;

export let blocks: Block[] = [
  {
    x: 150,
    y: 305,
    width: 250,
    height: 250,
  },
  {
    x: 100,
    y: 40,
    width: 320,
    height: 223,
  },
  {
    x: 472,
    y: 193,
    width: 285,
    height: 213,
  },
];

let player = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  width: 40,
  height: 40,
};

let w = false;
let a = false;
let s = false;
let d = false;

requestAnimationFrame(gameLoop);

function gameLoop() {
  requestAnimationFrame(gameLoop);
  update();
  render();
};

function update() {
  if (w) {
    player.y -= 7;
    yCollisions();
    coinYCollisions();
  };
  if (a) {
    player.x -= 7;
    xCollisions()
    coinXCollisions();
  };
  if (s) {
    player.y += 7;
    yCollisions();
    coinYCollisions();
  };
  if (d) {
    player.x += 7;
    xCollisions();
    coinXCollisions();
  };

  wallCollision();

  randomizePosition();
};

function wallCollision() {
  if (player.x >= canvas.width - 40) {
    player.x = canvas.width - 40;
  };
  if (player.x <= 0) {
    player.x = 0;
  };
  if (player.y >= canvas.height - 40) {
    player.y = canvas.height - 40
  };
  if (player.y <= 0) {
    player.y = 0
  };
};

function xCollisions() {
  for (let i = 0; i < blocks.length; i++) {
    let block = blocks[i];

    if (player.x < block.x + block.width && player.y > block.y - player.height && player.y < block.y + block.height && player.x + player.width > block.x) {

      if (player.x < block.x + block.width && a == true) {
        player.x = block.x + block.width;

      } else if (player.x + player.width > block.x && d == true) {
        player.x = block.x - player.width;

      } else if (player.y + player.height > block.y && s == true) {
        player.y = block.y - player.height;

      } else if (player.y < block.y + block.height && w == true) {
        player.y = block.y + block.height
      };
    };
  };
};
function yCollisions() {
  for (let i = 0; i < blocks.length; i++) {
    let block = blocks[i];

    if (player.x < block.x + block.width && player.y > block.y - player.height && player.y < block.y + block.height && player.x + player.width > block.x) {

      if (player.y + player.height > block.y && s == true) {
        player.y = block.y - player.height;

      } else if (player.y < block.y + block.height && w == true) {
        player.y = block.y + block.height

      } else if (player.x < block.x + block.width && a == true) {
        player.x = block.x + block.width;

      } else if (player.x + player.width > block.x && d == true) {
        player.x = block.x - player.width;
      };

    };
  };
};

function coinXCollisions() {
  for (let i = 0; i < coinBoxes.length; i++) {
    let coinBox = coinBoxes[i];



    if (player.x < coinBox.x + coinBox.w && player.y > coinBox.y - player.height && player.y < coinBox.y + coinBox.h && player.x + player.width > coinBox.x) {
      removeCoin(i)
    };
  };
};


function coinYCollisions() {
  for (let i = 0; i < coinBoxes.length; i++) {
    let coinBox = coinBoxes[i];

    if (player.x < coinBox.x + coinBox.w && player.y > coinBox.y - player.height - 2 && player.y < coinBox.y + coinBox.h - 2 && player.x + player.width > coinBox.x) {
      removeCoin(i)

    };
  };
};

window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);

function onKeyDown(e: any) {
  if (e.key == 'w') {
    w = true
  };
  if (e.key == 'a') {
    a = true
  };
  if (e.key == 's') {
    s = true
  };
  if (e.key == 'd') {
    d = true
  };
};

function onKeyUp(e: any) {
  if (e.key == 'w') {
    w = false
  };
  if (e.key == 'a') {
    a = false
  };
  if (e.key == 's') {
    s = false
  };
  if (e.key == 'd') {
    d = false
  };
};


function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  renderCoins(context)

  for (let i = 0; i < blocks.length; i++) {
    let block = blocks[i];
    createBlock(block.x, block.y, block.width, block.height);

    createPlayer(player.x, player.y, player.width, player.height);
  };
};

function createBlock(x: number, y: number, width: number, height: number) {
  context.beginPath();
  context.rect(x, y, width, height);
  context.stroke()

};
function createPlayer(x: number, y: number, width: number, height: number) {
  context.beginPath();
  context.rect(x, y, width, height);
  context.fillStyle = 'lime';
  context.fill();
};
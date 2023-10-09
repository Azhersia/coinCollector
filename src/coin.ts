import { blocks } from "./main";
import { randomFloat } from "./random";

let coinScore = 0;

type Coin = {
  x: any,
  y: number,
  radius: number,
};
type CoinBox = {
  x: number,
  y: number,
  w: number,
  h: number
};


export const coinBoxes: CoinBox[] = [
  {
    x: 0,
    y: 0,
    w: 10,
    h: 10,
  },
  {
    x: 0,
    y: 0,
    w: 10,
    h: 10,
  },
  {
    x: 0,
    y: 0,
    w: 10,
    h: 10,
  },
  {
    x: 0,
    y: 0,
    w: 10,
    h: 10,
  },
  {
    x: 0,
    y: 0,
    w: 10,
    h: 10,
  },
  {
    x: 0,
    y: 0,
    w: 10,
    h: 10,
  },
];


export const coins: Coin[] = [
  {
    x: coinBoxes[0].x,
    y: coinBoxes[0].y,
    radius: 10,
  },
  {
    x: coinBoxes[1].x,
    y: coinBoxes[1].y,
    radius: 10,
  },
  {
    x: coinBoxes[2].x,
    y: coinBoxes[2].y,
    radius: 10,
  },
  {
    x: coinBoxes[3].x,
    y: coinBoxes[3].y,
    radius: 10,
  },
  {
    x: coinBoxes[4].x,
    y: coinBoxes[4].y,
    radius: 10,
  },
  {
    x: coinBoxes[5].x,
    y: coinBoxes[5].y,
    radius: 10,
  },
];

export function removeCoin(i: number) {
  coins.splice(i, 1);
  coinBoxes.splice(i, 1);
  coinScore++;
  console.log(coinScore);
};

export function randomizePosition() {
  for (let j = 0; j < coinBoxes.length; j++) {
    for (let k = 0; k < blocks.length; k++) {
      const coinBox = coinBoxes[j];
      const block = blocks[k];

      if (coinBox.x == 0 || coinBox.x < block.x + block.width && coinBox.y > block.y - coinBox.h - 2 && coinBox.y < block.y + block.height - 2 && coinBox.x + coinBox.w > block.x) {
        coinBox.x = randomFloat(10, 600)
        coinBox.y = randomFloat(10, 600)
      };

    };
  };
};

export function renderCoins(context: CanvasRenderingContext2D) {
  for (let i = 0; i < coins.length; i++) {
    for (let j = 0; j < coinBoxes.length; j++) {

      const coin = coins[i];
      const coinBox = coinBoxes[j];

      context.beginPath();
      context.arc(coinBox.x + 5, coinBox.y + 5, coin.radius, 0, Math.PI * 2);

      context.closePath();
      context.fillStyle = 'yellow';
      context.stroke
      context.fill();

      context.beginPath();
      context.rect(coinBox.x, coinBox.y, coinBox.w, coinBox.h);

      context.fillStyle = 'blue';
      context.fill();


    };
  };
};

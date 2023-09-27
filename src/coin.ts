import { randomFloat } from "./random";

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

export const coins: Coin[] = [
  {
    x: randomFloat(10, 600),
    y: randomFloat(10, 600),
    radius: 10,
  },
  {
    x: randomFloat(10, 600),
    y: randomFloat(10, 600),
    radius: 10,
  },
  {
    x: randomFloat(10, 600),
    y: randomFloat(10, 600),
    radius: 10,
  },
  {
    x: randomFloat(10, 600),
    y: randomFloat(10, 600),
    radius: 10,
  },
  {
    x: randomFloat(10, 600),
    y: randomFloat(10, 600),
    radius: 10,
  },
  {
    x: randomFloat(10, 600),
    y: randomFloat(10, 600),
    radius: 10,
  },
];

export const coinBoxes: CoinBox[] = [
  {
    x: coins[0].x,
    y: coins[0].y,
    w: 10,
    h: 10,
  },
  {
    x: coins[1].x,
    y: coins[1].y,
    w: 10,
    h: 10,
  },
  {
    x: coins[2].x,
    y: coins[2].y,
    w: 10,
    h: 10,
  },
  {
    x: coins[3].x,
    y: coins[3].y,
    w: 10,
    h: 10,
  },
  {
    x: coins[4].x,
    y: coins[4].y,
    w: 10,
    h: 10,
  },
  {
    x: coins[5].x,
    y: coins[5].y,
    w: 10,
    h: 10,
  },
];

export function coinCount() {
  return coins.length;
};


export function createCoin() {
  coins.push({
    x: randomFloat(-7, 7),
    y: randomFloat(-7, 7),
    radius: 40,
  });
};

export function removeCoin() {
  for (let i = 0; i < coins.length; i++) {
    console.log(coins[i]);

    coins.splice(i, 1);
    coinBoxes.splice(i, 1);
  }
}

export function removeAllCoins() {
  coins.splice(0, coins.length);
};


export function renderCoins(context: CanvasRenderingContext2D) {
  for (let i = 0; i < coins.length; i++) {
    for (let j = 0; j < coinBoxes.length; j++) {
      const coin = coins[i];
      const coinBox = coinBoxes[j];
      context.beginPath();
      context.arc(coin.x, coin.y, coin.radius, 0, Math.PI * 2);
      context.closePath();
      context.fillStyle = 'yellow';
      context.stroke
      context.fill();

      context.beginPath();
      context.rect(coin.x - 5.5, coin.y - 5, coinBox.w, coinBox.h);

      context.fillStyle = 'yellow';
      context.fill();
    };
  };
};

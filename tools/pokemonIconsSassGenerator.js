const padToThree = number => ('00' + number).slice(-3);
const spriteList = [];

const mega = [
  3,
  9,
  15,
  18,
  65,
  80,
  94,
  115,
  127,
  130,
  142,
  181,
  208,
  212,
  214,
  229,
  248,
  254,
  257,
  260,
  282,
  302,
  303,
  306,
  308,
  310,
  319,
  323,
  334,
  354,
  359,
  362,
  373,
  376,
  380,
  381,
  384,
  428,
  445,
  448,
  460,
  475,
  531,
  719
];

const megaXY = [
  6,
  150
];

const alolan = [
  19,
  20,
  26,
  27,
  28,
  37,
  38,
  50,
  51,
  52,
  53,
  74,
  75,
  76,
  88,
  89,
  103,
  105
];

const cosplayNumber = 25;
const cosplay = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f'
];

const cosplayLR = [
  'a',
  'e'
];

const lr = [
  35,
  36,
  39,
  40,
  61,
  62,
  99
];

function addCosplays(i) {
  cosplay.forEach((cosplay) => {
    spriteList.push(padToThree(i) + '-cosplay-' + cosplay);
    if (cosplayLR.includes(cosplay)) {
      spriteList.push(padToThree(i) + '-cosplay-' + cosplay + '-r');
    }
    spriteList.push(padToThree(i) + '-cosplay-' + cosplay + '-shiny');
    if (cosplayLR.includes(cosplay)) {
      spriteList.push(padToThree(i) + '-cosplay-' + cosplay + '-r-shiny');
    }
  });
}

for(let i = 1; i <= 806; i++) {
  spriteList.push(padToThree(i));
  if (lr.includes(i)) {
    spriteList.push(padToThree(i) + '-r');
  }
  spriteList.push(padToThree(i) + '-shiny');
  if (lr.includes(i)) {
    spriteList.push(padToThree(i) + '-r-shiny');
  }
  if (i === cosplayNumber) {
    addCosplays(i);
  }
  if (mega.includes(i)) {
    spriteList.push(padToThree(i) + '-mega');
    spriteList.push(padToThree(i) + '-mega-shiny');
  }
  if (megaXY.includes(i)) {
    spriteList.push(padToThree(i) + '-mega-x');
    spriteList.push(padToThree(i) + '-mega-x-shiny');
    spriteList.push(padToThree(i) + '-mega-y');
    spriteList.push(padToThree(i) + '-mega-y-shiny');
  }
  if (alolan.includes(i)) {
    spriteList.push(padToThree(i) + '-alolan');
    spriteList.push(padToThree(i) + '-alolan-shiny');
  }
}

let i = 0;
let rowSize = 32;

spriteList.forEach((name) => {
  console.log('.pokemon-icon-' + name + ' {\n    background-position: -' + ((i % rowSize) * 40) + 'px -' + ((Math.floor(i/rowSize)) * 30) + 'px;\n}\n');
  i++;
});
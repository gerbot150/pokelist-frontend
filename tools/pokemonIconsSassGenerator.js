const padToThree = number => ('00' + number).slice(-3);
const spriteList = [];

const mega = [
  3, 9, 15, 18, 65, 80, 94, 115, 127, 130, 142, 181, 208, 212, 214, 229, 248,
  254, 257, 260, 282, 302, 303, 306, 308, 310, 319, 323, 334, 354, 359, 362,
  373, 376, 380, 381, 382, 383, 384, 428, 445, 448, 460, 475, 531, 719
];

const megaXY = [
  6, 150
];

const alolan = [
  19, 20, 26, 27, 28, 37, 38, 50, 51, 52, 53, 74, 75, 76, 88, 89, 103, 105
];

const cosplayNumber = 25;
const cosplay = [
  'a', 'b', 'c', 'd', 'e', 'f'
];
const cosplayLR = [
  'a', 'e'
];

const defaultUnknown = 'f';
const unknownNumber = 201;
const unknown = [
  'a', 'b', 'c', 'd', 'e', 'excl', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 'ques', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
const unknownLR = [
  'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'ques',
  'r', 's', 't', 'v', 'z'
];

const castformNumber = 351;
const castform = [
  'a', 'b', 'c'
];
const castformLR = [
  'b'
];

const lr = [
  35, 36, 39, 40, 61, 62, 99, 159, 173, 174, 186, 215, 216, 315, 335, 336, 359, 377
];

function addVariants(baseString, isLR) {
    spriteList.push(baseString);
    if (isLR) {
      spriteList.push(baseString + '-r');
    }
    spriteList.push(baseString + '-shiny');
    if (isLR) {
      spriteList.push(baseString + '-r-shiny');
    }
}

function addCosplays(i) {
  cosplay.forEach((cosplay) => {
    addVariants(padToThree(i) + '-cosplay-' + cosplay, cosplayLR.includes(cosplay));
  });
}

function addUnknown(i) {
  unknown.forEach((unknown) => {
    if (unknown === defaultUnknown) {
      addVariants(padToThree(i), true);
      return;
    }
    addVariants(padToThree(i) + '-' + unknown, unknownLR.includes(unknown));
  });
}

function addCastform(i) {
  castform.forEach((castform) => {
    addVariants(padToThree(i) + '-' + castform, castformLR.includes(castform));
  });
}

for(let i = 1; i <= 806; i++) {
  if (i === unknownNumber) {
    addUnknown(i);
  } else {
    addVariants(padToThree(i), lr.includes(i));
    if (i === cosplayNumber) {
      addCosplays(i);
    }
    if (i === castformNumber) {
      addCastform(i);
    }
    if (mega.includes(i)) {
      addVariants(padToThree(i) + '-mega', lr.includes(i));
    }
    if (megaXY.includes(i)) {
      addVariants(padToThree(i) + '-mega-x', false);
      addVariants(padToThree(i) + '-mega-y', false);
    }
    if (alolan.includes(i)) {
      addVariants(padToThree(i) + '-alolan', false);
    }
  }
}

let i = 0;
let rowSize = 32;

spriteList.forEach((name) => {
  console.log('.pokemon-icon-' + name + ' {\n    background-position: -' + ((i % rowSize) * 40) + 'px -' + ((Math.floor(i/rowSize)) * 30) + 'px;\n}\n');
  i++;
});

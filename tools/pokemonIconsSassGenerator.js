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

const forms = {
  '25': {
    forms: [
      'a', 'b', 'c', 'd', 'e', 'f'
    ],
    formsLR: [
      'a', 'e'
    ]
  },
  '351': {
    forms: [
      'a', 'b', 'c'
    ],
    formsLR: [
      'b'
    ]
  },
  '386': {
    forms: [
      'a', 'b', 'c'
    ],
    formsLR: []
  },
  '412': {
    forms: [
      'a', 'b'
    ],
    formsLR: []
  },
  '413': {
    forms: [
      'a', 'b'
    ],
    formsLR: []
  },
  '421': {
    forms: [
      'a'
    ],
    formsLR: []
  },
  '422': {
    forms: [
      'a'
    ],
    formsLR: []
  },
  '423': {
    forms: [
      'a'
    ],
    formsLR: []
  },
  '479': {
    forms: [
      'a', 'b', 'c', 'd', 'e'
    ],
    formsLR: [
      'e'
    ]
  },
  '487': {
    forms: [
      'a'
    ],
    formsLR: []
  },
  '492': {
    forms: [
      'a'
    ],
    formsLR: [
      'a'
    ]
  },
  '521': {
    forms: [
      'a'
    ],
    formsLR: []
  },
  '550': {
    forms: [
      'a'
    ],
    formsLR: []
  },
  '555': {
    forms: [
      'a'
    ],
    formsLR: []
  },
  '585': {
    forms: [
      'a', 'b', 'c'
    ],
    formsLR: []
  },
  '586': {
    forms: [
      'a', 'b', 'c'
    ],
    formsLR: []
  },
  '592': {
    forms: [
      'a'
    ],
    formsLR: []
  },
  '593': {
    forms: [
      'a'
    ],
    formsLR: []
  },
  '641': {
    forms: [
      'a'
    ],
    formsLR: []
  },
  '642': {
    forms: [
      'a'
    ],
    formsLR: []
  },
  '645': {
    forms: [
      'a'
    ],
    formsLR: []
  },
  '646': {
    forms: [
      'a', 'b'
    ],
    formsLR: [
      'a', 'b'
    ]
  },
  '647': {
    forms: [
      'a'
    ],
    formsLR: [
      'a'
    ]
  },
  '648': {
    forms: [
      'a'
    ],
    formsLR: []
  },
  '666': {
    forms: [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
      'p', 'q', 'r', 's'
    ],
    formsLR: []
  },
  '669': {
    forms: [
      'a', 'b', 'c', 'd'
    ],
    formsLR: []
  },
  '670': {
    forms: [
      'a', 'b', 'c', 'd'
    ],
    formsLR: []
  },
  '671': {
    forms: [
      'a', 'b', 'c', 'd'
    ],
    formsLR: []
  },
  '676': {
    forms: [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'
    ],
    formsLR: [
      'b'
    ]
  },
  '681': {
    forms: [
      'a'
    ],
    formsLR: []
  },
  '716': {
    forms: [
      'a'
    ],
    formsLR: []
  },
  '720': {
    forms: [
      'a'
    ],
    formsLR: []
  },
  '801': {
    forms: [
      'a'
    ],
    formsLR: []
  },
};

const lr = [
  35, 36, 39, 40, 61, 62, 99, 159, 173, 174, 186, 215, 216, 315, 335, 336, 359,
  377, 389, 406, 407, 467, 468, 500, 513, 514, 529, 530, 539, 549, 569, 577,
  584, 591, 599, 600, 601, 607, 622, 623, 646, 648, 658, 668, 678, 689, 692,
  693, 700, 707, 718
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

function addForms(i, forms, formsLR) {
  forms.forEach((form) => {
    addVariants(padToThree(i) + '-' + form, formsLR.includes(form));
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

for(let i = 1; i <= 806; i++) {
  if (i === unknownNumber) {
    addUnknown(i);
  } else {
    addVariants(padToThree(i), lr.includes(i));
    if (forms[i]) {
      addForms(i, forms[i].forms, forms[i].formsLR);
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

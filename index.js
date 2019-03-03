// y = -1x3 + -2x2 + 10x + 10;
const data = [
  {
    x: -15,
    y: 2785,
  },
  {
    x: -10,
    y: 710,
  },
  {
    x: -5,
    y: 35,
  },
  {
    x: -1,
    y: 3,
  },
  {
    x: 0,
    y: 10,
  },
  {
    x: 1,
    y: 19,
  },
  {
    x: 2,
    y: 14,
  },
  {
    x: 3,
    y: -5,
  },
  {
    x: 5,
    y: -115,
  },
  {
    x: 10,
    y: -1090,
  },
];


let thetaZero = Math.random() * 2 -1;
let thetaOne = Math.random() * 2 -1;
let thetaTwo = Math.random() * 2 -1;
let thetaThree = Math.random() * 2 -1;

const learningRate = 0.000001;
const learningIterations = 10000000;


const hypothesis = x => thetaZero + thetaOne * x + thetaTwo * x * x + thetaThree * x * x * x;


const learn = () => {
  let thetaZeroSum = 0;
  let thetaOneSum = 0;
  let thetaTwoSum = 0;
  let thetaThreeSum = 0;

  for (let x = 0; x < data.length; x++) {
    thetaZeroSum += hypothesis(data[x].x) - data[x].y;
    thetaOneSum += (hypothesis(data[x].x) - data[x].y) * data[x].x;
    thetaTwoSum += (hypothesis(data[x].x) - data[x].y) * data[x].x * data[x].x;
    thetaThreeSum += (hypothesis(data[x].x) - data[x].y) * data[x].x * data[x].x * data[x].x;
  }

  thetaZero = thetaZero - (learningRate) * thetaZeroSum / data.length;
  thetaOne = thetaOne - (learningRate) * thetaOneSum / data.length;
  thetaTwo = thetaTwo - (learningRate) * thetaTwoSum / data.length;
  thetaThree = thetaThree - (learningRate) * thetaThreeSum / data.length;
}


for(let x = 0 ; x < learningIterations; x++) {
  learn();
}

console.log(thetaZero);
console.log(thetaOne);
console.log(thetaTwo);
console.log(thetaThree);

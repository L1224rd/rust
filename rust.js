// console.log('\033c');

const start = new Date();
const numSize = 2;
const numOfLoops = 10**7;
let maxCount = 0;
let totalCount = 0;


const findNum = () => {
  const pickedNumbers = [];
  const randomNumbers = [];
  let count = 0;

  const getRandomNumber = () => {
    count++;
    const num = Math.floor((Math.random() * numSize) + 1);
    randomNumbers.push(num);
    if (pickedNumbers.indexOf(num) < 0) pickedNumbers.push(num);
    if (pickedNumbers.length < numSize) getRandomNumber();
  }

  getRandomNumber();

  totalCount += count;
  if(count > maxCount) maxCount = count;
};

for (let i = 0; i < numOfLoops; i++) {
  findNum();
}

console.log('Average:', totalCount / numOfLoops);
console.log('Max Count:', maxCount);
console.log('Time:', new Date() - start);


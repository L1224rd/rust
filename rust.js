console.log('\033c');

const start = new Date();
const numSize = process.argv[2];
const numOfLoops = 10 ** 8;
let maxCount = 0;
let totalCount = 0;

console.log(numSize);

const findNum = () => {
  const pickedNumbers = [];
  const randNumbers = [];
  let count = 0;

  const getRandomNumber = () => {
    count++;
    const num = Math.floor((Math.random() * numSize) + 1);
    if (pickedNumbers.indexOf(num) < 0) pickedNumbers.push(num);
    // randNumbers.push(num);
  }
  
  while (pickedNumbers.length < numSize) {
    getRandomNumber();
  }
  
  totalCount += count;
  if (count > maxCount) maxCount = count;
  // console.log(randNumbers);
};

for (let i = 0; i < numOfLoops; i++) {
  findNum();
}

console.log(numSize);
console.log('Average:', totalCount / numOfLoops);
console.log('Max Count:', maxCount);
console.log('Time:', new Date() - start);


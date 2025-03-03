console.log("Data Structures");

class stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }
  push(ele) {
    this.items[this.count] = ele;
    console.log(`${ele} pushed to ${this.count}`);
    this.count++;
  }
  pop() {
    const removeEle = this.items[this.count - 1];
    this.count--;
    console.log(`removed => ${removeEle}`);
    return removeEle;
  }
}

const stacks = new stack();
stacks.push(1);
stacks.push(2);
stacks.push(3);
stacks.push(4);
stacks.push(5);
stacks.pop();
console.log(stacks.items);
console.log(stacks.count);

let ele = [1, 2, 5, 7, 2, 6];
let removed = [];
for (let x = 0; x < ele.length; x++) {
  removed.push(ele[x]) - 1;
}
console.log(removed);
const ar = [1, 2, 3, 4, 5, 6, 7, 8];
const ar1 = [1, 2, 3, 4];
let lengthAP = (ele) => {
  let count = 0;
  for (let x in ele) {
    if (ele[x]) {
      count++;
    }
  }
  return count;
};

console.log(`count => ${lengthAP(ar1)}`);

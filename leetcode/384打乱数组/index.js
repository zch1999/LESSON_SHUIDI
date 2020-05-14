var Solution = function(nums) {
  this.arr = nums
};

/**
* Resets the array to its original configuration and return it.
* @return {number[]}
*/
Solution.prototype.reset = function() {
  return this.arr
};

/**
* Returns a random shuffling of the array.
* @return {number[]}
*/
Solution.prototype.shuffle = function() {
  let num = [...this.arr];
  let n = num.length - 1;
  // while(n >= 0) {
  //     let index = Math.floor(Math.random() * (n+1) );
  //     [num[index], num[n]] = [num[n], num[index]];
  //     n--;
  // }
  // let num = [...this.arr]
  // let n = num.length-1
  while(n>=0){
      let index = Math.floor(Math.random() * (n+1) )
      console.log(index)
      // ([num[index], num[n]] = [num[n], num[index]])
      n--;
  }
  return num
};

let a = new Solution([1,2,3])
console.log(a.reset())
console.log(a.shuffle())
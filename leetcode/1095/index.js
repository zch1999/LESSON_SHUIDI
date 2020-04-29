/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
  let left = 0
  let right = mountainArr.length() - 1
  while(left < right){
      let mid = (left + right) >> 1
      if(mountainArr.get(mid) < mountainArr.get(mid+1)){
          left = mid + 1
      }else{
          right = mid 
      }
  }
  let maxleft = left
  left = 0
  right = maxleft
  console.log(right)
  while(right >= left){
      let mid = (left + right) >> 1
      if(mountainArr.get(mid) == target){
          return mid
      }
      if(mountainArr.get(mid) < target){
          left = mid + 1
      }else{
          right = mid - 1
      }
  }
  left = maxleft
  right = mountainArr.length() -1
  while(right >= left){
      let mid = (left + right) >> 1
      if(mountainArr.get(mid) == target){
          return mid
      }
      if(mountainArr.get(mid) < target){
          right = mid - 1
      }else{
          left = mid + 1
      }
  }
  return -1
};
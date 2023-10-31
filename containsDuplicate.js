//method1
var containsDuplicate = function(nums) {
   for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
          if(nums[i]===nums[j]){
            return true;
          }
        }
   }
  return false;
};
//T.C:O(n^2), S.C:O(1)

//method2
var containsDuplicate = function(nums) {
    const arr=new Set();
    for(let duplicate of nums){
        if(arr.has(duplicate)){
            return true;
        }
        arr.add(duplicate);
    }
    return false;
};
//T.C:O(n), S.C:(n)

//method3
var containsDuplicate = function(nums) {
    let map=new Map();
    for(let num of nums){
        if(!map.has(num)){
            map.set(num,1);
        } else{
            return true;
        }
    }
    return false;
};
//T.C:O(n), S.C:O(n)
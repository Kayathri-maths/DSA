var getConcatenation = function(nums) {
  let arr=[];
    for(let i=0;i<nums.length*2;i++){
        arr[i]=nums[i%nums.length];
    }
    return arr;
};
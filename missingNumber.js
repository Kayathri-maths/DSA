var missingNumber=function(arr){
  let n=arr.length;
  let total=Math.floor((n+1)*(n+2)/2);
  for(let i=0;i<n;i++){
    total-=arr[i];
  }
  return total;
}
let arr=[1,4,3];
console.log(missingNumber(arr));
//T.C:O(n), S.C:O(1)
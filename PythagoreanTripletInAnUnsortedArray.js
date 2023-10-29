class Solution {

    checkTriplet(arr,n){
        let set1=new Set();
        for(let i=0;i<n;i++){
            set1.add(arr[i]*arr[i]);
        }
      for(let i=0;i<n-1;i++){
          for(let j=i+1;j<n;j++){
              if(set1.has((arr[i]*arr[i]+arr[j]*arr[j]))){
                  return true;
              }
          }
      }
      return false;
    }
}
//T.C:O(n^2), S.C:O(n)
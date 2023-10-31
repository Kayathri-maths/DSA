//method1
class Solution {
    countZeroes(arr, n) {
        // write your code here
        let count=0;
        for(let i=n-1;i>=0;i--){
            if(arr[i]===0){
                count++;
            } else{
                break;
            }
        }
        return count;
    }
}
//T.C:O(n), S.C:O(1)

//method2
class Solution {
    countZeroes(arr, n) {
        let count=0;
        let low=0;
        let high=n-1;
        while(low<=high){
            const mid=Math.floor((low+high)/2);
            if(arr[mid]===0){
                count=n-mid;
                high=mid-1;
            } else{
                low=mid+1;
            }
        }
        return count;
    }
}
//T.C:O(logn), S.C:O(1)
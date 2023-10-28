class Solution {
    
    searchInSorted(arr, N, K)
    {
        //your code here
        let left=0;
        let right=N-1;
        while(left<=right){
            const mid=Math.floor((left+right)/2);
            if(arr[mid]===K){
                return 1;
            }
            if(arr[mid]<K){
                left=mid+1;
            } else {
                right=mid-1;
            }
        }
        return -1;
    }
}
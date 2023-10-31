class Solution {
    
    rowWithMax1s(arr, n, m){
        let index=-1;
        let max=0;
        for(let i=0;i<n;i++){
            let count=0;
            for(let j=0;j<m;j++){
                if(arr[i][j]===1){
                    count++;
                }
            }
            if(max<count){
                max=count;
                index=i;
            }
        }
        return index;
    }
}
//T.C:O(n*m), S.C:O(1)
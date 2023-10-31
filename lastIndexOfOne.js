class Solution{
    lastIndex(S){
        //code here
        let index=-1;
        for(let i=S.length-1;i>=0;i--){
            if(S[i]==="1"){
                index=i;
                break;
            }  
        }
        return index;
    }
}
//T.C:O(n), S.C:O(1)
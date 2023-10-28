class Solution {
    //Function to check if two arrays are equal or not.
    check(A,B,N){
        // code here
        let map=new Map();
        
        for(let a of A){
            if(!map.has(a)){
                map.set(a,1);
            }else{
            map.set(a,map.get(a)+1);
            }
        }
        for(let b of B){
            if(!map.has(b)){
                map.set(b,1);
            } else{
            map.set(b,map.get(b)-1);
            }
        }
        for(let [key,value] of map){
            if(value!==0){
                return false;
            }
        }
        return true;
    }
    
}

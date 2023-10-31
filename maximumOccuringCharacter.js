class Solution 
{
    //Function to find the maximum occurring character in a string.
    getMaxOccuringChar(str)
    {
        let map=new Map();
        for(let i of str){
            if(map.has(i)){
                map.set(i,map.get(i)+1);
            } else{
                map.set(i,1);
            }
        }
       
       let max=0;
       let arr=[];
       for(let [key,val] of map){
           if(max<=val){
               if(max<val){
               max=val;
               arr=[];
               }
               arr.push(key);
           }
       }
           arr.sort();
       
       return arr[0];
    }
}
//T.C:O(n), S.C:O(n)
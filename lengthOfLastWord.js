
var lengthOfLastWord = function(s) {
    return s.trim().split(' ').pop().length;
};
// T.C: O(n), S.C:O(n)  trim and split takes O(n) s.c

var lengthOfLastWord = function(s) {
    let count=0;
     for(let i=s.length-1;i>=0;i--){
         
          if(count>0 && s[i]===" ")   return count;
         
         if(s[i]===" ")  continue;
         
         count++;
     }
   return count;
};
//T.C:O(n), S.C:O(1)
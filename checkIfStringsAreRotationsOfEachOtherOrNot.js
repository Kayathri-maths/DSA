class Solution 
{
    //Function to check if two strings are rotations of each other or not.
    areRotations(s1, s2)
    {
        // code here
        let str=s1+s1;
        if(s1.length!==s2.length)   return false;
        
        if(str.includes(s2))   return true;
        
      return false;
    }
}
//T.C: O(n), S.C:O(n+n)
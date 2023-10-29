
//method1
class Solution {
    findMissing(arr,n){
       //code here
      let diff=Math.abs((arr[n-1]-arr[0])/n);
    //  console.log(diff);
      let i=0;
      while(i<n){
          if(Math.abs(arr[i]-arr[i+1])===diff){
              i++;
          } else{
              let ans=Math.floor((arr[i]+arr[i+1])/2);
              return ans;
          }
      }
    }
}

//T.C:O(n),S.C:O(1)
//method2
class Solution {
    findMissing(arr,n){
       //code here
      let diff=parseInt((arr[n-1]-arr[0])/n,10);
      
      return this.findEle(arr,0,n-1,diff);
      
    }
    
       findEle(arr,low,high,diff){
        let mid=Math.floor((low+high)/2);
        if(arr[mid+1]-arr[mid]!==diff){
            return arr[mid]+diff;
        }
        if(arr[mid]-arr[mid-1]!==diff){
            return arr[mid]-diff;
        }
        
        if(arr[mid]===arr[0]+mid*diff){
            return this.findEle(arr,mid+1,high,diff);
        }
        return this.findEle(arr,low,mid-1,diff);
    }
  
}
//T.C:O(logn),S.C:O(1)
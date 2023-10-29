//method1
class Solution{
    check_elements(arr, n, A, B){
        let set1=new Set();
        for(let i=0;i<n;i++){
            set1.add(arr[i]);
        }
        for(let i=A;i<=B;i++){
            if(!set1.has(i)){
                return false;
            }
        }
        return true;
    }
}
//T.C:O(nlogn) , S.C:O(max_element)



//method2
class Solution{
    check_elements(arr, n, A, B){
           for(let i=A;i<=B;i++){
           if(!arr.includes(i)){
               return false;
           }
       }
       return true;
    }
}
// T.C:O((B-A+1)*n), S.C:O(n)

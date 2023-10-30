class Solution{
    segregateElements(arr,n){
        //code here
    let pos = [];
    let neg = [];

    for (let i = 0; i < n; i++) {
        if (arr[i]<0) {
            neg.push(arr[i]);
        } else {
           pos.push(arr[i]);
        }
    }

       for(let j=0;j<pos.length;j++){
           arr[j]=pos[j];
       }
       
       for(let j=0;j<neg.length;j++){
           arr[j+pos.length]=neg[j];
       }

    }
}
//T.C:O(n), S.C:O(n)

var searchMatrix = function(matrix, target) {
//for(let i=0;i<matrix.length;i++){
//    for(let j=0;j<matrix[i].length;j++){
//        if(matrix[i][j]===target){
 //           return true;
//        }
 //   }
//}
//    return false;  //T.C:O(m*n), S.C:O(1) 
    let m=matrix.length;
    let n=matrix[0].length;
    let left=0;
    let right=m*n-1;
  
      while(left<=right){
          let mid=Math.floor((left+right)/2);
          let mid_ele=matrix[Math.floor((mid/n))][mid%n]
          
          if(target===mid_ele){
              return true;
          } else if(target>mid_ele){
               left=mid+1;
          } else{
              right=mid-1;
          }
 
      }
    return false;
};
//T.C:O(log(m*n)),S.C:O(1)
var mostWordsFound = function(sentences) {
    
    let max=0;
    for(let i=0;i<sentences.length;i++){
       const words=sentences[i].split(" ").length;
       max=Math.max(max,words);
    }
   return max;
};
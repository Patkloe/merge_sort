function fusionner(t1,t2){
 var t = [];
 var i = 0, j = 0, k = 0;
 var n = t1.length, m = t2.length;
 while((i < n) && (j < m)){
  if(t1[i] < t2[j]){
      t[k] = t1[i];
      i++;
  }
  else{
       t[k] = t2[j];
       j++;
  }
       k++;
 }// fin while
 while(i < n){
   t[k] = t1[i];
     i++;
     k++;
 }
 while(j < m){
    t[k] = t2[j];
     j++;
     k++;
 }
 return t;
}
 function trier(t){
   var n = t.length;
  if(n == 0 || n == 1){
    return t;
  }
  else{
   var t1 = trier(t.slice(0,n/2));
   var t2 = trier(t.slice(n/2));
     return fusionner(t1,t2);
  }
 }
 var tab = [1,5,4,7,6,3,9,8,2];
      trier(tab);

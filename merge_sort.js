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
 var test = [15,9,10,8,5,6,7,2,3,4,1,11,13,12,14];
      trier(test);
// version  2
function fusionner(t1,t2){
 var t = [];
 var i = 0, j = 0, k = 0;
 var n = t1.length, m = t2.length;
 while((i < n) && (j < m)){
  if(t1[i] < t2[j]){
      //t[k] = t1[i];
      t.push(t1[i]);
      i++;
  }
  else{
       //t[k] = t2[j];
       t.push(t2[j]);
       j++;
  }
       //k++;
 }// fin while
 while(i < n){
   //t[k] = t1[i];
     t.push(t1[i]);
     i++;
     //k++;
 }
 while(j < m){
    //t[k] = t2[j];
     t.push(t2[j]);
     j++;
     //k++;
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
 var test = [15,9,10,8,5,6,7,2,3,4,1,11,13,12,14];
      trier(test);
// var tab1 = [9,7,6,4,5,8];
// var tab2 = [0,3,2];
 //fusionner(tab1,tab2);

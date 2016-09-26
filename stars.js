  const stars= function(str) {
    if (str===0) {return "" ; } return "*" + stars(str-1);  
  };
  
  
  const space= function(spc) {
    if (spc===0) {return "" ; } return " " + space(spc-1);
   };  
  
  
  
  const trianglestars= function(n) { 
 	run(n-1,1, n); 
   };
    

  const run= function (spc, str, n ) {
    if (n===0) {return "" ; }
	console.log(space(spc)+ stars(str)) ; 
    run(spc-1, str+2, n-1);
   }; 
  

  trianglestars(5); 
   
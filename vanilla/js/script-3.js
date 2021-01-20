
var min=parseInt(prompt('inserire un numero'));
var max=parseInt(prompt('inserire un secondo numero'));
var primoArray=['ciao','pippo','pluto','paperino','topolino','minni'];


function popolaNuovoArray(arrayParole, parolaPrima, parolaUltima){
  var secondoArray=[];

  for(var i=0;i<=arrayParole.lenght;i++){
    if(i<= parolaPrima && i<= parolaUltima){
      secondoArray.push(arrayParole[i]);
    }
  }
  return secondoArray;
}

console.log(popolaNuovoArray(primoArray,min,max));

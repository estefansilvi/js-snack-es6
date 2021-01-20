/*
const gatti = [
  {
    nome : 'red',
    anni: 2,
    colore: 'rosso',
    sesso:'maschio'
  },
  {
    nome : 'tobi',
    anni: 12,
    colore: 'nero',
    sesso: 'femmina'
  },
  {
    nome: 'gonfiotto',
    anni: 5,
    colore:'bianco e grigio',
    sesso: 'femmina'
  }
]

gatti.forEach((element) => {
  console.log(element.nome, element.colore)
})
*/


const min = parseInt(prompt('inserire un numero'));
const max = parseInt(prompt('inserire un secondo numero'));
const primoArray = ['ciao','pippo','pluto','paperino','topolino','minni'];


function popolaNuovoArray(arrayParole, parolaPrima, parolaUltima){
  const secondoArray=[];
/*
  for(let i=0;i<=arrayParole.lenght;i++){
    if(i<= parolaPrima && i<= parolaUltima){
      secondoArray.push(arrayParole[i]);
    }
  }
*/
  arrayParole.forEach((item, i) => {
    if(i>= parolaPrima && i <= parolaUltima){
      secondoArray.push(item);
    }
  });

  return secondoArray;
}

console.log(popolaNuovoArray(primoArray,min,max));

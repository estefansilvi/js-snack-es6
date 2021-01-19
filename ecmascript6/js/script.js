const bicicle =[
 {
    nome :'speed',
    peso : 50
  },
  {
    nome :'idro',
    peso : 100
  },
  {
    nome :'bianchi',
    peso : 25
  },
  {
    nome :'masciarelli',
    peso : 80
  }
]

// cercare in un array di oggetti, quello con il peso minore creando una variabile
let pesoMinore = bicicle[0];//prendo come riferimento il primo oggetto dell'arrey creat

for ( let i=0; i < bicicle.length; i++){
  if(bicicle[i].peso < pesoMinore.peso){
    pesoMinore = bicicle[i]
  }
}

console.log(pesoMinore);

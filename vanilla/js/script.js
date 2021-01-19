var bicicle = [
  {
    'nome': 'speed',
    'peso': 50
  },
  {
    'nome': 'idro',
    'peso': 100
  },
  {
    'nome':'bianchi',
    'peso': 25
  },
  {
    'nome': 'masciarelli',
    'peso': 50
  }
];

// cercare in un array di oggetti, quello con il peso minore
var pesoMinore= bicicle[0];//prendo come riferimento il primo oggetto dell'arrey creato

for(var i=1; i < bicicle.length;i++){
  if (bicicle[i].peso < pesoMinore.peso){
    pesoMinore = bicicle[i]
  }
}

console.log(pesoMinore.nome);

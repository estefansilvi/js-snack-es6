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

let pesoMinore = bicicle[0];

for ( var i=0; i < bicicle.length; i++){
  if(bicicle[i].peso < pesoMinore.peso){
    pesoMinore = bicicle[i]
  }
}

console.log(pesoMinore);

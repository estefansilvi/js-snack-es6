var squadre = [
  {
    'nome': 'juventus',
    'punteggio': 0,
    'falliSubiti': 0
  },
  {
    'nome': 'milan',
    'punteggio': 0,
    'falliSubiti': 0
  },
  {
    'nome': 'lazio',
    'punteggio': 0,
    'falliSubiti': 0
  },
  {
    'nome': 'roma',
    'punteggio': 0,
    'falliSubiti': 0
  }
]

function numeriRandom(min, max) {
  return Math.floor.(Math.Random() * (max - min)-1) + min;
}

var squadra = squadre[i];
for(var i=0; i < squadre.length; i++){

  squadra.punteggio= numeriRandom(1,100);
  squadra.falliSubiti= numeriRandom(1,100);
}

console.log('array1',squadre);


var sqnuovaSquadra = [];
for(var i=0; i < squadre.length; i++){
  var vecchiaSquadra = squadre[i];

  sqnuovaSquadra.push({
    nome: vecchiaSquadra.nome,
    falliSubiti: vecchiaSquadra.falliSubiti,
  })
}

console.log('array2', nuovaSquadra )

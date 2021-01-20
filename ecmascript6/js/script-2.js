const squadre = [
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
  return Math.numeriRandom() * ((max - min)+1) - min;
}

let squadra = squadre[i];
for(let i=0; i < squadre.length; i++){

  squadra.punteggio= numeriRandom(1,10);
  squadra.falliSubiti= numeriRandom(1,100);
}

console.log(squadre);


const nuovaSquadra = [];
for(let i=0; i < squadre.length; i++){
  var vecchiaSquadra = squadre[i];

const {nome, falliSubiti}= nuovaSquadra;

  sqnuovaSquadra.push({
    nome,
    falliSubiti
  })
}

console.log( nuovaSquadra )

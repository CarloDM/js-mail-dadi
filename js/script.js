/* 
1. variabile mail
2. array lista consentiti
3. risposta vero o falso
*/

// let eMail = prompt('la tua mail giusta può esser soltanto "pinko,pallon e io"')
let eMail = 'pallon'
let eMailCon = ['pinko', 'pallon','io']


console.log('ciao creo una variabile email', eMail);
console.log('ciao creo un array mailconsentite', eMailCon);

// devo verificare se email è presente dentro l array
// 1 prima devo spacchettare l array splittandolo

    // eMailConSplit.split(' ')
for (let i = 0; i < eMailCon.length; i++) {
  let eMailConSplit = eMailCon[i]; 
        console.log(eMailConSplit);
//  mi sono incastrato nell uguale uguale uguale -.-
    if (eMail === eMailConSplit)  {
      console.log('utente verificato!')
}
    else {
      console.log('utente non verificato')
    }
    console.log('ciclo', i)
}
// 



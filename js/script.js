/* 
1. variabile mail
2. array lista consentiti
3. risposta vero o falso
*/

let eMail = prompt('la tua mail giusta può esser soltanto "pinko,pallon e io"')
// let eMail = 'io'
let eMailCon = ['pinko', 'pallon','io']


console.log('ciao creo una variabile email', eMail);
console.log('ciao creo un array mailconsentite', eMailCon);

// devo verificare se email è presente dentro l array
// 1 prima devo spacchettare l array splittandolo

autenticato = 0;
    // eMailConSplit.split(' ')
for (let i = 0; i < eMailCon.length; i++) {
  let eMailConSplit = eMailCon[i]; 
        console.log(eMailConSplit);
//  mi sono incastrato nell uguale uguale uguale -.-
    if (eMail === eMailConSplit)  {
      console.log('utente verificato!')
      // ------esegui azione di risposta

      autenticato = 1; //<------------- 

}
    else {
      console.log('utente non verificato')
    }
    console.log('ciclo', i)
}
// 

console.log(autenticato)

if (autenticato){
  console.log('OK')
  risposte = ['verificato!','benvenuto!','sei dentro!','heila chi si rivede!!']
  R = Math.floor(Math.random() * risposte.length)
  console.log('R', R)
  utenteVerificato = risposte[R]
  message.append(utenteVerificato)
}

else {
  console.log('NO')
  risposte = ['negato!','accesso negato!','sei fuori!','chi è lei?!']
  R = Math.floor(Math.random() * risposte.length)
  console.log('R', R)
  utenteNonVerificato = risposte[R]
  message.append(utenteNonVerificato)
}

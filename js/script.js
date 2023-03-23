/* 
1. variabile mail
2. array lista consentiti
3. risposta vero o falso
*/

let eMail = 'io'
// let eMail = prompt('la tua mail giusta può esser soltanto "pinko,pallon e io"')

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
// -------------------------------------------------------------------
// ----------------------------------------------------------------
/** 
 * 1 variabile dado è un arrai di 6 numeri dallo [0 al 5]
 * 2 servono 2 dadi distinti il cui risultato va confrontato e messo  a condizione di maggiore o minore
 * 3 serve la randomizzazzione dei 2 dadi
 * 4 aggiungiere punteggio
 */

// dichiarare punteggio!
punteggioB = 0;
punteggioA = 0;

// ----------------------------------------------------

// ------------------------------trig----------
btn_lancio.addEventListener('click', function(){


  const dado = [1,2,3,4,5,6]
  console.log(dado)
  R = Math.floor(Math.random() * dado.length)
  dadoLanciato = dado[R]
  console.log(dadoLanciato)
  R2 = Math.floor(Math.random() * dado.length)
  dadoLanciato2 = dado[R2]
  console.log(dadoLanciato2)
  
      A = dadoLanciato
      B = dadoLanciato2 

  
      if (A > B) {
        console.log('a ha vinto')
        punteggioA++;
      }
      else if (A == B) {
        console.log('è pari')
      }
  
      else {
        console.log('b ha vinto')
        punteggioB++;
      }
  
      console.log( 'punti A',punteggioA)
      console.log( 'punti B',punteggioB)
      // se punteggio arriva a 6 gioco finisce
// quinde se punteggio a || b supera 6 scatta un evento
// 

if (punteggioA > 5) {
  console.log('VITTORIA!!! di a')
  // ci vuole un evento che fermi il gioco
  console.log('escape?')
  
  // ---------fine bottone----------
  document.querySelector('#btn_lancio'),
  btn_lancio.style.cssText = "display:none;"
  console.log('bottone lancio', btn_lancio);
  // --------------------------------------
}
else if (punteggioB > 5) {
  console.log('VITTORIA!!! di b')
  document.querySelector('#btn_lancio'),
  console.log('bottone lancio')

  console.log('escape?')
  
  // ---------fine bottone----------
  document.querySelector('#btn_lancio'),
  btn_lancio.style.cssText = "display:none;"
  console.log('bottone lancio', btn_lancio);
  // --------------------------------------
}

})



## CODING PROBLEM

### 1 - FOOBAR

* Scrivi un piccolo programma che stampi ogni numero da 1 a 100 su una nuova riga.
* Per ogni multiplo di 3, stampa “Foo” invece del numero.
* Per ogni multiplo di 5, stampa “Bar” invece del numero.
* Per ogni numero multiplo di 3 e 5 insieme, stampa “FooBar” invece del numero.
```shell
node ex1/foobar.js
```

### 2 - Carta, forbice e sasso

Sono un assiduo giocatore, per questo voglio giocare a “carta forbice e sasso”.
  
#### Acceptance Criteria
* Posso giocare Umano vs Computer?
* Posso giocare Computer vs Computer?
* Posso giocare una nuova partita conclusa quella precedente?
#### User Story Back - Technical Constraints
* Non è necessaria una GUI appariscente (può essere semplice)
* Non dovrebbero essere necessarie librerie o moduli esterni se non per i test
* Usa le pratiche riconosciute nell’industry dello sviluppo software
* Considera di scrivere codice estendibile. Se lo farai dovrebbe essere relativamente semplice estendere il gioco alla variante Rock, paper, scissors, lizard and Spock 
* Questo è un Minimum Viable Product: eleganza e semplicità battono una ricca lista di feature

```shell
cd ex2
npm install
npm run dev
# go to http://localhost:5173
```
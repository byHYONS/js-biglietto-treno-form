# ESERCIZIO: Calcolo Prezzo del Biglietto del Treno

>[!NOTE]
>
> Repo: js-biglietto-treno-form

#### Descrizione:
Scrivere un programma che chieda all’utente:
1. Il numero di chilometri da percorrere;
2. Età del passeggero;
3. Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
    1. il prezzo del biglietto è definito in base ai km `(0.21 € al km)`;
    2. va applicato uno sconto del `20% per i minorenni`;
    3. va applicato uno sconto del `40% per gli over 65`.

##### MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
##### MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo, come da screenshot allegato. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

## SVOLGIMENTO:
##### MILESTONE 1:
- Inserisco nell'html tre campi input per il nome `nomeUser`, i chilometri da percorrere `kmUser` e faccio selezionare l'età con un selettore `etaUser`.
- dichiarare una variabile `kmUser` per i km da percorrere tramite prompt, trasformando il valore da stringa a numero;

- dichiarare una variabile per l'età `etaUser` del passeggero tramite prompt, trasformando il valore in numero;

- andare in ascolto con `addEventListener` su campi di imput al premere del bottone submit;

- Trovare il prezzo totale del viaggio:
    1. dichiaro var prezzoKm = `0.21`;
    2. dichiaro var prezzoMinorenni = `-20%`;
    3. dichiaro var prezzoOver65 = `-40%`;

- Predisprre condizioni in base ai possibili sconti da appliccare in base all'età:
```
    IF .eta ≤ 18 
        prezzoTotale = (kilometri * prezzoKilometr) - prezzoMinorenni;
    IF ELSE eta ≥ 65
        prezzoTotale = (kilometri * prezzoKilometr) - prezzoOver65;
    ELSE
       prezzoTotale = (kilometri * prezzoKilometr) 
```

- trasformare `prezzoTotale` con un numero che restituisca solo due cifre dopo la virgola utilizzando il metodo:
```
    prezzoTotale.toFixed(2)
```
- stampo in console il risultato finale.

##### MILESTONE2:
- Realizzo un form stilizzato che dia la possibilità all'utente di visualizzare in pagina il risultato con varie info:
1. `nomeUser`;
2. `etaUser`;
3. `kmUser`;
4. `scontoUser`, con tipo di offerta applicata, se disponibile;
5. `numeroCarrozza`, generando un numero random con `Math.floor(Math.random()) * n;`;
6. `numeroBiglietto`, generando un numero random con `Math.floor(Math.random()) * n;`;
7. `prezzoFinale`, riportando il prezzo finale del biglietto.

###### FINE

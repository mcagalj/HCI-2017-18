# **Korisnička sučelja - upute za laboratorijske vježbe**

## FESB, Računarstvo, 2017/18

Osnovni cilj predmeta **Korisnička sučelja** je upoznati studente s važnim aspekatima procesa dizajna (sučelja) usmjerenog krajnjim korisnicima. Studenti će usvojene principe i heuristike (eng. _usability heuristics_) primjeniti u okviru praktičnog projekta koji će realizirati tijekom semestra. Projekt će biti zasnovan na [React JavaScript bibilioteci za izradu korisničkih sučelja](https://reactjs.org).

Na ovom GitHub repozitoriju profesor će objavljivati upute, dijelove koda, konfiguracijske skripte, i druge sugestije a sa svrhom povećanja produktivnosti studenta tijekom rada na projektu.

## Table of Contents

- [Bits of JavaScript](#bits-of-javascript)
- [Bits of React](#bits-of-react)
- [Bits of CSS Layout](#bits-of-css-layout)

## Bits of JavaScript

U direktoriju [bits-of-javascript](/bits-of-javascript) možete naći niz JavaScript datoteka koje demonstriraju neke specifičnosti JavaScript programskog jezika. Skripte možete izvoditi direktno u konzolnom prozoru preglednika, iako preporučamo da koristite [Node.js](https://nodejs.org) odnosno [`nodemon`](https://nodemon.io) aplikaciju za automatsko pokretanje istih u konzolnom prozoru vašeg operacijskog sustava.

## Bits of React

U direktoriju [bits-of-react](/bits-of-react) možete naći niz primjera React komponenti. Osim JavaScript datoteka koje opisuju pojedine komponente, u direktoriju možete naći i popratne konfiguracijske skripte (npr., `webpack.config.js` i `package.json`) koje automatiziraju i olakšavaju razvoj komponenti kao i genriranje produkcijskog koda.

Primjere iz ovog direktorija možete pokretati na nekoliko načina kako je opisano u nastavku. Prije svega trebate instalirati stabilnu verziju [Node.js-a](https://nodejs.org). Nakon uspješne instalacije testirajte `npm` aplikaciju; u komandnom prozoru izvršite `npm`. `npm` će te koristiti za instalaciju potrebnih JavaScript modula/applikacija/biblioteka kao i za pokretanje razvojnog servera.

### Koraci za pokretanje primjera

1. Nakon što ste klonirali ovaj repozitoriji (ili kopirali ovaj direktorij), u komandnom prozoru pozicionirajte se u direktorij s odgovarajućom komponentom (npr. `first-component`) i izvršite sljedeću naredbu:
    ```Bash
    npm install
    ```
    `npm` će konzultirati `package.json` datoteku te dohvatiti i instalirati sve skripte/module navedene u istoj. Nove skripte i moduli bit će spremljeni u `node_modules` direktorij.

2. U ovom koraku pokrećete razvojni web server koji će posluživati web starnicu s implementiranom komponentom. Server pokrećete sljedećom naredbom:
    ```Bash
    npm run dev-server
    ```
    Detalji vezani uz razvojni web server (npr. port, datoteke koje će posluživati, podrška za _live_ i _hot reload_ i drugo) navedeni su u konfiguracijskoj datoteci `wepack.config.js`.

3. Konačno, otvorite preferirani preglednik i u adresnoj traci unesite **localhost:3000**.

**NAPOMENA**: Ukoliko želite primjer pokrenuti bez uporabe razvojnog web servera, u koraku 2. potrebano je dati nalog za generiranje produkcijskog koda:

```Bash
npm run prod
```
    
Ova naredba će generirati `index.html` i odgovarajuće JavaScript/CSS datoteke u direktoriju `first-component/public`. Primjer sada možete pokrenuti jednostavnim otvaranjem datoteke `index.html` u odgovarajućem pregledniku.

### Primjeri

- [Jednostavna **Sign Up** forma](/bits-of-react/first-component) koja implementira neke od osnovnih Normanovih principa za dizajn interakcija (_visibility, constraint, feedback_).

- [Primjena **React Router**](/bits-of-react/react-router) skupa React komponenti pogodnih za realizaciju napredne navigacije na klijentskoj strani (_client-side routing_). Primjer pokazuje realizaciju navigacije i kontrole pristupa _privatnim_ stranicama. Za više detalja konzultirajte službene stranice React Router-a: 
    - [React Router: Learn Once, Route Anywhere](https://reacttraining.com/react-router).

- [Asinkrono dohvaćanje podataka](/bits-of-react/fetching-data)

- [Web stranica kolegija](/bits-of-react/web-page) realizirana u React-u. Uz osnovne React i ReactDOM biblioteke, koristi se i React Router za navigaciju na klijentskoj strani (_client-side routing_). Također je ažurirana `webpack.config.js` datoteka. Posebno se vodilo računa o optimiranju produkcijskog koda (kojeg možete generirati izvršavanjem `npm run prod`). _Live_ verzija stranice dostupna je na: [HCI in ReactJS](http://marjan.fesb.hr/~mcagalj/HCI/).

- [Create React App](https://github.com/facebookincubator/create-react-app). Ukoliko želite izbjeći izravnu interakciju sa alatom kao što je Webpack, možete koristiti/instalirati modul `create-react-app`. Na navedenoj stranici možete naći mnogo korisnih uputa i savjeta vezanih uz razvoj React aplikacija.

## Bits of CSS Layout

U direktoriju [bits-of-layout](/bits-of-layout) možete naći primjer korištenja CSS _Grid_ i _Flexbox_ sustava za  jednostavno pozicioniranje HTML elemenata. Primjer također demonstrira uporabu `@support` i `@media` upita. Testirajte primjer promjenom veličine prozora (_breakpoint_ za mobilnu verziju postavljen je na 400px).

U nastavku su dane skice mobilne i desktop verzije stranice koje smo realizirati primjenom navedenih tehnika.

<p align="center">
    <img src="./img/layout.png"width="500px"/>
</p>

Nekoliko zanimljivih referenci:

- [Grid by Example by Rachel Andrew](https://gridbyexample.com)

- [CSS Grid Layout by MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

- [A Complete Guide to Flexbox by CSS-TRICKS](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- [A Complete Guide to Grid by CSS-TRICKS](https://css-tricks.com/snippets/css/complete-guide-grid/)

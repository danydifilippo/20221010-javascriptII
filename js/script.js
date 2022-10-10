let dataTime = new Date();
let data = dataTime.getFullYear();
let mese = dataTime.getMonth();

function calcola(a) {
    a = new Date(a)
    let yearBirth=a.getFullYear()
    let monthBirth=a.getMonth()
    let year_ = Number(data - yearBirth);
    let age;
    if(mese<=monthBirth){
        age = year_
    } else {
        age = Number (year_-=1)
    }
    return age
}

class Persona {
    constructor (nome, cognome, dataNascita) {
    this.nome=nome;
    this.cognome=cognome;
    this.dataNascita=dataNascita;
    this.eta= Number(calcola(dataNascita));
}
}



function inserisci(a,b,c){
    a=document.getElementById('nome').value;
    b=document.getElementById('cognome').value;
    c=document.getElementById('dataNascita').value;
    let iscritto=new Persona(a,b,c);
    let iscrLista=document.querySelector('tbody');
    let row=document.createElement('tr');
    row.innerHTML=`<td>${iscritto.nome}</td><td>${iscritto.cognome}</td><td>${iscritto.dataNascita}</td><td>${iscritto.eta}</td>`
    iscrLista.appendChild(row);
}





console.log("läuft");

let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];

// console.log(edelMetallPreise);


// NAMEN
let namesArr = [];

edelMetallPreise.forEach((elt) => {
    namesArr.push(elt.name);
});
let namesArr2 = edelMetallPreise.map((elt) => {
    return elt.name;
});

console.log(namesArr);
console.log(namesArr2);



// GRAMM
let preiseArr = [];

edelMetallPreise.forEach((elt) => {
    preiseArr.push(elt.veraenderung);
});
let preiseArr2 = edelMetallPreise.map((elt) => {
    return elt.veraenderung;
});

console.log(preiseArr);
console.log(preiseArr2);



// VERÄNDERUNG
let changeArr = []

edelMetallPreise.forEach((elt) => {
    changeArr.push(elt.preiseGramEuro);
});
let changeArr2 = edelMetallPreise.map((elt) => {
    return elt.preiseGramEuro;
});

console.log(changeArr);
console.log(changeArr2);

// FITLER
let filterArr = edelMetallPreise.filter((ele) => {
    return ele.preiseGramEuro > 50;
})
console.log(filterArr);


// TABELLE
edelMetallPreise.forEach((elt3) => {
    console.log(elt3.name);
    console.log(elt3.preiseGramEuro);
    console.log(elt3.veraenderung);

const table = document.querySelector("table");

    table.innerHTML +=`
    <tr>
    <td>${elt3.name}</td>
    <td>${elt3.preiseGramEuro}</td>
    <td>${elt3.veraenderung}</td>
</tr>
`
});







// lev2_2:  Array Object sort() Singers
// Assets:
// sort()
// if else
// return

const singers = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];

sorting = (elt1, elt2) => {
    elt1.sort (
        function (a, b) {
            if (a[elt2] < b[elt2]){
                return -1;
            } else if (a[elt2] > b[elt2]){
                return 1;
            } else {
                return 0;   
            }
        }
    );
}
    
sorting(singers, "name");
console.log(singers);
console.log('Välkommen till Kortleken!');
console.log('innehåll:');
console.log('');

function slumpa(from, to) {
  return Math.floor(Math.random() * (to + 1 - from)) + from;
}

let färger = ['hjärter', 'ruter', 'spader', 'klöver'];
let kläddaKort = ['knekt', 'dam', 'kung', 'ess'];

function skrivUtKort(färg) {
  for (let i = 2; i <= 10; i++) {
    console.log(färg, i);
  }
  for (let kort of kläddaKort) {
    console.log(färg, kort);
  }
  console.log('');
}

for (let färgEnskild of färger) {
  skrivUtKort(färgEnskild);
}

function draKort() {
  let slumpFärg = färger[slumpa(0, färger.length - 1)];
  let kortNummer = slumpa(2, 14);
  let kortVärde;

  if (kortNummer === 11) {
    kortVärde = 'knekt';
  } else if (kortNummer === 12) {
    kortVärde = 'dam';
  } else if (kortNummer === 13) {
    kortVärde = 'kung';
  } else if (kortNummer === 14) {
    kortVärde = 'ess';
  } else {
    kortVärde = kortNummer;
  }

  return { färg: slumpFärg, värde: kortVärde };
}

let kort1 = draKort();
let kort2 = draKort();

console.log('Du fick kort: ' + kort1.färg + ' ' + kort1.värde);
console.log('Du fick kort: ' + kort2.färg + ' ' + kort2.värde);
console.log(" ")

if (kort1.värde === kort2.värde) {
  console.log('Du fick par');
} else if (kort1.värde > kort2.värde) {
  console.log('Kortet med högst värde är: ' + kort1.färg + ' ' + 
  kort1.värde); 
} else {
  kort1.värde < kort2.värde
  console.log('Kortet med högst värde är: ' + kort2.färg + ' ' + 
  kort2.värde); 
}
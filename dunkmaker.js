let finishes = ['One-handed', 'Two-handed', 'Scorpion'];
let finish = '';
let spins = ['', '180', '360', '540', '720'];
let spin = '';
let transfers = ['Between the legs', 'Behind the back', 'Under both', 'J-Rich'];
let transfer ='';
let dunk = '';
let dunks = [];

function createDunk(){
  spin = spins[Math.floor(Math.random()*spins.length)];
  transfer = transfers[Math.floor(Math.random()*transfers.length)];
  finish = finishes[Math.floor(Math.random()*finishes.length)];
  dunk = spin+" "+transfer+" "+finish;
  document.getElementById('dunkDisplay').innerHTML = dunk;
};

function createDunkList(){
  dunks = [];

  for (let i of spins){
    for (let j of finishes){
      dunk = i+" "+j;
      dunks.push(dunk);
    };
  };
  //for every transfer add every finish
  //for every spin add every transfer and every finish
  document.getElementById('dunkListDisplay').innerHTML = dunks.join("<br>");
};

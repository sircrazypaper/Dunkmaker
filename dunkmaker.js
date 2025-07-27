let finishes = ['One-handed', 'Two-handed', 'Scorpion'];
let finish = '';
let spins = ['', '180', '360', '540', '720'];
let spin = '';
let transfers = ['Between the legs', 'Behind the back', 'Under both', 'J-Rich'];
let transfer ='';
let dunk = '';

function createDunk(){
  spin = spins[Math.floor(Math.random()*spins.length)];
  transfer = transfers[Math.floor(Math.random()*transfers.length)];
  finish = finishes[Math.floor(Math.random()*finishes.length)];
  dunk = spin+" "+transfer+" "+finish;
  document.getElementById('dunkDisplay').innerHTML = dunk;
}

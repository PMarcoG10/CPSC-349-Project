// const clock = document.querySelector('.digital');

//assigning time values to constants 
const tick = () => {
  const now = new Date();
  let h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  let am_pm = 'AM';

  var today = new Date();
  var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

//defining html for digital clock
  const html = `
  <center><span>${date}</span></center>
  <span>${h}</span> : 
  <span>${m}</span> : 
  <span>${s}</span>
  <span class="ampm">${am_pm}</span>
  `; 

// If you didn't wanted to display the seconds then you can remove <span>${s}</span>


//printing html code inside div.clock
document.querySelector('.digital').innerHTML = html;
};

//refreshing clock every 1 second
setInterval(tick, 1000);
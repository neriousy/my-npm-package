let cookie = document.querySelector('.cookie');
let onClickAmount = 1.
let currentAmount = 0;
let currentAmountHTML = document.querySelector('.currentAmount');
let perSecondAmount = 0.;
let perSecondAmountHTML = document.querySelector('.perSecondAmount');

cookie.addEventListener('click', function(){
  currentAmount += (1 + (0.1 * perSecondAmount))
  currentAmountHTML.innerHTML = Math.round(currentAmount * 100) / 100;
});


let upgClick = document.querySelector('.upgClick');
let upgClickCost = 1.;
let lvlClick = 1;
let lvlClickHTML = document.querySelector('.lvlClick');
let upgClickCostHTML = document.querySelector('.cost0');
let perClickAmount = document.querySelector('.perClickAmount');



let upg1 = document.querySelector('.upg1');
let perSecond1 = 0.1;
let upg1Cost = 10;
let upg1CostHTML = document.querySelector('.cost1');
let lvl1 = 0;
let lvl1HTML = document.querySelector('.lvl1');
let generate1 = 0;
let generate1HTML = document.querySelector('.generateValue1');


upg1.addEventListener('click', function(){
  if((currentAmount - upg1Cost) < 0){
    alert("Masz za mało ciasteczek");
    return;
  }

  currentAmount = Math.round((currentAmount - upg1Cost) * 100) / 100;
  currentAmountHTML.innerHTML = currentAmount;

  lvl1++;
  lvl1HTML.innerHTML = lvl1;

  upg1Cost = Math.round((upg1Cost + (0.3 * upg1Cost))* 100) / 100;
  upg1CostHTML.innerHTML = upg1Cost;

  generate1 += perSecond1;
  generate1HTML.innerHTML = generate1;

  perSecondAmount += perSecond1;
  console.log(perSecondAmount);
  perSecondAmountHTML.innerHTML = perSecondAmount;
});


let upg2 = document.querySelector('.upg2');
let perSecond2 = 1;
let upg2Cost = 100;
let upg2CostHTML = document.querySelector('.cost2');
let lvl2 = 0;
let lvl2HTML = document.querySelector('.lvl2');
let generate2 = 0;
let generate2HTML = document.querySelector('.generateValue2');



upg2.addEventListener('click', function(){
  if((currentAmount - upg2Cost) < 0){
    alert("Masz za mało ciasteczek");
    return;
  }

  currentAmount = Math.round((currentAmount - upg2Cost) * 100) / 100;
  currentAmountHTML.innerHTML = currentAmount;

  lvl2++;
  lvl2HTML.innerHTML = lvl2;

  generate2 += perSecond2;
  generate2HTML.innerHTML = generate2;

  upg2Cost = Math.round((upg2Cost + (0.3 * upg2Cost))* 100) / 100;
  upg2CostHTML.innerHTML = upg2Cost;

  perSecondAmount += perSecond2;
  perSecondAmountHTML.innerHTML = perSecondAmount;
});


let upg3 = document.querySelector('.upg3');
let perSecond3 = 5;
let upg3Cost = 1000;
let upg3CostHTML = document.querySelector('.cost3');
let lvl3 = 0;
let lvl3HTML = document.querySelector('.lvl3');
let generate3 = 0;
let generate3HTML = document.querySelector('.generateValue3');


upg3.addEventListener('click', function(){
  if((currentAmount - upg3Cost) < 0){
    alert("Masz za mało ciasteczek");
    return;
  }

  currentAmount = Math.round((currentAmount - upg3Cost) * 100) / 100;
  currentAmountHTML.innerHTML = currentAmount;

  lvl3++;
  lvl3HTML.innerHTML = lvl3;

  generate3 += perSecond3;
  generate3HTML.innerHTML = generate3;


  upg3Cost = Math.round((upg3Cost + (0.3 * upg3Cost))* 100) / 100;
  upg3CostHTML.innerHTML = upg3Cost;

  perSecondAmount += perSecond3;
  perSecondAmountHTML.innerHTML = perSecondAmount;
});



let upg4 = document.querySelector('.upg4');
let perSecond4 = 10;
let upg4Cost = 5000;
let upg4CostHTML = document.querySelector('.cost4');
let lvl4 = 0;
let lvl4HTML = document.querySelector('.lvl4');
let generate4 = 0;
let generate4HTML = document.querySelector('.generateValue4');


upg4.addEventListener('click', function(){
  if((currentAmount - upg4Cost) < 0){
    alert("Masz za mało ciasteczek");
    return;
  }

  currentAmount = Math.round((currentAmount - upg4Cost) * 100) / 100;
  currentAmountHTML.innerHTML = currentAmount;

  lvl4++;
  lvl4HTML.innerHTML = lvl4;

  generate4 += perSecond4;
  generate4HTML.innerHTML = generate4;

  upg4Cost = Math.round((upg4Cost + (0.3 * upg4Cost))* 100) / 100;
  upg4CostHTML.innerHTML = upg4Cost;

  perSecondAmount += perSecond4;
  perSecondAmountHTML.innerHTML = perSecondAmount;
});



let upg5 = document.querySelector('.upg5');
let perSecond5 = 100;
let upg5Cost = 10000;
let upg5CostHTML = document.querySelector('.cost5');
let lvl5 = 0;
let lvl5HTML = document.querySelector('.lvl5');
let generate5 = 0;
let generate5HTML = document.querySelector('.generateValue5');



upg5.addEventListener('click', function(){
  if((currentAmount - upg5Cost) < 0){
    alert("Masz za mało ciasteczek");
    return;
  }

  currentAmount = Math.round((currentAmount - upg5Cost) * 100) / 100;
  currentAmountHTML.innerHTML = currentAmount;

  lvl5++;
  lvl5HTML.innerHTML = lvl5;

  generate5 += perSecond5;
  generate5HTML.innerHTML = generate5;

  upg5Cost = Math.round((upg5Cost + (0.3 * upg5Cost))* 100) / 100;
  upg5CostHTML.innerHTML = upg5Cost;

  perSecondAmount += perSecond5;
  perSecondAmountHTML.innerHTML = perSecondAmount;
});







function updateAmount(){
  currentAmount += perSecondAmount;
  currentAmount = Math.round(currentAmount * 100) / 100;
  currentAmountHTML.innerHTML = currentAmount;
}


setInterval(updateAmount, 1000);
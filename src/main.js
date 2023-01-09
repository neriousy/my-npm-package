//

let onClickAmount = 1.
let currentAmount = 0;
let perSecondAmount = 0.;;
let perSecondUpg = [0.1, 1, 5, 10, 100];
let upgCosts = [10, 100, 1000, 5000, 10000];
let levels = [0, 0, 0, 0, 0];
let generates = [0, 0, 0, 0, 0];

let cookie = document.querySelector('.cookie');
let perClickAmountHTML = document.querySelector('.perClickAmount');
let currentAmountHTML = document.querySelector('.currentAmount');
let perSecondAmountHTML = document.querySelector('.perSecondAmount');


let upg1 = document.querySelector('.upg1');
let upg1CostHTML = document.querySelector('.cost1');
let lvl1HTML = document.querySelector('.lvl1');
let generate1HTML = document.querySelector('.generateValue1');


upg1.addEventListener('click', function(){
  if((currentAmount - upgCosts[0]) < 0){
    alert("Masz za mało ciasteczek");
    return;
  }
  currentAmount = Math.round((currentAmount - upgCosts[0]) * 100) / 100;
  levels[0]++;
  upgCosts[0] = Math.round((upgCosts[0] + (0.3 * upgCosts[0]))* 100) / 100;
  generates[0] += perSecondUpg[0];
  perSecondAmount += perSecondUpg[0];

  updateUI();
});


let upg2 = document.querySelector('.upg2');
let upg2CostHTML = document.querySelector('.cost2');
let lvl2HTML = document.querySelector('.lvl2');
let generate2HTML = document.querySelector('.generateValue2');



upg2.addEventListener('click', function(){
  if((currentAmount - upgCosts[1]) < 0){
    alert("Masz za mało ciasteczek");
    return;
  }

  currentAmount = Math.round((currentAmount - upgCosts[1]) * 100) / 100;
  levels[1]++;
  upgCosts[1] = Math.round((upgCosts[1] + (0.3 * upgCosts[1]))* 100) / 100;
  generates[1] += perSecondUpg[1];
  perSecondAmount += perSecondUpg[1];

  updateUI();
});


let upg3 = document.querySelector('.upg3');
let upg3CostHTML = document.querySelector('.cost3');
let lvl3HTML = document.querySelector('.lvl3');
let generate3HTML = document.querySelector('.generateValue3');


upg3.addEventListener('click', function(){
  if((currentAmount - upgCosts[2]) < 0){
    alert("Masz za mało ciasteczek");
    return;
  }

  currentAmount = Math.round((currentAmount - upgCosts[2]) * 100) / 100;
  levels[2]++;
  upgCosts[2] = Math.round((upgCosts[2] + (0.3 * upgCosts[2]))* 100) / 100;
  generates[2] += perSecondUpg[2];
  perSecondAmount += perSecondUpg[2];

  updateUI();
});



let upg4 = document.querySelector('.upg4');
let upg4CostHTML = document.querySelector('.cost4');
let lvl4HTML = document.querySelector('.lvl4');
let generate4HTML = document.querySelector('.generateValue4');


upg4.addEventListener('click', function(){
  if((currentAmount - upgCosts[3]) < 0){
    alert("Masz za mało ciasteczek");
    return;
  }

  currentAmount = Math.round((currentAmount - upgCosts[3]) * 100) / 100;
  levels[3]++;
  upgCosts[3] = Math.round((upgCosts[3] + (0.3 * upgCosts[3]))* 100) / 100;
  generates[3] += perSecondUpg[3];
  perSecondAmount += perSecondUpg[3];

  updateUI();
});



let upg5 = document.querySelector('.upg5');
let upg5CostHTML = document.querySelector('.cost5');
let lvl5HTML = document.querySelector('.lvl5');
let generate5HTML = document.querySelector('.generateValue5');



upg5.addEventListener('click', function(){
  if((currentAmount - upgCosts[4]) < 0){
    alert("Masz za mało ciasteczek");
    return;
  }

  currentAmount = Math.round((currentAmount - upgCosts[4]) * 100) / 100;
  levels[4]++;
  upgCosts[4] = Math.round((upgCosts[4] + (0.3 * upgCosts[4]))* 100) / 100;
  generates[4] += perSecondUpg[4];
  perSecondAmount += perSecondUpg[4];

  updateUI();
});







function updateAmount(){
  currentAmount += perSecondAmount;
  currentAmount = Math.round(currentAmount * 100) / 100;
  currentAmountHTML.innerHTML = currentAmount;

  updateUI();
}

function updateUI(){
  currentAmountHTML.innerHTML = currentAmount.toFixed(2);
  perSecondAmountHTML.innerHTML = perSecondAmount.toFixed(2);

  lvl1HTML.innerHTML = levels[0];
  upg1CostHTML.innerHTML = upgCosts[0].toFixed(2);
  generate1HTML.innerHTML = generates[0].toFixed(2);

  lvl2HTML.innerHTML = levels[1];
  upg2CostHTML.innerHTML = upgCosts[1].toFixed(2);
  generate2HTML.innerHTML = generates[1].toFixed(2);

  lvl3HTML.innerHTML = levels[2]
  upg3CostHTML.innerHTML = upgCosts[2].toFixed(2);
  generate3HTML.innerHTML = generates[2].toFixed(2);

  lvl4HTML.innerHTML = levels[3]
  upg4CostHTML.innerHTML = upgCosts[3].toFixed(2);
  generate4HTML.innerHTML = generates[3].toFixed(2);

  
  lvl5HTML.innerHTML = levels[4]
  upg5CostHTML.innerHTML = upgCosts[4].toFixed(2);
  generate5HTML.innerHTML = generates[4].toFixed(2);

  
  onClickAmount = 1 + (0.3 * perSecondAmount);
  perClickAmountHTML.innerHTML = onClickAmount.toFixed(2);
  
}

cookie.addEventListener('click', function(){
  currentAmount += (1 + (0.1 * perSecondAmount))
  currentAmountHTML.innerHTML = Math.round(currentAmount * 100) / 100;

  updateAmount();
});



setInterval(updateAmount, 1000);
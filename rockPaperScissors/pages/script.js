

// 



// function playRound (element)
// {
    
//     }
//   leJouer.innerHTML = element.innerHTML;
//   leJouer.classList.add('iconed');
//   leJouer.classList.remove('choix');
//   lOrdinateur.innerHTML = choixDOrdinateur().innerHTML;
//   lOrdinateur.classList.add('iconed');
//   lOrdinateur.classList.remove('choix');
//   const papier = leDeployer[0].innerHTML;
//   const pierre = leDeployer[1].innerHTML;
//   const ciseaux = leDeployer[2].innerHTML;
  
 
  
//   };

// leDeployer.forEach(item => item.addEventListener('click', ()=> playRound(item)))
const lesChoix = document.querySelectorAll('.choix');
const leJouer = document.getElementById('player');
const comp = document.querySelector('.comp');
const jouse = document.querySelector('.jouse');
const lOrdinateur = document.getElementById('computer');
const counterplayer = document.querySelector(".counter1");
const countercomp = document.querySelector('.counter2');
const lobjet = {
    player:0,
    computer:0
}

function playRound (e){
const jouseChoix = e.target.outerHTML;
const ordChoix = choixDOrdinateur().outerHTML;
leJouer.innerHTML=jouseChoix;
lOrdinateur.innerHTML= ordChoix;
const leGagnant = gagner(jouseChoix,ordChoix);
countercomp.innerHTML=lobjet.computer;
counterplayer.innerHTML=lobjet.player;

}
function choixDOrdinateur () {
   return lesChoix[Math.floor(Math.random() * lesChoix.length)];
};
function gagner(a,b){
    const ciseaux=lesChoix[2].outerHTML;
    const papier=lesChoix[0].outerHTML;
    const pierre=lesChoix[1].outerHTML;
    let winner;
    switch (true)
  {
   case a===b:
   comp.innerHTML = "<div class='outcome'>it's a draw</div>";
   jouse.innerHTML = "<div class='outcome'>it's a draw</div>";
   break;
   case b=== ciseaux && a === pierre:
      jouse.innerHTML =
       '<div class="win"><img src="../images/black-24dp (2)/2x/outline_done_black_24dp.png"></div>';
      comp.innerHTML =
       '<div class="loss"><img src="../images/black-24dp/2x/outline_dangerous_black_24dp.png"></div>';
       showWinner('player')
       break;
   case b=== ciseaux && a === papier:
      comp.innerHTML =
       '<div class="win"><img src="../images/black-24dp (2)/2x/outline_done_black_24dp.png"></div>';
       jouse.innerHTML =
       '<div class="loss"><img src="../images/black-24dp/2x/outline_dangerous_black_24dp.png"></div>';
       showWinner('computer');
       break;
   case b=== pierre && a === ciseaux:
      comp.innerHTML =
       '<div class="win"><img src="../images/black-24dp (2)/2x/outline_done_black_24dp.png"></div>';
      jouse.innerHTML =
       '<div class="loss"><img src="../images/black-24dp/2x/outline_dangerous_black_24dp.png"></div>';
       showWinner('computer');
       break;
   case b=== pierre && a === papier:
      jouse.innerHTML =
       '<div class="win"><img src="../images/black-24dp (2)/2x/outline_done_black_24dp.png"></div>';
      comp.innerHTML =
       '<div class="loss"><img src="../images/black-24dp/2x/outline_dangerous_black_24dp.png"></div>';
       showWinner('player')
       break;
   case b=== papier && a === ciseaux:
      jouse.innerHTML =
       '<div class="win"><img src="../images/black-24dp (2)/2x/outline_done_black_24dp.png"></div>';
      comp.innerHTML =
       '<div class="loss"><img src="../images/black-24dp/2x/outline_dangerous_black_24dp.png"></div>';
       showWinner('player');
       break;
   case b=== papier && a === pierre:
      comp.innerHTML =
       '<div class="win"><img src="../images/black-24dp (2)/2x/outline_done_black_24dp.png"></div>';
      jouse.innerHTML =
       '<div class="loss"><img src="../images/black-24dp/2x/outline_dangerous_black_24dp.png"></div>';
       showWinner('computer');
       break;
  }
}
function showWinner (a) {
    if (a==='player')
    {
        lobjet.player++;

    }
    else 
    {
        lobjet.computer++;
    }
}

lesChoix.forEach(choix =>choix.addEventListener('click',playRound))
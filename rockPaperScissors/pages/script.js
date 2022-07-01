

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
const lesChoix = document.querySelectorAll('.choix');
const leJouer = document.getElementById('player');
const comp = document.querySelector('.comp');
const jouse = document.querySelector('.jouse');
const lOrdinateur = document.getElementById('computer');
const counterplayer = document.querySelector(".counter1");
const countercomp = document.querySelector('.counter2');
const anouncerhtml = document.querySelector('.anouncer')
const winner = document.querySelector('.winner')
const draw = document.querySelector('.drawcontainer')
const footer = document.querySelector('.footer');
const lobjet = {
    player:0,
    computer:0
}

function playRound (e){
const jouseChoix = e.target.outerHTML;
const ordChoix = choixDOrdinateur().outerHTML;
leJouer.innerHTML=jouseChoix;
lOrdinateur.innerHTML= ordChoix;
gagner(jouseChoix,ordChoix);
Winnerinh ();
reset ();
countercomp.innerHTML=lobjet.computer;
counterplayer.innerHTML= lobjet.player;
}
function choixDOrdinateur () {
   return lesChoix[Math.floor(Math.random() * lesChoix.length)];
};
function gagner(a,b){
    const ciseaux=lesChoix[2].outerHTML;
    const papier=lesChoix[0].outerHTML;
    const pierre=lesChoix[1].outerHTML;
    switch (true)
  {
   case a===b:
   comp.innerHTML = "";
   jouse.innerHTML = "";
   draw.innerHTML= '<div class="draw">It\'s a draw</div>'
   break;
   case b=== ciseaux && a === pierre:
      jouse.innerHTML =
       '<div class="win"><img src="../images/black-24dp (2)/2x/outline_done_black_24dp.png"></div>';
      comp.innerHTML =
       '<div class="loss"><img src="../images/black-24dp/2x/outline_dangerous_black_24dp.png"></div>';
       showWinner('player');
       draw.innerHTML= "";
       break;
   case b=== ciseaux && a === papier:
      comp.innerHTML =
       '<div class="win"><img src="../images/black-24dp (2)/2x/outline_done_black_24dp.png"></div>';
       jouse.innerHTML =
       '<div class="loss"><img src="../images/black-24dp/2x/outline_dangerous_black_24dp.png"></div>';
       showWinner('computer');
       draw.innerHTML= "";
       break;
   case b=== pierre && a === ciseaux:
      comp.innerHTML =
       '<div class="win"><img src="../images/black-24dp (2)/2x/outline_done_black_24dp.png"></div>';
      jouse.innerHTML =
       '<div class="loss"><img src="../images/black-24dp/2x/outline_dangerous_black_24dp.png"></div>';
       showWinner('computer');
       draw.innerHTML= "";
       break;
   case b=== pierre && a === papier:
      jouse.innerHTML =
       '<div class="win"><img src="../images/black-24dp (2)/2x/outline_done_black_24dp.png"></div>';
      comp.innerHTML =
       '<div class="loss"><img src="../images/black-24dp/2x/outline_dangerous_black_24dp.png"></div>';
       draw.innerHTML="";
       showWinner('player')
       break;
   case b=== papier && a === ciseaux:
      jouse.innerHTML =
       '<div class="win"><img src="../images/black-24dp (2)/2x/outline_done_black_24dp.png"></div>';
      comp.innerHTML =
       '<div class="loss"><img src="../images/black-24dp/2x/outline_dangerous_black_24dp.png"></div>';
       draw.innerHTML= "";
       showWinner('player');
       break;
   case b=== papier && a === pierre:
      comp.innerHTML =
       '<div class="win"><img src="../images/black-24dp (2)/2x/outline_done_black_24dp.png"></div>';
      jouse.innerHTML =
       '<div class="loss"><img src="../images/black-24dp/2x/outline_dangerous_black_24dp.png"></div>';
       draw.innerHTML= "";
       showWinner('computer');
       break;
  }
}
function showWinner (a) {
    if (a==='player')
    {
        lobjet.player++;
        

    }
    else if (a==='computer')
    {
        lobjet.computer++;
        
    }
   
}
function Winnerinh ()
{ const modalId = document.getElementById('modal-content')
    if (lobjet.player===5)
    {
        modal.classList.remove('hidden');
     modalId.innerHTML='<div class="holder"><img src="./images/happy.png" alt="emoji">You win</div>'
    }
    else if (lobjet.computer===5)
    {modal.classList.remove('hidden');
        modalId.innerHTML='<div class="holder"><img src="./images/disappointed.png" alt="emoji">YOU LOSE</div>'
    }
}
function reset ()
{
    
 if (lobjet.computer===5||lobjet.player===5)
 {
 
 lobjet.computer=0;
 lobjet.player=0;
 jouse.innerHTML ='';
 comp.innerHTML ='';
 leJouer.innerHTML='';
lOrdinateur.innerHTML= '';

 }
 
}
const Reset = document.getElementById('reset');
const modal = document.querySelector('.modal');
Reset.addEventListener('click',
()=> modal.classList.add('hidden'))

lesChoix.forEach(choix =>choix.addEventListener('click',playRound))
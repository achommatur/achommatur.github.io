const lesChoix = document.querySelectorAll('.choix');
const leDeployer = Array.from(lesChoix);
const leJouer = document.getElementById('player')
const lOrdinateur = document.getElementById('computer');
const comp = document.querySelector('.comp');
const jouse = document.querySelector('.jouse');
const choixDOrdinateur = function () 
{
   return leDeployer[Math.floor(Math.random() * leDeployer.length)];
};

function playRound (element)
{
  leJouer.innerHTML = element.innerHTML;
  leJouer.classList.add('iconed');
  leJouer.classList.remove('choix');
  lOrdinateur.innerHTML = choixDOrdinateur().innerHTML;
  lOrdinateur.classList.add('iconed');
  lOrdinateur.classList.remove('choix');
  const papier = leDeployer[0].innerHTML;
  const pierre = leDeployer[1].innerHTML;
  const ciseaux = leDeployer[2].innerHTML;
  switch (true)
  {
   case lOrdinateur.innerHTML===leJouer.innerHTML:
   comp.innerHTML = "<div class='outcome'>=</div>";
   jouse.innerHTML = "<div class='outcome'>=</div>";
   break;
   case lOrdinateur.innerHTML=== ciseaux && leJouer.innerHTML === pierre:
      jouse.innerHTML =
       '<div class="win"><img src="../images/black-24dp (2)/2x/outline_done_black_24dp.png"></div>';
      comp.innerHTML =
       '<div class="loss"><img src="../images/black-24dp/2x/outline_dangerous_black_24dp.png"></div>';
       break;
   case lOrdinateur.innerHTML=== ciseaux && leJouer.innerHTML === papier:
      comp.innerHTML =
       '<div class="win"><img src="../images/black-24dp (2)/2x/outline_done_black_24dp.png"></div>';
       jouse.innerHTML =
       '<div class="loss"><img src="../images/black-24dp/2x/outline_dangerous_black_24dp.png"></div>';
       break;
   case lOrdinateur.innerHTML=== pierre && leJouer.innerHTML === ciseaux:
      comp.innerHTML =
       '<div class="win"><img src="../images/black-24dp (2)/2x/outline_done_black_24dp.png"></div>';
      jouse.innerHTML =
       '<div class="loss"><img src="../images/black-24dp/2x/outline_dangerous_black_24dp.png"></div>';
       break;
   case lOrdinateur.innerHTML=== pierre && leJouer.innerHTML === papier:
      jouse.innerHTML =
       '<div class="win"><img src="../images/black-24dp (2)/2x/outline_done_black_24dp.png"></div>';
      comp.innerHTML =
       '<div class="loss"><img src="../images/black-24dp/2x/outline_dangerous_black_24dp.png"></div>';
       break;
   case lOrdinateur.innerHTML=== papier && leJouer.innerHTML === ciseaux:
      jouse.innerHTML =
       '<div class="win"><img src="../images/black-24dp (2)/2x/outline_done_black_24dp.png"></div>';
      comp.innerHTML =
       '<div class="loss"><img src="../images/black-24dp/2x/outline_dangerous_black_24dp.png"></div>';
       break;
   case lOrdinateur.innerHTML=== papier && leJouer.innerHTML === pierre:
      comp.innerHTML =
       '<div class="win"><img src="../images/black-24dp (2)/2x/outline_done_black_24dp.png"></div>';
      jouse.innerHTML =
       '<div class="loss"><img src="../images/black-24dp/2x/outline_dangerous_black_24dp.png"></div>';
       break;
  }
  };

leDeployer.forEach(item => item.addEventListener('click', ()=> playRound(item)))
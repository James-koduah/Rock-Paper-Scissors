var answer = '';
var pl=0;//pl is the player score(gets updated every time the game is played).
var cu=0;//cu is the computer score(gets updated every time the game is played).

//For when you choose the button Scissors (player display changes).
function scissors(){
    let ii= document.getElementById('do');
    let ee= document.getElementById('last');
    let tt= document.getElementById('scissors');
    let dis= document.getElementById('display');
    ii.innerHTML = tt.innerHTML;
    
    ee.innerHTML= 'Are you sure you want scissors';
    dis.className= tt.className;
    answer='scissors';
}

//For when you choose the button Paper (player display changes).
function paper(){
    let uu=document.getElementById('do');
    let ee= document.getElementById('last');
    let yy= document.getElementById('paper');
    let dis= document.getElementById('display');
    uu.innerHTML = yy.innerHTML;
    ee.innerHTML= 'Are you sure you want paper';
    dis.className=yy.className;
    answer='paper';
}

//For when you choose the button Rock (player display changes).
function rock(){
    let uu=document.getElementById('do');
    let ee= document.getElementById('last');
    let yy= document.getElementById('rock');
    let dis= document.getElementById('display');
    uu.innerHTML = yy.innerHTML;
    ee.innerHTML= 'Are you sure you want rock';
    dis.className=yy.className;
    answer='rock';
}




var tt=['rock','paper','scissors'];//tt contains the choices computer has.

//When shuffle is called it shuffle's the array.
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

//When the play button is pressed.
function final(){
    
    let nn=document.getElementById('vvv');
    let computer =document.getElementById('display2');
    let ii= document.getElementById('to');
    let play= document.getElementById('player');
    let com= document.getElementById('playerii');
    

    let rr= document.getElementById('rock');
    let ss= document.getElementById('scissors');
    let pp= document.getElementById('paper');
    let shuf=shuffle(tt);
    if(answer==''){return nn.innerHTML='PLAY'};

    if(shuf[1]=='rock'){
        ii.innerHTML=rr.innerHTML;
        computer.className=rr.className;
        computer.animate([
            // keyframes
            { transform: 'translateX(0px)' },
            { transform: 'translateX(-15%)' },
            { transform: 'translateX(15%)'}
          ], {
            // timing options
            duration: 10,
            iterations: 60
          })
        
    }else if(tt[1]=='paper'){
        ii.innerHTML=pp.innerHTML;
        computer.className=pp.className;
        computer.animate([
            // keyframes
            { transform: 'translateX(0px)' },
            { transform: 'translateX(-15%)' },
            { transform: 'translateX(15%)'}
          ], {
            // timing options
            duration: 10,
            iterations: 60
          })
          
    }else if(tt[1]=='scissors'){
        ii.innerHTML=ss.innerHTML;
        computer.className=ss.className;
        computer.animate([
            // keyframes
            { transform: 'translateX(0px)' },
            { transform: 'translateX(-15%)' },
            { transform: 'translateX(15%)'}
          ], {
            // timing options
            duration: 10,
            iterations: 60
          })
    }
    //NOT WORKING. REVEIW
    if(answer==shuf[1]){nn.innerHTML='DRAW! PLAY AGAIN';
    pl+=0;cu+=0;}
    if(answer=='rock'&&shuf[1]==='scissors'){
         nn.innerHTML='SMASHED! YOU WIN';
         pl+=1;cu+=0;
    }
    if(answer=='paper'&&shuf[1]==='rock'){
         nn.innerHTML='WRAPED HIM! YOU WIN';
         pl+=1;cu+=0;
    }
    if(answer=='scissors'&&shuf[1]==='paper'){
         nn.innerHTML='CUT INTO PECIES! YOU WIN';
         pl+=1;cu+=0;
    }
    if(answer=='rock'&&shuf[1]==='paper'){
         nn.innerHTML='HAHA! YOU LOSE';
         pl+=0;cu+=1;
    }
    if(answer=='paper'&&shuf[1]==='scissors'){
         nn.innerHTML='CUT! YOU LOSE';
         pl+=0;cu+=1;
    }
    if(answer=='scissors'&&shuf[1]==='rock'){
         nn.innerHTML='😭😭😭😭😭😭 <br> AWW! YOU LOSE';
         pl+=0;cu+=1;
    }
   
     play.innerHTML=pl;
     com.innerHTML=cu;
}




/**Idea for another project.
 Make a webpage that generates random quotes.
 When a button is pressed a new quote is shown on the screen.
 use the shuffle function in this project.
 also make sure that the whole body changes color when a new text is brought on screen
 you can refer to freeCodeCamp and see their project that is similar to this. 
 */
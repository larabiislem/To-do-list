
let T=[];
let k=0;
console.log('hii');
function Delate() {
  
  
   console.log("hhhh");
   let text='';
   for (let i = 0; i < T.length; i++) {
      
      text = text + '<p>'+'<span class="num">'+(i+1)+'</span>'+'<span class="T">'+T[i].Tache+'</span>'+'<span class="ss">'+T[i].date+'</span>'+'<button class="D" onclick="T.splice('+i+','+1+'); Delate();"> Delate </button>' +'<\p>';
      
   }
   document.querySelector('.display').innerHTML=text;
}

function Add() {
  
     let Tache= document.querySelector('.Tache').value ;
     let date= document.querySelector('.date').value;
    T.push({Tache , date});
     k=0;
    let text='';
    for (let i = 0; i < T.length; i++) {

          k=i;
       text = text + '<p>'+'<span class="num">'+(i+1)+'</span>'+'<span class="T">'+T[i].Tache+'</span>'+'<span class="ss">'+T[i].date+'</span>'+'<button class="D" onclick="console.log('+i+');  T.splice('+i+','+1+'); Delate();"> Delate </button>'+'<\p>';

        
    }
    document.querySelector('.display').innerHTML=text;
}




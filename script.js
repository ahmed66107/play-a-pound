let image = document.getElementById('coining')
let startbutton = document.getElementById('startbutton')
let b1 = document.getElementById('b1')
let b2 = document.getElementById('b2')
let result = document.getElementById('scrron')
let answer2 = document.getElementById('answer')
let coinsond = document.getElementById('coinsond')
let  correctsond = document.getElementById('correctsond')
let wrongsond = document.getElementById('wrongsond')

let choice = null;
let score = 0;
image.src = "coin.png";
b1.disabled = true;
b2.disabled = true;

startbutton.addEventListener('click', start);

function start() {
    coinsond.play()
    startbutton.disabled = true;
    image.style.transition = '0.2s';
    image.style.transform ='rotateY(0deg)';
    image.src = 'coin.png';
    answer2.innerText = ''
    let x = 1;
 let i =   setInterval(function(){
        image.style.transform =`rotateY( ${x * 180}deg)`;
        x++;
    }, 200);
setTimeout(function(){
    clearInterval(i);
    b1.disabled = false;
    b2.disabled= false;
},2000);
};
b1.addEventListener('click',() => makechoice('king'))
b2.addEventListener('click',() => makechoice('text'))

function makechoice(x){
b1.disabled = true;
b2.disabled = true

let answer = Math.random()<0.5 ? 'king':'text';

if(answer == 'king'){
    image.src = 'king.jpg';
} else{
    image.src = 'text.jpeg'; 
}
 
if(answer === x){
    answer2.innerText ='your win';
    answer2.style.color = 'green'
    correctsond.play()
}else{
    answer2.innerText ='your lose';
    answer2.style.color = 'red'
    wrongsond.play()
}
startbutton.disabled = false
}

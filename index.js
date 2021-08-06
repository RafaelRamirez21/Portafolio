const open=document.querySelector('.hamburger');
const closeX=document.querySelectorAll('.close__x');
var close=document.querySelector('.close__x');
const nav=document.querySelectorAll('.nav__menu');
const hiddeButton=document.querySelectorAll('.bx-menu');
const matchOne=document.getElementById('ax');
const matchTwo=document.getElementById('bx');
const matchThree=document.getElementById('cx');
const matchFour=document.getElementById('dx');


console.log(hiddeButton)
open.addEventListener("click", () => {
    nav.forEach(nav_el=>nav_el.classList.add('nav__visible'))
    hiddeButton.forEach(av_el=>av_el.classList.remove('bx-menu'))
    closeX.forEach(av_el=>av_el.classList.add('open__x'))
});
close.addEventListener("click", () => {
    closeWindow()
});

// typing
var string = ["const geek={","name: 'Rafael',","brief:'Pug lover and technophile',","location:'Living in Colombia'};"];
let j=1;
var array=[]
var array2=[]

for (let i of string){
    var str=i.split("")
    array.push(str)
    let el=document.getElementById(`str${j}`)
    
    array2.push(el)
    j+=1;
}

for (let i=0;array.length>i;i++){
    console.log(i)
    animate()

    function animate() {
        array[i].length > 0 ? array2[i].innerHTML += array[i].shift() : clearTimeout(running);
        if (i===0){
            var running = setTimeout(animate, 70);
        }else if(i==1){
            var running = setTimeout(animate, 100);
        }else{
            var running = setTimeout(animate, 120);
        }     
    };

}

function closeWindow(){
    nav.forEach(nav_el=>nav_el.classList.remove('nav__visible'))
    hiddeButton.forEach(av_el=>av_el.classList.add('bx-menu'))
    closeX.forEach(av_el=>av_el.classList.remove('open__x'))
};
    

matchOne.addEventListener("click", () => {
        closeWindow()
    });
matchTwo.addEventListener("click", () => {
        closeWindow()
    });
matchThree.addEventListener("click", () => {
        closeWindow()
    });
matchFour.addEventListener("click", () => {
        closeWindow()
    });





// if (window.matchMedia("(min-width: 800px)").matches) {
//     match.addEventListener("click", () => {
//         nav.forEach(nav_el=>nav_el.classList.remove('nav__visible'))
//         hiddeButton.forEach(av_el=>av_el.classList.add('bx-menu'))
//         closeX.forEach(av_el=>av_el.classList.remove('open__x'))
//     });
//     /* La pantalla tiene al menos 400 píxeles de ancho */
//   } else {
//     /* La pantalla tiene menos de 400 píxeles de ancho */
//   }
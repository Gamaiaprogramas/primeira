const Comentarios = document.querySelector('#comentario')
const fechar = document.querySelector('#novo')
const com1 = document.querySelector('#Coment1')
const com2 = document.querySelector('#Coment2')
const com3 = document.querySelector('#Coment3')
const com4 = document.querySelector('#Coment4')
const b1 = document.querySelector('#button1')
const b2 = document.querySelector('#button2')
const b3 = document.querySelector('#button3')
const b4 = document.querySelector('#button4')
Comentarios.style.display= 'none';

b1.addEventListener('click', but1)
b2.addEventListener('click', but2)
b3.addEventListener('click', but3)
b4.addEventListener('click', but4)
fechar.addEventListener('click', close)

function but1(){
    com1.style.display='flex'
    Comentarios.style.display ='flex'
    com2.style.display= 'none'
    com3.style.display= 'none'
    com4.style.display= 'none'
}
function but2(){
    com2.style.display='flex'
    Comentarios.style.display ='flex'
    com1.style.display= 'none'
    com3.style.display= 'none'
    com4.style.display= 'none'
}
function but3(){
    com3.style.display='flex'
    Comentarios.style.display ='flex'
    com2.style.display= 'none'
    com1.style.display= 'none'
    com4.style.display= 'none'
}
function but4(){
    com4.style.display='flex'
    Comentarios.style.display ='flex'
    com2.style.display= 'none'
    com3.style.display= 'none'
    com1.style.display= 'none'
}
function close(){
    Comentarios.style.display= 'none';
}
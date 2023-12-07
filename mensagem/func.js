const Chats = document.querySelector('#selecao')
const tela = document.querySelector('#mensagem')
const close = document.querySelector('#close')
const open = document.querySelector('#open')


const div1 = document.querySelector('#div1')
const div2 = document.querySelector('#div2')
const div3 = document.querySelector('#div3')
const div4 = document.querySelector('#div4')
const div5 = document.querySelector('#div5')
const div6 = document.querySelector('#div6')
const div7 = document.querySelector('#div7')
const div8 = document.querySelector('#div8')

const mens1 = document.querySelector('#mens1')
const mens2 = document.querySelector('#mens2')
const mens3 = document.querySelector('#mens3')
const mens4 = document.querySelector('#mens4')
const mens5 = document.querySelector('#mens5')
const mens6 = document.querySelector('#mens6')
const mens7 = document.querySelector('#mens7')
const mens8 = document.querySelector('#mens8')

const photo1 = document.querySelector('#photo1')
const photo2 = document.querySelector('#photo2')
const photo3 = document.querySelector('#photo3')
const photo4 = document.querySelector('#photo4')
const photo5 = document.querySelector('#photo5')
const photo6 = document.querySelector('#photo6')
const photo7 = document.querySelector('#photo7')
const photo8 = document.querySelector('#photo8')

const ClosePhoto = document.querySelector('#close_ci')
const ClosePhoto2 = document.querySelector('#close_ci2')
const ClosePhoto3 = document.querySelector('#close_ci3')
const ClosePhoto4 = document.querySelector('#close_ci4')
const ClosePhoto5= document.querySelector('#close_ci5')
const ClosePhoto6= document.querySelector('#close_ci6')
const ClosePhoto7= document.querySelector('#close_ci7')
const ClosePhoto8= document.querySelector('#close_ci8')

const divPhoto = document.querySelector('#cima')

const imagem1 = document.querySelector('#imagem1')
const imagem2 = document.querySelector('#imagem2')
const imagem3 = document.querySelector('#imagem3')
const imagem4 = document.querySelector('#imagem4')
const imagem5 = document.querySelector('#imagem5')
const imagem6 = document.querySelector('#imagem6')
const imagem7 = document.querySelector('#imagem7')
const imagem8 = document.querySelector('#imagem8')

const tutorial = document.querySelector('#tutorial')

photo1.addEventListener('click', expande1)
photo2.addEventListener('click', expande2)
photo3.addEventListener('click', expande3)
photo4.addEventListener('click', expande4)
photo5.addEventListener('click', expande5)
photo6.addEventListener('click', expande6)
photo7.addEventListener('click', expande7)
photo8.addEventListener('click', expande8)

ClosePhoto.addEventListener('click', fecha)
ClosePhoto2.addEventListener('click', fecha2)
ClosePhoto3.addEventListener('click', fecha3)
ClosePhoto4.addEventListener('click', fecha4)
ClosePhoto5.addEventListener('click', fecha5)
ClosePhoto6.addEventListener('click', fecha6)
ClosePhoto7.addEventListener('click', fecha7)
ClosePhoto8.addEventListener('click', fecha8)

div1.addEventListener('click' , event1)
div2.addEventListener('click' , event2)
div3.addEventListener('click' , event3)
div4.addEventListener('click' , event4)
div5.addEventListener('click' , event5)
div6.addEventListener('click' , event6)
div7.addEventListener('click' , event7)
div8.addEventListener('click' , event8)

close.addEventListener('click' , some)
open.addEventListener('click', volta)

divPhoto.style.display="none"
mens1.style.display="none"
mens2.style.display="none"
mens3.style.display="none"
mens4.style.display="none"
mens5.style.display="none"
mens6.style.display="none"
mens7.style.display="none"
mens8.style.display="none"
open.style.display="none"

function event1(){
    mens1.style.display="flex"
    mens2.style.display="none"
    mens3.style.display="none"
    mens4.style.display="none"
    mens5.style.display="none"
    mens6.style.display="none"
    mens7.style.display="none"
    mens8.style.display="none"
    open.style.display="none"
    tutorial.style.display="none"
}
function event2(){
    mens1.style.display="none"
    mens2.style.display="flex"
    mens3.style.display="none"
    mens4.style.display="none"
    mens5.style.display="none"
    mens6.style.display="none"
    mens7.style.display="none"
    mens8.style.display="none"
    open.style.display="none"
    tutorial.style.display="none"
}
function event3(){
    mens1.style.display="none"
    mens2.style.display="none"
    mens3.style.display="flex"
    mens4.style.display="none"
    mens5.style.display="none"
    mens6.style.display="none"
    mens7.style.display="none"
    mens8.style.display="none"
    open.style.display="none"
    tutorial.style.display="none"
}
function event4(){
    mens1.style.display="none"
    mens2.style.display="none"
    mens3.style.display="none"
    mens4.style.display="flex"
    mens5.style.display="none"
    mens6.style.display="none"
    mens7.style.display="none"
    mens8.style.display="none"
    open.style.display="none"
    tutorial.style.display="none"
}
function event5(){
    mens1.style.display="none"
    mens2.style.display="none"
    mens3.style.display="none"
    mens4.style.display="none"
    mens5.style.display="flex"
    mens6.style.display="none"
    mens7.style.display="none"
    mens8.style.display="none"
    open.style.display="none"
    tutorial.style.display="none"
}
function event6(){
    mens1.style.display="none"
    mens2.style.display="none"
    mens3.style.display="none"
    mens4.style.display="none"
    mens5.style.display="none"
    mens6.style.display="flex"
    mens7.style.display="none"
    mens8.style.display="none"
    open.style.display="none"
    tutorial.style.display="none"
}
function event7(){
    mens1.style.display="none"
    mens2.style.display="none"
    mens3.style.display="none"
    mens4.style.display="none"
    mens5.style.display="none"
    mens6.style.display="none"
    mens7.style.display="flex"
    mens8.style.display="none"
    open.style.display="none"
    tutorial.style.display="none"
}
function event8(){
    mens1.style.display="none"
    mens2.style.display="none"
    mens3.style.display="none"
    mens4.style.display="none"
    mens5.style.display="none"
    mens6.style.display="none"
    mens7.style.display="none"
    mens8.style.display="flex"
    open.style.display="none"
    tutorial.style.display="none"
}
function some(){
       Chats.style.display="none";
       open.style.display="block"
}
function volta(){
    Chats.style.display="flex"
    open.style.display="none"
}

function fecha(){
    divPhoto.style.display="none"
}
function fecha2(){
    divPhoto.style.display="none"
}
function fecha3(){
    divPhoto.style.display="none"
}
function fecha4(){
    divPhoto.style.display="none"
}
function fecha5(){
    divPhoto.style.display="none"
}
function fecha6(){
    divPhoto.style.display="none"
}
function fecha7(){
    divPhoto.style.display="none"
}
function fecha8(){
    divPhoto.style.display="none"
}
function expande1(){
    divPhoto.style.display="flex"
    imagem1.style.display="block"
    imagem2.style.display="none"
    imagem3.style.display="none"
    imagem4.style.display="none"
    imagem5.style.display="none"
    imagem6.style.display="none"
    imagem7.style.display="none"
    imagem8.style.display="none"
}
function expande2(){
    divPhoto.style.display="flex"  
    imagem1.style.display="none"
    imagem2.style.display="block"
    imagem3.style.display="none"
    imagem4.style.display="none"
    imagem5.style.display="none"
    imagem6.style.display="none"
    imagem7.style.display="none"
    imagem8.style.display="none"
}
function expande3(){
    divPhoto.style.display="flex"
    imagem1.style.display="none"
    imagem2.style.display="none"
    imagem3.style.display="block"
    imagem4.style.display="none"
    imagem5.style.display="none"
    imagem6.style.display="none"
    imagem7.style.display="none"
    imagem8.style.display="none"
}
function expande4(){
    divPhoto.style.display="flex"
    imagem1.style.display="none"
    imagem2.style.display="none"
    imagem3.style.display="none"
    imagem4.style.display="block"
    imagem5.style.display="none"
    imagem6.style.display="none"
    imagem7.style.display="none"
    imagem8.style.display="none"
}
function expande5(){
    divPhoto.style.display="flex"
    imagem1.style.display="none"
    imagem2.style.display="none"
    imagem3.style.display="none"
    imagem4.style.display="none"
    imagem5.style.display="block"
    imagem6.style.display="none"
    imagem7.style.display="none"
    imagem8.style.display="none"
}
function expande6(){
    divPhoto.style.display="flex"
    imagem1.style.display="none"
    imagem2.style.display="none"
    imagem3.style.display="none"
    imagem4.style.display="none"
    imagem5.style.display="none"
    imagem6.style.display="block"
    imagem7.style.display="none"
    imagem8.style.display="none"
}
function expande7(){
    divPhoto.style.display="flex"
    imagem1.style.display="none"
    imagem2.style.display="none"
    imagem3.style.display="none"
    imagem4.style.display="none"
    imagem5.style.display="none"
    imagem6.style.display="none"
    imagem7.style.display="block"
    imagem8.style.display="none"
}
function expande8(){
    divPhoto.style.display="flex"
    imagem1.style.display="none"
    imagem2.style.display="none"
    imagem3.style.display="none"
    imagem4.style.display="none"
    imagem5.style.display="none"
    imagem6.style.display="none"
    imagem7.style.display="none"
    imagem8.style.display="block"
}

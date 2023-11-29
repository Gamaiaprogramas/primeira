const pergunta = document.querySelector('#dentroDiv');

/*function cadastro(){
   var receba=  window.prompt("ja é cadastrado?");
   if(receba == "sim"){
    pergunta.classList.add('dentro')
   }else{
    pergunta.classList.remove('dentro')
   }

}
console.log(cadastro())*/
const apagar = document.querySelector('#apagaId');
const asceso = document.querySelector('#ascendeId');
const botaoLike = document.querySelector('#likeId');
const divLuzes = document.querySelector('#luzes');
asceso.classList.add('ascende2');
var verifi = 0;
divLuzes.addEventListener('click' , curtir);

function curtir(){
    if(verifi ==0 ){
        apagar.classList.add('apaga2')
        asceso.classList.remove('ascende2')
        botaoLike.value = "10001";
        verifi =1;
    }else{
        apagar.classList.remove('apaga2')
        asceso.classList.add('ascende2')
        verifi =0;
        botaoLike.value = "10000";
    }
}
const ApagaItens = document.querySelector('#apagaPost');
const ApagaPerfil = document.querySelector('#apagaPerfil');
const ApagaPhoto = document.querySelector('#photo')
const botaoNuvem = document.querySelector('#nuvemBotao')

const virMenu = document.querySelector('#chamarMenu')
const DivMenu = document.querySelector('#MenuMesmo')
const Burguer = document.querySelector('#voltaMenu')


DivMenu.classList.add('ReturnMenu')
Burguer.addEventListener('click' , vaiMenu)
virMenu.addEventListener('click' , vemMenu)
function vemMenu(){
    DivMenu.classList.remove('positionMenu')
    DivMenu.classList.add('ReturnMenu')
    ApagaItens.style.display="block";
    ApagaPerfil.style.display="block";
    ApagaPhoto.style.display="block";
    botaoNuvem.style.display="block";
    
}
function vaiMenu(){
    DivMenu.classList.add('positionMenu')
    DivMenu.classList.remove('ReturnMenu')
    ApagaItens.style.display="none";
    ApagaPerfil.style.display="none";
    ApagaPhoto.style.display="none";
    botaoNuvem.style.display="none";
}
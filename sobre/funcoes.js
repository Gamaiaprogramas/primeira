const divOrg = document.querySelector('#gui_org');
const divGUiGeral = document.querySelector('#GuiGeral');
const botaoGUi = document.querySelector('#verMaisGuilherme');
const imagens = document.querySelector('#imagensGui');
var verifi = 0 ;
imagens.classList.add('someImg');
botaoGUi.classList.add('ageitaBotao2');
   
function sumir(){
    if(verifi == 0){
    divOrg.classList.remove('gui_org');
    divGUiGeral.classList.add('aumentamanho');
    imagens.classList.add('voltaImg');
    imagens.classList.remove('someImg');
    botaoGUi.value = "Ver menos";
    botaoGUi.classList.add('ageitaBotao');
    verifi =1;
    }
    else{
  
    divOrg.classList.add('gui_org');
    divGUiGeral.classList.remove('aumentamanho');
    imagens.classList.remove('voltaImg');
    imagens.classList.add('someImg')
    verifi = 0;
    botaoGUi.value = "Ver mais";
    botaoGUi.classList.remove('ageitaBotao');
    }
}

const divGabOrg = document.querySelector('#orgGab');
const imagensGab = document.querySelector('#imageGab');
const botaoGab = document.querySelector('#butGab');
const DivGabGeral = document.querySelector('#GabGeral');
verifi2 = 0;
botaoGab.classList.add('butGabNormal');
imagensGab.classList.add('someGab');

function sumir2(){
    if(verifi2 == 0 ){
        divGabOrg.classList.remove('org_gab');
        DivGabGeral.classList.add('aumentaGab');
        imagensGab.classList.add('voltaGab');
        imagensGab.classList.remove('someGab');
        botaoGab.value ="ver menos";
        botaoGab.classList.add('ageitaBotaoGAb');
        verifi2 =1;
    }else{
        divGabOrg.classList.add('org_gab');
        DivGabGeral.classList.remove('aumentaGab');
        imagensGab.classList.remove('voltaGab');
        imagensGab.classList.add('someGab');
        botaoGab.value = "ver mais";
        botaoGab.classList.remove('ageitaBotaoGAb')
        verifi2 =0;
    }
}
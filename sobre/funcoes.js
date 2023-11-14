const divOrg = document.querySelector('#gui_org');
const divGUiGeral = document.querySelector('#GuiGeral');
const botaoGUi = document.querySelector('#verMaisGuilherme');
const imagens = document.querySelector('#imagensGui');
var verifi = 0 ;
imagens.classList.add('someImg');
botaoGUi.classList.add('ageitaBotão2');
   
function sumir(){
    if(verifi == 0){
    divOrg.classList.add('GuiSome');
    divOrg.classList.remove('gui_org');
    divGUiGeral.classList.add('aumentamanho');
    imagens.classList.add('voltaImg');
    imagens.classList.remove('someImg');
    botaoGUi.value = "Ver menos";
    botaoGUi.classList.add('ageitaBotão');
    verifi =1;
    }
    else{
    divOrg.classList.remove('GuiSome');
    divOrg.classList.add('gui_org');
    divGUiGeral.classList.remove('aumentamanho');
    imagens.classList.remove('voltaImg');
    imagens.classList.add('someImg')
    verifi = 0;
    botaoGUi.value = "Ver mais";
    botaoGUi.classList.remove('ageitaBotão');
    }
}
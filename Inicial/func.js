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
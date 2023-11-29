const LetraA = document.querySelector('#Div_termos')
const buttonAceitar = document.querySelector('#aceitar')
const tela = document.querySelector('#Tela_termos')
const EuLI = document.querySelector('#EuLI')
LetraA.addEventListener('click', abrirTela)

tela.style.display="none"
EuLI.disabled= true;

function abrirTela(){
    tela.style.display="block";
}
buttonAceitar.addEventListener('click', fecharTela)
function fecharTela(){
    EuLI.checked=true;
    tela.style.display="none"
}

const telaLogin = document.querySelector('#login')
const telaCadastro = document.querySelector('#Cadastro')
const buttonCadastro = document.querySelector('#ButtonCadastro')
const ButtonLogin = document.querySelector('#Vem_login')

telaCadastro.style.display="none"
buttonCadastro.addEventListener('click',VirCadastro);
ButtonLogin.addEventListener('click' , virLogin)
function VirCadastro(){
    telaCadastro.style.display="flex"
    telaLogin.style.display="none"
}
function virLogin(){
    telaCadastro.style.display="none"
    telaLogin.style.display="flex"
}
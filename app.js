//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomesAmigos = [];
let tamanhoArray = nomesAmigos.length();
let sorteio = gerarSorteio();


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h2', nomesAmigos[sorteio]);



function adicionarAmigo(){
    nomes = document.querySelector('input').value;
    nomesAmigos.push(nomes);
    console.log(nomesAmigos);
    limparCampo();

}  

function gerarSorteio() {
    let numeroEscolhido = (parseInt(Math.random() * tamanhoArray))
    return numeroEscolhido;
}



function limparCampo() {
    let limpeza = document.querySelector('input');
    limpeza.value = '';
}
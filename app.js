//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomesAmigos = [];


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}



function sortearAmigo(){
    let sorteio = gerarSorteio();
    exibirTextoNaTela("h1", nomesAmigos[sorteio]); 
    console.log(nomesAmigos[sorteio]) 
}

function adicionarAmigo(){
    nomes = document.querySelector('input').value;
    
    if(nomes == ''){
        alert('digite um nome ?');
    }else{
        nomesAmigos.push(nomes);
        console.log(nomesAmigos);
        limparCampo();
    }
}  

function gerarSorteio() {
    let numero = (parseInt(Math.random() * nomesAmigos.length));
    return numero;
}



function limparCampo() {
    let limpeza = document.querySelector('input');
    limpeza.value = '';
}
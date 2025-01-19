//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomesAmigos = [];
let listaNomes = document.getElementById('listaAmigos');
let resultado = document.getElementById(`resultado`);


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}



function sortearAmigo(){
    let sorteio = gerarSorteio();
    let amigoSorteado = nomesAmigos[sorteio];

    resultado.textContent = `O amigo sorteado é: ${amigoSorteado}`;
    limpaLista(listaNomes);
}

function adicionarAmigo(){
    let nomes = document.querySelector('input').value;
    
    if (nomes == ""){
        alert(`Erro Digite um nome?`);
    }else {
        nomesAmigos.push(nomes);
        console.log(nomesAmigos);
        mostrarLista();
    }

    limparCampo(); 
}  

function gerarSorteio() {
    let numero = (parseInt(Math.random() * nomesAmigos.length));
    return numero;
}

function mostrarLista() {
   
    let itemLista = document.createElement('li');
    listaNomes.appendChild(itemLista);
    itemLista.textContent = nomesAmigos[nomesAmigos.length - 1];
}

function limpaLista(tag) {
    tag.innerHTML = " "
}

function limparCampo() {
    let limpeza = document.querySelector('input');
    limpeza.value = '';
}
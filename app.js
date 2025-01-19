//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomesAmigos = [];


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}



function sortearAmigo(){
    let sorteio = gerarSorteio();
    exibirTextoNaTela("ul", nomesAmigos[sorteio]); 
    console.log(nomesAmigos[sorteio]) 
}

function adicionarAmigo(novoNome){
    
    let nomes = document.querySelector('input').value;
    nomesAmigos.push(nomes);
    if (!nomes.includes(novoNome)) {
        
        const novoItem = document.createElement('li');
        novoItem.textContent = novoNome;

    } else {
        alert(`existe esse nome na lista`);
    }
    limparCampo();
    mostrarLista();
    
    
}  

function gerarSorteio() {
    let numero = (parseInt(Math.random() * nomesAmigos.length));
    return numero;
}

function mostrarLista() {
    let listaNomes = document.getElementById('listaAmigos');

    const novoNome = document.createElement('li');
    novoNome.textContent = nomesAmigos;

    listaNomes.appendChild(novoNome);


    // nomesAmigos.forEach(nomesAmigos => {
    //     let nomeLista = document.createElement('li');
    //     nomeLista.textContent = nomesAmigos;
    //     listaNomes.appendChild(nomeLista);
    // })
}



function limparCampo() {
    let limpeza = document.querySelector('input');
    limpeza.value = '';
}
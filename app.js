//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomesAmigos = [];

function adicionarAmigo(){
    nomes = document.querySelector('input').value;
    nomesAmigos.push(nomes);
    console.log(nomesAmigos);
    limparCampo();

}  



function limparCampo() {
    let limpeza = document.querySelector('input');
    limpeza.value = '';
}
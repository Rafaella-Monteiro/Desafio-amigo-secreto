let listaDeNomes = [];
let listaSorteados = [];

function adicionarAmigo() {
    let nomeAdicionado = document.querySelector('input').value;
    
    if (nomeAdicionado.trim() !== "") { 
        listaDeNomes.push(nomeAdicionado);
        limparCampo();
        console.log(listaDeNomes);
        exibirNomes();
    } else {
        alert("Por favor, insira um nome.")
    }
}

function limparCampo() {
    document.querySelector('input').value = '';
}

function exibirTexto(id, texto) {
    let campo = document.querySelector(id);
    campo.innerHTML = texto;
}

function exibirNomes() {
    let listaFormatada = listaDeNomes.map(nome => `<li>${nome}</li>`).join('');
    document.querySelector('#listaAmigos').innerHTML = `<ul>${listaFormatada}</ul>`;
}


function sortearAmigo() {
    
    if (listaDeNomes.length === 0) {
        alert("A lista está vazia! Adicione nomes antes de sortear.");
        return;
    }

    let amigoSorteado = listaDeNomes[Math.floor(Math.random() * listaDeNomes.length)];
    listaSorteados.push(amigoSorteado); // Adiciona o sorteado na lista de sorteados
    exibirAmigosSorteados();
}

function exibirAmigosSorteados() {
    let listaSorteadosFormatada = listaSorteados.map(nome => `<li>${nome}</li>`).join('');
    document.querySelector('#resultado').innerHTML = `<ul>${listaSorteadosFormatada}</ul>`;
}
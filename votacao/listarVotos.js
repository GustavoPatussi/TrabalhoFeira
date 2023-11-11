

const listarVotos = () => {
    const listaVotacao = JSON.parse(localStorage.getItem('listaVotacao'));
    const tabela = document.querySelector('#listarVotos')
    criarCabecalho(tabela);
    for (let i = 0; i < listaVotacao.length; i++) {

        const colunaNome = document.createElement("td");
        colunaNome.innerText = listaVotacao[i].usuario.nome;
        colunaNome.setAttribute("id", "colunaNome");

        const colunaSala = document.createElement("td");
        colunaSala.innerText = listaVotacao[i].usuario.sala;
        colunaSala.setAttribute("id", "colunaSala");


        const colunaStreaming = document.createElement("td");
        colunaStreaming.innerText = listaVotacao[i].streaming;
        colunaStreaming.setAttribute("id", "colunaStreaming");

        const colunaSerie = document.createElement("td");
        colunaSerie.innerText = listaVotacao[i].serie;
        colunaSerie.setAttribute("id", "colunaSerie");

        const colunaExcluir = document.createElement("td");
        colunaExcluir.setAttribute("id", "colunaExcluir");
        const botaoExcluir = document.createElement('button');
        botaoExcluir.className = 'btnExcluir'
        botaoExcluir.dataset.id = i;
        botaoExcluir.innerText = 'Excluir';
        colunaExcluir.appendChild(botaoExcluir);

        const linha = document.createElement("tr");
        linha.appendChild(colunaNome);
        linha.appendChild(colunaSala)
        linha.appendChild(colunaStreaming);
        linha.appendChild(colunaSerie);
        linha.appendChild(colunaExcluir);
        tabela.appendChild(linha)
    }
}

const criarCabecalho = (tabela) => {
    const colunaNome = document.createElement("th");
    colunaNome.innerText = "Nome";
    colunaNome.setAttribute("id", "colunaNome");

    const colunaSala = document.createElement("th");
    colunaSala.innerText = "Sala";
    colunaSala.setAttribute("id", "colunaSala");

    const colunaStreaming = document.createElement("th");
    colunaStreaming.innerText = "Streaming";
    colunaStreaming.setAttribute("id", "colunaStreaming");

    const colunaSerie = document.createElement("th");
    colunaSerie.innerText = "Obra";
    colunaSerie.setAttribute("id", "colunaSerie");

    const colunaExcluir = document.createElement("th");
    colunaExcluir.innerText = "Excluir";
    colunaExcluir.setAttribute("id", "colunaExcluir");

    const linha = document.createElement("tr");
    linha.appendChild(colunaNome);
    linha.appendChild(colunaSala)
    linha.appendChild(colunaStreaming);
    linha.appendChild(colunaSerie);
    linha.appendChild(colunaExcluir);
    tabela.appendChild(linha);

}
document.addEventListener('click', e =>{

    if (e.target.dataset.id) {
        excluirUsuario(e.target.dataset.id);
    }
})

const excluirUsuario = (id) =>{
    const listaVotacao = JSON.parse(localStorage.getItem('listaVotacao'));
    listaVotacao.splice(parseInt(id), 1);
    localStorage.setItem('listaVotacao', JSON.stringify(listaVotacao));
    window.location.href = 'listarVotos.html';

}

window.onload = listarVotos();
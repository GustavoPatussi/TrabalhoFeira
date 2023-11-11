class Votacao {
    constructor(usuario, streaming, serie) {
        this.usuario = usuario;
        this.streaming = streaming;
        this.serie = serie;
    }
}

document.addEventListener('click', e => {
    let figura = e.target;
    if (figura.dataset.voto) {
        confirmarVoto(figura.dataset.voto)
    }

    while (!figura.dataset.nome) {
        figura = figura.parentElement;
    }

    if (figura) {
        let votoStreaming = figura.dataset.nome;
        console.log(figura.dataset.nome)
        localStorage.setItem('votoStreaming', JSON.stringify(votoStreaming));
        criarVotacaoSeries(votoStreaming);
    }
});
const criarVotacaoSeries = (streaming) =>{
    let series
    for (let i = 0; i < informacoes.length; i++) {
        if (informacoes[i].streaming == streaming) {
            series = informacoes[i].series;
        }
    }
    let figura = document.querySelector('figure');
    document.querySelector('.title').innerText = `escolha uma obra da ${streaming}`;

    for (let i = 0; i < series.length; i++) {
        let botao = document.createElement('button')
        botao.dataset.voto = series[i].nome;
        botao.className = 'btnVotar';
        botao.innerText = 'VOTAR';
        figura.getElementsByTagName('figcaption')[0].appendChild(botao);
        figura.getElementsByTagName('h1')[0].innerText = series[i].nome;
        figura.getElementsByTagName('p')[0].innerText = series[i].descricao;
        figura.getElementsByTagName('img')[0].src = series[i].img;
        figura.style.cursor = 'default';
        figura.dataset.nome = '';

        figura = figura.nextElementSibling;
    }   
}
const confirmarVoto = (votoSerie) =>{

    const usuario = JSON.parse(localStorage.getItem('usuarioVotacao'));
    const votoStreaming = JSON.parse(localStorage.getItem('votoStreaming'));
    let listaVotacao = [];
    if (JSON.parse(localStorage.getItem('listaVotacao'))) {
        listaVotacao = JSON.parse(localStorage.getItem('listaVotacao'));
    }
    
    if (verificaVoto(usuario, listaVotacao)) {
        alert (`${usuario.nome} já votou`);
        return;
    }
    alert (`votação concluída`)
    let novaVotacao = new Votacao(usuario, votoStreaming, votoSerie)
    listaVotacao.push(novaVotacao);
    localStorage.setItem('listaVotacao', JSON.stringify(listaVotacao))
}
function verificaVoto(usuario, listaVotacao){
    for (let i = 0; i < listaVotacao.length; i++) {
        if (usuario.nome == listaVotacao[i].usuario.nome && usuario.sala == listaVotacao[i].usuario.sala) {
            return true;
        }
    }
    return false;
}
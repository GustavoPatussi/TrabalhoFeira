let streamingMaisVotado = null;
let indexStreaming = null;
let serieMaisVotada = null;
let indexSerie = null;

const apurarVotacao = () => {
    const listaVotacao = JSON.parse(localStorage.getItem('listaVotacao'));
    let gridStreaming = document.querySelector('.VencedorStreaming');
    let gridSerie = document.querySelector('.VencedorSerie');
    apurarStreaming(listaVotacao, gridStreaming);
    apurarSerie(listaVotacao, gridSerie);

}
const apurarStreaming = (lista, grid) => {
    let contagem = {};
    let maxVotos = 0;
    for (let i = 0; i < lista.length; i++) {
        let votoStreaming = lista[i].streaming;
        if (contagem[votoStreaming]) {
            contagem[votoStreaming]++;
        }
        else {
            contagem[votoStreaming] = 1;
        }
    }

    for (let i = 0; i < informacoes.length; i++) {
        if (maxVotos < contagem[informacoes[i].streaming]) {
            indexStreaming = i
            maxVotos = contagem[informacoes[i].streaming];
            streamingMaisVotado = informacoes[i].streaming;
        }
        else if (maxVotos == contagem[informacoes[i].streaming]) {
            console.log(`Há um empate entre ${informacoes[i].streaming} e ${streamingMaisVotado} com ${maxVotos} votações`)
        }
    }
    console.log(streamingMaisVotado);
    console.log(maxVotos);

    let img = grid.querySelector('img');
    let h1 = grid.querySelector('h1');
    let p = grid.querySelector('p');

    if (maxVotos != 0) {
        h1.innerText = streamingMaisVotado;
        img.src = `../imagens/${streamingMaisVotado}/logo.png`;
        p.innerText = `${streamingMaisVotado} ficou em primeiro nas votações entre as plataformas de streaming, totalizando ${maxVotos} votos`
    }


}


const apurarSerie = (lista, grid) => {
    let contagem = {};
    let maxVotos = 0;
    for (let i = 0; i < lista.length; i++) {
        let votoSerie = lista[i].serie;
        if (contagem[votoSerie]) {
            contagem[votoSerie]++;
        }
        else {
            contagem[votoSerie] = 1;
        }

    }
    for (let i = 0; i < informacoes.length; i++) {
        for (let a = 0; a < informacoes[i].series.length; a++) {
            if (maxVotos < contagem[informacoes[i].series[a].nome]) {
                maxVotos = contagem[informacoes[i].series[a].nome];
                serieMaisVotada = informacoes[i].series[a]
                indexSerie = a;
            }
            else if (maxVotos == contagem[informacoes[i].series[a].nome]) {
                console.log(`Há um empate entre ${informacoes[i].series[a].nome} e ${serieMaisVotada.nome} com ${maxVotos} votações`)
            }
        }

    }

    let img = grid.querySelector('img');
    let h1 = grid.querySelector('h1');
    let p = grid.querySelector('p');

    if (maxVotos != 0) {
        h1.innerText = serieMaisVotada.nome;
        img.src = serieMaisVotada.img;
        p.innerText = `${serieMaisVotada.nome} ficou em primeiro nas votações entre as obras, totalizando ${maxVotos} votos`
    }

    console.log(serieMaisVotada.nome)
    console.log(maxVotos);

}




window.onload = apurarVotacao();
let botão = document.querySelector("#botao")
botao.style.background="blue";

botao.addEventListener("mouseover",trocaVerde);

function trocaVerde() {
    botao.style.background="green"
}

const caixa = window.document.querySelector('.caixa')

botao.addEventListener("mouseout", mousesair);

function mousesair() {
    botao.style.background="blue";
}



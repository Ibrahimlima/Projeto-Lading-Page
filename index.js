var setaEsquerda = window.document.getElementById("seta_esquerda");
var setaDireita = window.document.getElementById("seta_direita");
var samantha = window.document.getElementById("card_samantha");
var leonardo = window.document.getElementById("card_leonardo");
var bruna = window.document.getElementById("card_bruna");

function rolarParaDireita(){
    bruna.style = "display:none"
    samantha.style = "display: flex"
    setaDireita.style = "display: none"
    setaEsquerda.style = "display: flex"
}

function rolarParaEsquerda(){
    bruna.style = "display:flex"
    samantha.style = "display: none"
    setaDireita.style = "display: flex"
    setaEsquerda.style = "display: none"
}
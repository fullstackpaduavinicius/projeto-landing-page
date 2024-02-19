    var setadireita = window.document.getElementById("setadireita")
var samantha = window.document.getElementById("samantha")
var leonardo = window.document.getElementById("leonardo")
var bruna = window.document.getElementById("bruna")
    var setaesquerda = window.document.getElementById("setaesquerda")
function RolarParaDireita() {
    console.log("Função RolarParaDireita foi chamada.");
    leonardo.style.display = "none";
    bruna.style.display = "flex"; 
    setadireita.style.display = "none"
    setaesquerda.style.display = "flex"
}
function RolarParaEsquerda(){
    leonardo.style.display = "flex";
    bruna.style.display = "none"; 
    setadireita.style.display = "flex"
    setaesquerda.style.display = "none"
}

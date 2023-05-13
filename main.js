const input = document.getElementById("input");
const btnE = document.getElementById("btnE");
const btnD = document.getElementById("btnD");
const img = document.querySelector(".results__img");
const rtext = document.querySelector(".results__text");
const results = document.querySelector(".results")
const Nresult = document.querySelector("#nresult");

let NTexto = "";
let btnC = document.createElement("button");
btnC.innerText = "copiar";
btnC.classList = "btn diferent nuevo";

btnE.addEventListener("click", function encriptar() {
    let texto = input.value;
    NTexto = texto.replaceAll("e", "enter")
    NTexto = NTexto.replaceAll("i", "imes")
    NTexto = NTexto.replaceAll("a", "ai")
    NTexto = NTexto.replaceAll("o", "ober")
    NTexto = NTexto.replaceAll("u", "ufat")
    Nresult.innerText = `${NTexto}`;
    img.style.display = "none"
    rtext.style.display = "none";
    results.style.justifyContent = "space-between";
    results.appendChild(btnC);
    NTexto
}  )


btnD.addEventListener("click", function desencriptar() {
    let texto = input.value;
    NTexto = texto.replaceAll("enter", "e")
    NTexto = NTexto.replaceAll("ai", "a")
    NTexto = NTexto.replaceAll("imes", "i")
    NTexto = NTexto.replaceAll("ober", "o")
    NTexto = NTexto.replaceAll("ufat", "u")
    Nresult.innerText = `${NTexto}`;    
    rtext.style.display = "none";
    results.style.justifyContent = "space-between";
    img.style.display = "none"
    results.appendChild(btnC);
    return NTexto;
})


btnC.addEventListener("click", function copiar() {
   navigator.clipboard.writeText(NTexto);
})


const textoBusca = document.getElementById("txtBusca");
const filmes = document.querySelectorAll(".filme");

textoBusca.addEventListener("keyup", () => {
    const termoBusca = textoBusca.value.toLowerCase();

    filmes.forEach(filme => {
        const tituloFilme = filme.querySelector("h2").textContent.toLowerCase();

        if(tituloFilme.includes(termoBusca)) {
            filme.style.display = "block"
        } else {
            filme.style.display = "none"
        }
    });
});
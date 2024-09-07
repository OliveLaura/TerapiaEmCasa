function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p class='resultado-nulo'>Nada foi encontrado porque o campo de pesquisa está vazio.</p> <p class='resultado-nulo'>Digite uma atividade ou tema de seu interesse e tente de novo.</p>"
        return
    }

    let palavrasPesquisa = campoPesquisa.split(' ');
    let encontrarPalavra = (texto, palavras) => {
        return palavras.some(palavra => texto.toLowerCase().includes(palavra.toLowerCase()));
    };

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (encontrarPalavra(titulo, palavrasPesquisa) ||
            encontrarPalavra(descricao, palavrasPesquisa) ||
            encontrarPalavra(tags, palavrasPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href=${dado.link} target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p class='resultado-nulo'>Nada foi encontrado.</p> <p class='resultado-nulo'>Sentindo falta de uma atividade por aqui?</p> <p class='resultado-nulo'>Entre em contato pelo e-mail indicado no rodapé, e farei meu melhor para incluí-la aqui em breve!</p>";
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}

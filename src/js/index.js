// Função para adicionar conteúdo ao contêiner
function adicionarConteudo() {
    var conteudoElement = document.getElementById('conteudo');
    conteudoElement.innerHTML = '<p>Este conteúdo foi adicionado dinamicamente pelo JavaScript!</p>';
}

// Chamar a função ao carregar a página
window.onload = adicionarConteudo;
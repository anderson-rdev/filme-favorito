function selecionarEstilo() {
    // Captura o valor digitado pelo usuário
    const escolha = document.getElementById('escolha').value;
    const resultado = document.getElementById('resultado');
    
    // Converte para número inteiro
    const opcao = parseInt(escolha);
    
    // Variável para armazenar o estilo selecionado
    let estiloFilme;
    let mensagem;
    let tipoResultado;
    
    // Estrutura SWITCH para verificar a opção escolhida
    switch(opcao) {
        case 1:
            estiloFilme = "Ação";
            mensagem = `Seu estilo de filme favorito é: ${estiloFilme} 🎬💥`;
            tipoResultado = "sucesso";
            break;
            
        case 2:
            estiloFilme = "Comédia";
            mensagem = `Seu estilo de filme favorito é: ${estiloFilme} 😂🎭`;
            tipoResultado = "sucesso";
            break;
            
        case 3:
            estiloFilme = "Drama";
            mensagem = `Seu estilo de filme favorito é: ${estiloFilme} 🎭✨`;
            tipoResultado = "sucesso";
            break;
            
        case 4:
            estiloFilme = "Terror";
            mensagem = `Seu estilo de filme favorito é: ${estiloFilme} 😱👻`;
            tipoResultado = "sucesso";
            break;
            
        case 5:
            estiloFilme = "Ficção Científica";
            mensagem = `Seu estilo de filme favorito é: ${estiloFilme} 🚀🌌`;
            tipoResultado = "sucesso";
            break;
            
        case 6:
            estiloFilme = "Romance";
            mensagem = `Seu estilo de filme favorito é: ${estiloFilme} 💕🌹`;
            tipoResultado = "sucesso";
            break;
            
        default:
            // Caso o usuário digite uma opção inválida
            mensagem = "⚠️ Opção inválida! Por favor, escolha um número entre 1 e 6.";
            tipoResultado = "erro";
            break;
    }
    
    // Exibe o resultado na página
    resultado.textContent = mensagem;
    resultado.className = `resultado ${tipoResultado} show`;
    
    // Limpa o campo de input após a seleção
    document.getElementById('escolha').value = '';
}

// Permite confirmar pressionando Enter
document.getElementById('escolha').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        selecionarEstilo();
    }
});
// Seleciona todos os botões "btn-proximo"
const avancarPasso = document.querySelectorAll('.btn-proximo');

// Itera sobre cada botão e adiciona um evento de clique
avancarPasso.forEach(botao => {
    botao.addEventListener('click', () => {
        // Seleciona o elemento com a classe 'ativo' (passo atual)
        const passoAtual = document.querySelector('.ativo');
        
        // Obtém o próximo passo a partir do atributo data-proximo do botão clicado
        const proximoPassoId = 'passo-' + botao.getAttribute('data-proximo');
        
        // Remove a classe 'ativo' do passo atual
        passoAtual.classList.remove('ativo');
        
        // Adiciona a classe 'ativo' ao próximo passo
        document.getElementById(proximoPassoId).classList.add('ativo');
    });
});
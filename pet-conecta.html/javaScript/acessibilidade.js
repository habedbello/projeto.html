document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os botões e o elemento <body> para manipulação
    const toggleContrastBtn = document.getElementById('toggle-contrast'); // Botão para alternar contraste
    const increaseFontBtn = document.getElementById('increase-font');     // Botão para aumentar a fonte
    const decreaseFontBtn = document.getElementById('decrease-font');     // Botão para diminuir a fonte
    const body = document.body;                                          // O elemento <body> da página

    // Define o tamanho de fonte padrão do site
    const defaultFontSize = 16; // em pixels
    // Tenta carregar o tamanho da fonte salvo no localStorage, ou usa o padrão
    let currentFontSize = parseFloat(localStorage.getItem('fontSize')) || defaultFontSize;

    // Função para aplicar o tamanho da fonte ao corpo do documento
    function applyFontSize() {
        body.style.fontSize = `${currentFontSize}px`; // Define o tamanho da fonte do <body>
        localStorage.setItem('fontSize', currentFontSize); // Salva a preferência no localStorage
    }

    // Listener para o botão de alternar contraste
    if (toggleContrastBtn) {
        toggleContrastBtn.addEventListener('click', function() {
            body.classList.toggle('high-contrast'); // Alterna a classe 'high-contrast' no <body>
            // Salva a preferência do usuário no localStorage
            if (body.classList.contains('high-contrast')) {
                localStorage.setItem('contrastMode', 'high');
            } else {
                localStorage.removeItem('contrastMode'); // Remove a preferência se voltar ao normal
            }
        });
    }

    // Aplica o modo de contraste salvo no localStorage ao carregar a página
    if (localStorage.getItem('contrastMode') === 'high') {
        body.classList.add('high-contrast');
    }

    // Listener para o botão de aumentar a fonte
    if (increaseFontBtn) {
        increaseFontBtn.addEventListener('click', function() {
            // Aumenta o tamanho da fonte, com um limite máximo para evitar quebra de layout
            if (currentFontSize < 24) { 
                currentFontSize += 2; // Aumenta em 2px
                applyFontSize();      // Aplica a nova fonte
            }
        });
    }

    // Listener para o botão de diminuir a fonte
    if (decreaseFontBtn) {
        decreaseFontBtn.addEventListener('click', function() {
            // Diminui o tamanho da fonte, com um limite mínimo
            if (currentFontSize > 12) {
                currentFontSize -= 2; // Diminui em 2px
                applyFontSize();      // Aplica a nova fonte
            }
        });
    }

    // Aplica o tamanho da fonte salvo no localStorage (ou o padrão) ao carregar a página
    applyFontSize();
});

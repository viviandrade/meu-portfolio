// Função para exibir a seção com o ID especificado
function showSection(sectionId) {
    // Seleciona todos os elementos com a classe 'section'
    const sections = document.querySelectorAll('.section');
    
    // Remove a classe 'active' de todas as seções
    sections.forEach(section => section.classList.remove('active'));

    // Seleciona a seção com o ID fornecido
    const selectedSection = document.getElementById(sectionId);
    
    // Se a seção selecionada existir, adiciona a classe 'active' para exibi-la
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
}

// Função para verificar o hash na URL e exibir a seção correspondente
function checkHash() {
    // Obtém o hash da URL, removendo o caractere '#' no início
    const hash = window.location.hash.substring(1);
    
    // Se o hash não estiver vazio, exibe a seção correspondente
    if (hash) {
        showSection(hash);
    } else {
        // Se não houver hash, exibe a seção padrão (página de apresentação)
        showSection('home'); // Mostra a página de apresentação por padrão
    }
}

// Define a função checkHash para ser executada quando a página for carregada
window.onload = checkHash;

// Define a função checkHash para ser executada quando o hash da URL mudar
window.onhashchange = checkHash;

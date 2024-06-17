// Quando a página HTML é completamente carregada...
document.addEventListener('DOMContentLoaded', function() {
    // Encontra o botão de hamburguer na barra de navegação
    var toggler = document.querySelector('.navbar-toggler');
    // Encontra a área que contém o menu da barra de navegação
    var navbarCollapse = document.querySelector('.navbar-collapse');

    // Adiciona um evento de clique no botão de hamburguer
    toggler.addEventListener('click', function() {
        // Alterna (liga/desliga) a classe "active" no botão de hamburguer
        toggler.classList.toggle('active');
    });

    // Encontra todos os links de navegação dentro do menu
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    // Para cada link encontrado...
    navLinks.forEach(link => {
        // Adiciona um evento de clique a cada link
        link.addEventListener('click', () => {
            // Se o menu estiver aberto (visível)...
            if (navbarCollapse.classList.contains('show')) {
                // Remove a classe "active" do botão de hamburguer (volta ao ícone normal)
                toggler.classList.remove('active');
                // Fecha o menu (recolhe)
                navbarCollapse.classList.remove('show');
            }
        });
    });
});

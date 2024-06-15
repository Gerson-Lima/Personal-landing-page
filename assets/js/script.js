document.addEventListener('DOMContentLoaded', function() {
    var toggler = document.querySelector('.navbar-toggler');

    toggler.addEventListener('click', function() {
        toggler.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const modal = new bootstrap.Modal(document.getElementById('linkModal'));
    const modalIframe = document.getElementById('modalIframe');

    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            let url = card.getAttribute('data-url');
            modalIframe.src = url;
            modal.show();
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const albumImagini = document.querySelectorAll('.album-foto img');
    const albumFull = document.querySelector('.album-foto-full');
    const imagineFull = document.querySelector('.album-foto-full img');
    const butonInchide = document.querySelector('.album-foto-full span');

    albumImagini.forEach(function (imagine) {
        imagine.addEventListener('click', function () {
            const caleImagine = imagine.getAttribute('src');
            imagineFull.setAttribute('src', caleImagine);
            albumFull.style.display = 'flex';
        });
    });

    butonInchide.addEventListener('click', function () {
        albumFull.style.display = 'none';
    });
});


function AlertButton() {
    alert('Formular trimis cu succes!');
}

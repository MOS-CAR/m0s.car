document.addEventListener('DOMContentLoaded', function () {
    var reserveButton = document.getElementById('reserveButton');
    var mapPopup = document.getElementById('mapPopup');
    var thankYouSection = document.getElementById('thankYou');

    reserveButton.addEventListener('click', function (event) {
        event.preventDefault();

        mapPopup.classList.remove('hidden');

        document.getElementById('booking-form').classList.add('hidden');
        thankYouSection.classList.add('hidden');
    });
});

document.getElementById('reserveButton').addEventListener('click', function (event) {
    event.preventDefault();
    var duration = parseInt(document.getElementById('duration').value);
    var tariff = document.getElementById('tariff').value;

    var price;
    if (tariff === 'premium') {
        price = duration * 50; 
    } else {
        price = duration * 87; 
    }
    document.getElementById('price').textContent = 'Цена: ' + price + ' руб.';
});

document.getElementById('goToHomePageButton').addEventListener('click', function () {
    window.location.href = 'index.html';
});

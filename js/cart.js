// Inicjalizacja koszyka
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Dodawanie produktu do koszyka
function addToCart(event) {
    const productOverlay = event.currentTarget;
    const productId = productOverlay.getAttribute('data-product');
    const productName = productOverlay.getAttribute('data-product-name');
    const productPrice = productOverlay.getAttribute('data-product-price');
    const productExists = cartItems.find(item => item.id === productId);
    if (productExists) {
        alert('Ten produkt został już dodany do koszyka.');
    } else {
        cartItems.push({id: productId, name: productName, price: productPrice});
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        displayCartItems();
    }
}

// Usuwanie produktu z koszyka
function removeFromCart(event) {
    const productName = event.currentTarget.getAttribute('data-product-name');
    cartItems = cartItems.filter(item => item.name !== productName);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCartItems();
}

// Wyczyszczenie koszyka
function clearCart() {
    cartItems = [];
    localStorage.removeItem('cartItems');
    displayCartItems();
}

// Wyświetlanie elementów w koszyku
function displayCartItems() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.querySelector('.total-price');

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-center">Koszyk jest pusty</p>';
        totalPriceElement.textContent = '';
        return;
    }

    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.textContent = `${item.name} - Cena: ${item.price} zł`;

        const removeButton = document.createElement('button');
        removeButton.classList.add('btn', 'btn-danger', 'remove-button', 'float-end');
        removeButton.textContent = 'Usuń';
        removeButton.setAttribute('data-product-name', item.name);
        removeButton.addEventListener('click', removeFromCart);

        listItem.appendChild(removeButton);
        cartItemsContainer.appendChild(listItem);

        totalPrice += parseFloat(item.price);
    });

    totalPriceElement.textContent = `Podsumowanie cen: ${totalPrice.toFixed(2)} zł`;
    totalPriceElement.classList.add('fw-semibold');
    totalPriceElement.style.color = 'green';
}

// Inicjalizacja
const productOverlays = document.querySelectorAll('.product-overlay');
productOverlays.forEach(overlay => {
    overlay.addEventListener('click', addToCart);
});

const clearCartButton = document.querySelector('.clear-cart');
clearCartButton.addEventListener('click', clearCart);

displayCartItems();

// Walidacja formularza
function validateForm() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone-number').value;
    let ok = true;

    if (firstName === '' || lastName === '' || email === '' || phoneNumber === '') {
        alert('Proszę wypełnić wszystkie pola formularza.');
        ok = false;
    }

    const emailRegex = /^(([\w_]+)-*\.?)+@[\w](([\w]+)-?_?\.?)+([a-z]{2,4})$/;
    if (!emailRegex.test(email)) {
        alert('Nieprawidłowy adres e-mail.');
        ok = false;
    }

    const nameRegex = /^[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ]{2,20}$/;
    if (!nameRegex.test(firstName)) {
        alert('Imię powinno zaczynać się z dużej litery i mieć długość od 2 do 20 znaków.');
        ok = false;
    }

    if (!nameRegex.test(lastName)) {
        alert('Nazwisko powinno zaczynać się z dużej litery i mieć długość od 2 do 40 znaków.');
        ok = false;
    }

    const phoneRegex = /^([1-9]{1}[0-9]{8})|([1-9]{1}[0-9]{1}-[1-9]{1}[0-9]{6})$/;
    if (!phoneRegex.test(phoneNumber)) {
        alert('Nieprawidłowy numer telefonu. Poprawny format to: 123456789');
        ok = false;
    }

    if (cartItems.length === 0) {
        alert('Nie wybrano żadnego produktu.');
        ok = false;
    }

    if (ok) {
        return pokazDane();
    } else {
        return false;
    }
}


// Funkcja wyświetlająca dane
function pokazDane() {
    const firstName = document.querySelector('input[placeholder="Podaj imie"]').value;
    const lastName = document.querySelector('input[placeholder="Podaj nazwisko"]').value;
    const email = document.querySelector('input[placeholder="Podaj e-mail"]').value;
    const phoneNumber = document.querySelector('input[placeholder="Podaj numer telefonu"]').value;

    const orderedItems = cartItems.map(item => `${item.name} - Cena: ${item.price} zł`).join('\n');

    const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);

    const message = `Następujące dane zostaną przesłane:\n\nImię: ${firstName}\nNazwisko: ${lastName}\nEmail: ${email}\nNumer telefonu: ${phoneNumber}\n\nWybrane produkty:\n${orderedItems}\n\nŁączna kwota do zapłaty: ${totalPrice} zł\n\nCzy chcesz przesłać te dane?`;

    if (window.confirm(message)) {
        window.location.href = `mailto:wymyslonymail@domena.net?subject=Zamówienie&body=Imię%3A%20${encodeURIComponent(firstName)}%0ANazwisko%3A%20${encodeURIComponent(lastName)}%0AEmail%3A%20${encodeURIComponent(email)}%0ANumer%20telefonu%3A%20${encodeURIComponent(phoneNumber)}%0A%0AWybrane%20produkty%3A%0A${encodeURIComponent(orderedItems)}%0A%0AŁączna%20kwota%20do%20zapłaty%3A%20${encodeURIComponent(totalPrice)}%20zł`;
    }

    return false;
}

document.addEventListener("DOMContentLoaded", function () {
    const totalPriceElement = document.querySelector('.total-price');

    totalPriceElement.addEventListener("mouseover", function () {
        const iconBefore = document.createElement('i');
        iconBefore.classList.add('ri-money-dollar-circle-line');
        iconBefore.style.marginRight = '5px';
        totalPriceElement.insertBefore(iconBefore, totalPriceElement.firstChild);

        const iconAfter = document.createElement('i');
        iconAfter.classList.add('ri-money-dollar-circle-line');
        iconAfter.style.marginLeft = '5px';
        totalPriceElement.appendChild(iconAfter);
    });

    totalPriceElement.addEventListener("mouseout", function () {
        totalPriceElement.removeChild(totalPriceElement.firstChild);
        totalPriceElement.removeChild(totalPriceElement.lastChild);
    });
});









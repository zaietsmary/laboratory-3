document.addEventListener('DOMContentLoaded', function () {
    const basketItemsContainer = document.querySelector('.books-container');
    const totalPriceElement = document.getElementById('total-price');
    const cartItems = localStorage.getItem('cart');
    let cart = cartItems ? JSON.parse(cartItems) : [];

    function displayBasketItems() {
        basketItemsContainer.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            basketItemsContainer.innerHTML = '<p>Ваш кошик порожній.</p>';
            totalPriceElement.textContent = '0₴';
            return;
        }

        cart.forEach((book, index) => {
            const priceNumber = parseFloat(book.price.replace('₴', ''));
            const itemTotal = priceNumber * (book.quantity || 1);
            total += itemTotal;

            const basketItem = document.createElement('div');
            basketItem.classList.add('book-card');
            basketItem.innerHTML = `
                <img src="${book.img}" alt="${book.title}">
                <div class="book-info">
                    <p class="book-title">${book.title}</p>
                    <p class="book-author">${book.author}</p>
                    <span class="book-price">${book.price} × ${book.quantity || 1} = ${itemTotal.toFixed(2)}₴</span>
                </div>
                <div class="quantity-control">
                    <button class="decrease-qty" data-index="${index}">–</button>
                    <span class="book-qty">${book.quantity || 1}</span>
                    <button class="increase-qty" data-index="${index}">+</button>
                    <button class="remove-from-basket cart-btn" data-index="${index}">Видалити</button>
                </div>
            `;
            basketItemsContainer.appendChild(basketItem);
        });

        totalPriceElement.textContent = `${total.toFixed(2)}₴`;
        attachActionListeners();
    }

    function attachActionListeners() {
        document.querySelectorAll('.remove-from-basket').forEach(button => {
            button.addEventListener('click', function () {
                const index = this.dataset.index;
                cart.splice(index, 1);
                updateCart();
            });
        });

        document.querySelectorAll('.increase-qty').forEach(button => {
            button.addEventListener('click', function () {
                const index = this.dataset.index;
                cart[index].quantity = (cart[index].quantity || 1) + 1;
                updateCart();
            });
        });

        document.querySelectorAll('.decrease-qty').forEach(button => {
            button.addEventListener('click', function () {
                const index = this.dataset.index;
                if ((cart[index].quantity || 1) > 1) {
                    cart[index].quantity -= 1;
                } else {
                    cart.splice(index, 1); 
                }
                updateCart();
            });
        });
    }

    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        displayBasketItems();
    }

    displayBasketItems();
});

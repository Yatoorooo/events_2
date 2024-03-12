"use strict";

const products = {
    electronics: [
        { name: 'Смартфон', description: 'Сучасний смартфон з великим екраном' },
        { name: 'Ноутбук', description: 'Потужний ноутбук для роботи та розваг' },
        { name: 'Планшет', description: 'Легкий та зручний планшет для читання та перегляду відео' }
    ],
    clothing: [
        { name: 'Футболка', description: 'Класична футболка з якісного матеріалу' },
        { name: 'Джинси', description: 'Зручні та модні джинси для будь-якої ситуації' },
        { name: 'Куртка', description: 'Тепла куртка для прохолодної погоди' }
    ],
    books: [
        { name: 'Роман', description: 'Цікавий роман для вечірнього читання' },
        { name: 'Детектив', description: 'Напружений детектив, який не відпустить до останньої сторінки' },
        { name: 'Наукова література', description: 'Корисна інформація для саморозвитку' }
    ]
};

function showProducts(category) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    for (let product of products[category]) {
        const productElement = document.createElement('div');
        productElement.textContent = product.name;
        productElement.classList.add('product');
        productElement.onclick = function() {
            showProductDetails(product);
        };

        productsContainer.appendChild(productElement);
    }
}

function showProductDetails(product) {
    const productName = document.getElementById('productName');
    const productDescription = document.getElementById('productDescription');
    const buyButton = document.getElementById('buyButton');

    productName.textContent = product.name;
    productDescription.textContent = product.description;
    buyButton.style.display = 'block';
}

function buyProduct() {
    alert('Товар куплений!');
    const productName = document.getElementById('productName');
    const productDescription = document.getElementById('productDescription');
    const buyButton = document.getElementById('buyButton');

    productName.textContent = '';
    productDescription.textContent = '';
    buyButton.style.display = 'none';
}
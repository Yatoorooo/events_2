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
function showOrderForm() {
    document.getElementById("orderForm").style.display = "block";
    document.getElementById("productInfo").style.display = "none";
}

function submitOrder(event) {
    event.preventDefault();

    let fullName = document.getElementById("fullName").value;
    let city = document.getElementById("city").value;
    let novaPoshtaBranch = document.getElementById("novaPoshtaBranch").value;
    let paymentType = document.querySelector('input[name="paymentType"]:checked').value;
    let quantity = document.getElementById("quantity").value;
    let comment = document.getElementById("comment").value;

    if (fullName && city && novaPoshtaBranch && paymentType && quantity) {
       
        let orderInfo = "Ім'я: " + fullName + "<br>";
        orderInfo += "Місто: " + city + "<br>";
        orderInfo += "Склад Нової пошти: " + novaPoshtaBranch + "<br>";
        orderInfo += "Тип оплати: " + paymentType + "<br>";
        orderInfo += "Кількість товару: " + quantity + "<br>";
        orderInfo += "Коментар: " + comment;

        document.getElementById("orderInfo").style.display = "block";
        document.getElementById("orderDetails").innerHTML = orderInfo;
        document.getElementById("orderForm").style.display = "none";
    } else {
        alert("Будь ласка, заповніть всі обов'язкові поля");
    }
}

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      
let orders = JSON.parse(localStorage.getItem('orders')) || [];

function saveOrder(order) {
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
}


function deleteOrder(index) {
    orders.splice(index, 1);
    localStorage.setItem('orders', JSON.stringify(orders));
    showMyOrders();
}


function showMyOrders() {
    let myOrdersDiv = document.getElementById('myOrders');
    myOrdersDiv.innerHTML = '';

    if (orders.length === 0) {
        myOrdersDiv.innerHTML = '<p>У вас немає замовлень</p>';
    } else {
        orders.forEach(function(order, index) {
            let orderDiv = document.createElement('div');
            orderDiv.classList.add('order');
            let orderDetailsDiv = document.createElement('div');
            orderDetailsDiv.classList.add('order-details');
            orderDiv.innerHTML = '<p>Дата: ' + order.date + '</p><p>Ціна: ' + order.price + '</p>';
            orderDiv.appendChild(orderDetailsDiv);
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Видалити';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.onclick = function() {
                deleteOrder(index);
            };
            orderDiv.appendChild(deleteBtn);
            myOrdersDiv.appendChild(orderDiv);
        });
    }
}
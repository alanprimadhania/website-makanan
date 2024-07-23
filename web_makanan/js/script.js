// Toggle Class Active
const navbarNav = document.querySelector('.navbar-nav');
// Ketika Hamburger Menu Di Klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Toggle Active untuk Search Form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// Toggle Active untuk Shopping Cart
const ShoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
    ShoppingCart.classList.toggle('active');
    e.preventDefault();
};


// Klik di Luar Elemen
const hamburger = document.querySelector('#hamburger-menu');
const searchButton = document.querySelector('#search-button');
const shoppingcart = document.querySelector('#shopping-cart-button');

document.addEventListener('click',function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
    }

    if(!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
    }

    if(!shoppingcart.contains(e.target) && !ShoppingCart.contains(e.target)) {
    ShoppingCart.classList.remove('active');
    }
});

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => { 
    
        btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    };
})


// Klik Tombol Close Modal
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
}

// Klik di Luar Modal
window.onclick = (e) => {
    if (e.target === itemDetailModal){
        itemDetailModal.style.display = 'none';
    }
};


/**variables */
const act = 'active';
const navSearchBtn = document.querySelector('.nav__left--search-box img'), navSearchBox = document.querySelector('.nav__left--search-box input');
const navShoppingCart = document.querySelector('.nav__left--shopping-cart-box img'), navShoppingCartBox = document.querySelector('.nav__left--shopping-cart-box div');
const mobileMenu = document.querySelector(".nav__left--mobile-menu"), mobileMenuBox = document.querySelector(".mobile-menu");

/**events */
navSearchBtn.addEventListener('click', event => {
    if (navSearchBox.classList.contains(act)) {
        navSearchBox.classList.remove(act);
    } else {
        navSearchBox.classList.add(act);
        if (navShoppingCartBox.classList.contains(act)) {
            navShoppingCartBox.classList.remove(act);
        }
    }
});

navSearchBox.addEventListener('blur', event => {
    if (navSearchBox.classList.contains(act)) {
        navSearchBox.classList.remove(act);
    }
});

navShoppingCart.addEventListener('click', event => {
    if (navShoppingCartBox.classList.contains(act)) {
        navShoppingCartBox.classList.remove(act);
    } else {
        navShoppingCartBox.classList.add(act);
        if (navSearchBox.classList.contains(act)) {
            navSearchBox.classList.remove(act);
        }
    }
});

mobileMenu.addEventListener('click', event => {
    if (mobileMenuBox.classList.contains(act)) {
        mobileMenuBox.classList.remove(act);
    } else {
        mobileMenuBox.classList.add(act);
    }
});
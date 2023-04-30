document.querySelector('#icon2').onclick =()=>{
    search.classList.toggle('active');
    cart.classList.remove('active');
    user.classList.remove('active');
}

let cart = document.querySelector('.cart');

document.querySelector('#icon3').onclick =()=>{
    cart.classList.toggle('active');
    search.classList.remove('active');
    user.classList.remove('active');
}
let user = document.querySelector('.user');

document.querySelector('#icon4').onclick =()=>{
    user.classList.toggle('active');
    cart.classList.remove('active');
    search.classList.remove('active');
}

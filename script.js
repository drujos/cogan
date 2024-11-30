// Open and close pop-up
document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-product');
        document.getElementById('popup-product').innerText = `Anda memesan: ${productName}`;
        document.getElementById('order-popup').style.display = 'flex';
    });
});

document.querySelector('.close-popup').addEventListener('click', () => {
    document.getElementById('order-popup').style.display = 'none';
});

// Form submission (dummy alert)
document.getElementById('order-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Pesanan Anda telah dikirim!');
    document.getElementById('order-popup').style.display = 'none';
});

// Contact Popup
const contactPopup = document.getElementById('contact-popup');
const contactPopupBtn = document.getElementById('contact-popup-btn');
const closePopupContact = document.querySelector('#contact-popup .close-popup');

contactPopupBtn.addEventListener('click', () => {
    contactPopup.style.display = 'flex';
});

closePopupContact.addEventListener('click', () => {
    contactPopup.style.display = 'none';
});

// Close popup when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === contactPopup) {
        contactPopup.style.display = 'none';
    }
});

let km = prompt("Quanti Km devi percorrere?");
let age = prompt("Quanti anni hai?");
const priceKm = 0.21;
let price = km * priceKm;
const element = document.getElementById('price');

if (age < 18) {
    const calculateDiscount = price - (price * 20 / 100);
    element.innerHTML = `Il prezzo del biglietto è: ${calculateDiscount}`;
} else if (age > 65) {
    const calculateDiscount = price - (price * 40 / 100);
    element.innerHTML = `Il prezzo del biglietto è: ${calculateDiscount}`;
} else {
    element.innerHTML = `Il prezzo del biglietto è: ${price}`;
}
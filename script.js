let km = prompt ("Quanti Km devi percorrere?");

let age = prompt ("Quanti anni hai?");

const priceKm = ("0.21");

const euro = ("\u20AC");

let price = km * priceKm + euro;

if (age < 18) {
    const calculateDiscount = ((price) * (20) / (100));
} else if (age > 65) {
    const calculateDiscount = ((price) * (40) / (100));
} else {
    const calculateDiscount = (price);
}

if (age < 18) {
    document.getElementById("price").innerHTML = `Il prezzo del biglietto è: ${price} + ${calculateDiscount}`;
} else if (age > 65) {
    document.getElementById("price").innerHTML = `Il prezzo del biglietto è: ${price} + ${calculateDiscount}`;
} else {
    document.getElementById("price").innerHTML = `Il prezzo del biglietto è: ${price}`;
}

// document.getElementById("price").innerHTML = `Il prezzo del biglietto è: ${price} + ${calculateDiscount}`;
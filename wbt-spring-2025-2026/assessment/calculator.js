const TAX_RATE = 0.05;

const originalPriceInput = document.getElementById('original-price');
const discountInput = document.getElementById('discount');
const finalPriceInput = document.getElementById('final-price');

const priceError = document.getElementById('price-error');
const discountError = document.getElementById('discount-error');

const taxRateDisplay = document.getElementById('tax-rate');

let budgetAlertShown = false;

taxRateDisplay.textContent = "5%";

function updateFinalPrice() {

    let price = Number(originalPriceInput.value);
    let discount = Number(discountInput.value);

    if (Number.isNaN(price)) price = 0;
    if (Number.isNaN(discount)) discount = 0;

    if (price < 0) {
        price = 0;
        originalPriceInput.value = 0;
        priceError.textContent = "Price cannot be less than 0.";
    } else {
        priceError.textContent = "";
    }

    if (discount < 0) {
        discount = 0;
        discountInput.value = 0;
        discountError.textContent = "Discount cannot be less than 0.";
    }
    else if (discount > 100) {
        discount = 100;
        discountInput.value = 100;
        discountError.textContent = "Discount cannot exceed 100%.";
    }
    else {
        discountError.textContent = "";
    }

    const discountAmount = price * (discount / 100);
    const priceAfterDiscount = price - discountAmount;
    const tax = priceAfterDiscount * TAX_RATE;

    const finalPrice = priceAfterDiscount + tax;

    finalPriceInput.value = `৳${finalPrice.toFixed(2)}`;

    if (finalPrice < 500 && !budgetAlertShown) {
        alert("Congratulations! You unlocked a Budget Deal!");
        budgetAlertShown = true;
    }

    if (finalPrice >= 500) {
        budgetAlertShown = false;
    }

}

originalPriceInput.addEventListener("input", updateFinalPrice);
discountInput.addEventListener("input", updateFinalPrice);

updateFinalPrice();
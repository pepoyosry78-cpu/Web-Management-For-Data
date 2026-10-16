let Title = document.getElementById("Title");
let Price = document.getElementById("Price");
let Taxes = document.getElementById("Taxes");
let ADS = document.getElementById("ADS");
let Discount = document.getElementById("Discount");
let Count = document.getElementById("Count");
let category = document.getElementById("category");
let Total = document.getElementById("Total");

function CalcTotal() {
    if (Price.value != "") {
        let result = (+Price.value + +Taxes.value + +ADS.value) - +Discount.value;
        Total.innerHTML = result;
        Total.style.backgroundColor = "#040";
    } else {
        Total.innerHTML = "";
        Total.style.backgroundColor = "#a00d02";
    }
}
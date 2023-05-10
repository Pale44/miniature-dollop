//querying web elements

const purchase1Price = document.getElementById("firstPurchase").value;
const purchase1Amount = document.getElementById("firstAmount").value;

const purchase2Price = document.getElementById("secondPurchase").value;
const purchase2Amount = document.getElementById("secondAmount").value;

const currentStockPrice = document.getElementById("currStockPrice").value;
const btn = document.querySelector("button");
const p = document.querySelector("span");

//declaring variables
let avgPurchasePrice = (purchase1Price * purchase1Amount + purchase2Price * purchase2Amount) / (purchase1Amount + purchase2Amount);
let newPurchaseAmount;
let test = purchase1Amount + purchase1Price;

//function computing the values
function getAmount() {
    newPurchaseAmount = (purchase1Amount + purchase2Amount) * currentStockPrice / avgPurchasePrice * 33;
    p.innerHTML = test;

}

btn.addEventListener("click", getAmount);

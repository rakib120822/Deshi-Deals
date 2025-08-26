const validPin = 1234;

const cartData = [];
function getTitle(id) {
  return document.getElementById(id).innerText;
}

function getPrice(id) {
  return Number(document.getElementById(id).innerText);
}

function costCalculation(price) {
  let totalPrice = getPrice("total-price");
  const currCost = totalPrice + price;

  document.getElementById("total-price").innerText = currCost;
  document.getElementById("total").innerText = currCost;
}

function discount(discountPercentage) {
  const price = getPrice("total-price");
  const discount = price * discountPercentage;

  document.getElementById("total-discount").innerText = discount;
  document.getElementById("total").innerText = price - discount;
}

function cartCard(title, price, img) {
  const div = document.createElement("div");
  div.innerHTML = `<div >
                            <div class="flex justify-between items-center  px-3 py-1 rounded-md bg-[#1111110D]"><div><img src=${img} class="w-12" alt="" srcset="">
                            </div>
                            <div><h1 id="item-title">${title}</h1>
                            <p><span id="item-price">${price}</span> TK</p></div>
                        </div>
                        </div>`;

  document.getElementById("cart-item-container").appendChild(div);
}

// kitchen_section

document
  .getElementById("cart-btn-kitchen-1")
  .addEventListener("click", function () {
    const title = getTitle("kitchen-title-1");
    const price = getPrice("kitchen-price-1");
    costCalculation(price);
    cartCard(title, price, "./assets/kitchen-1.png");
  });
document
  .getElementById("cart-btn-kitchen-2")
  .addEventListener("click", function () {
    const title = getTitle("kitchen-title-2");
    const price = getPrice("kitchen-price-2");
    costCalculation(price);
    cartCard(title, price, "./assets/kitchen-2.png");
  });
document
  .getElementById("cart-btn-kitchen-3")
  .addEventListener("click", function () {
    const title = getTitle("kitchen-title-3");
    const price = getPrice("kitchen-price-3");
    costCalculation(price);
    cartCard(title, price, "./assets/kitchen-3.png");
  });

document.getElementById("coupon-btn").addEventListener("click", function () {
  const pin = Number(document.getElementById("coupon-pin").value);
  if (pin === validPin) {
    discount(0.3);
  } else {
    discount(0);
  }
});

// sport_section
document
  .getElementById("cart-btn-sport-1")
  .addEventListener("click", function () {
    const title = getTitle("sport-title-1");

    const price = getPrice("sport-price-1");
    costCalculation(price);
    cartCard(title, price, "./assets/sports-1.png");
  });
document
  .getElementById("cart-btn-sport-2")
  .addEventListener("click", function () {
    const title = getTitle("sport-title-2");
    const price = getPrice("sport-price-2");
    costCalculation(price);
    cartCard(title, price, "./assets/sports-2.png");
  });
document
  .getElementById("cart-btn-sport-3")
  .addEventListener("click", function () {
    const title = getTitle("sport-title-3");
    const price = getPrice("sport-price-3");
    costCalculation(price);
    cartCard(title, price, "./assets/sports-3.png");
  });

//   furniture_section

document
  .getElementById("cart-btn-furniture-1")
  .addEventListener("click", function () {
    const title = getTitle("furniture-title-1");
    const price = getPrice("furniture-price-1");
    costCalculation(price);
    cartCard(title, price, "./assets/furniture-1.png");
  });

document
  .getElementById("cart-btn-furniture-2")
  .addEventListener("click", function () {
    const title = getTitle("furniture-title-2");
    const price = getPrice("furniture-price-2");
    costCalculation(price);
    cartCard(title, price, "./assets/furniture-2.png");
  });

document
  .getElementById("cart-btn-furniture-3")
  .addEventListener("click", function () {
    const title = getTitle("furniture-title-3");
    const price = getPrice("furniture-price-3");
    costCalculation(price);
    cartCard(title, price, "./assets/furniture-3.png");
  });

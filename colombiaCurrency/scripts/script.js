// Targeting the correct element to receive daily value
let fromCurrency = document.querySelector(".exchange-rate span");
getButton = document.querySelector("form button");

function changeBg() {
  // Array of images located in asset directory
  const images = [
    'url("./assets/img-1.jpg")',
    'url("./assets/img-2.jpg")',
    'url("./assets/img-3.jpg")',
    'url("./assets/img-4.jpg")',
    'url("./assets/img-5.jpg")',
    'url("./assets/img-6.jpg")',
    'url("./assets/img-7.jpg")',
    'url("./assets/img-8.jpg")',
    'url("./assets/img-9.jpg")',
    'url("./assets/img-10.jpg")',
    'url("./assets/img-11.jpg")',
  ];
  const body = document.querySelector("body");
  // Used to randomly apply a background image
  const bg = images[Math.floor(Math.random() * images.length)];
  // wanted to use a forEach loop because it seemed more elegant. "Wanted" is the keyword here. 😒
  //   const bg = images.forEach(ele => {
  //     console.log(ele);
  //   });
  body.style.backgroundImage = bg;

  //   In the end @keyframes was used to change background images but now when i comment this functionality out it breaks the site. lol.
}

setInterval(changeBg, 5000);

window.addEventListener("load", () => {
  getExchangeRate();
});

getButton.addEventListener("click", e => {
  // Prevents form submittal
  e.preventDefault();
  //   grabs todays rate
  getExchangeRate();
});

function getExchangeRate() {
  let url = `https://v6.exchangerate-api.com/v6/86782f46550ab3f6de5d507c/pair/USD/COP`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      let exchangeRate = data.conversion_rate;
      // console.log(exchangeRate);
      fromCurrency.innerHTML = exchangeRate.toFixed(2);
      let amountVal = document.querySelector(".amount input").value;

      let grandTotal = (amountVal * exchangeRate).toFixed(2);
      // console.log(fromCurrency);
      let totalExchangeRate = document.querySelector(".total-info span");
      totalExchangeRate.innerText = grandTotal;
      console.log(grandTotal);
      console.log("1");
    });
}

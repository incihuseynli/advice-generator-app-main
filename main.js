const container = document.querySelector(".container");
const button = document.querySelector(".dice");
const adviceURL = "https://api.adviceslip.com/advice";

fetch(adviceURL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const info = `
        <h4 class="title">ADVICE #${data.slip.id}</h4>
        <p class="advice-text">
          "${data.slip.advice}"
        </p>
        <img src="./images/pattern-divider-mobile.svg" alt="" />
        <button class="dice" onclick=newAdvice()>
          <img src="./images/icon-dice.svg" alt="" />
        </button>
        `;
    container.innerHTML += info;
  });

function newAdvice() {
  window.location.reload();
}

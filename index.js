//Constants
//State bank array and odd & even arrays
let Nums = [];
let Odds = [];
let Evens = [];
// Render Function BABYYYY!
function renderArrays() {
  const container = document.getElementById("app");
  container.innerHTML = `
  <p>Unsorted Numbers:${Nums.join(", ")}</p>
  <p>Even Numbers:${Evens.join(", ")}</p>
  <p>Odd Numbers:${Odds.join(", ")}</p>
  `;
}

// render buttons
function renderButtons() {
  const formInput = document.querySelector("input[name='Nums']");
  const form = document.querySelector("form");
  //Add Number Button & Event
  const addButton = document.createElement("button");
  addButton.textContent = "Add Number";
  addButton.addEventListener("click", (event) => {
    let value = Number(formInput.value);
    Nums.push(value);
    renderArrays(Nums, Odds, Evens);
    event.preventDefault();
  });
  //sort 1 Button & Event
  const sort1Button = document.createElement("button");
  sort1Button.textContent = "Sort First Number";
  sort1Button.addEventListener("click", function sort() {
    let value = Nums.shift();
    if (value % 2 === 0) {
      Evens.push(value);
    } else if (value % 2 !== 0) {
      Odds.push(value);
    }
    renderArrays(Nums, Odds, Evens);
    event.preventDefault();
  });
  //sort all Button & Event
  const sortAllButton = document.createElement("button");
  sortAllButton.textContent = "Sort All Numbers";
  sortAllButton.addEventListener("click", () => {
    while (Nums.length > 0) {
      let value = Nums.shift();
      if (value % 2 === 0) {
        Evens.push(value);
      } else if (value % 2 !== 0) {
        Odds.push(value);
      }
    }
    renderArrays(Nums, Odds, Evens);
    event.preventDefault();
  });
  document.querySelector("form").appendChild(addButton);
  document.querySelector("form").appendChild(sort1Button);
  document.querySelector("form").appendChild(sortAllButton);
}
renderArrays();
renderButtons();

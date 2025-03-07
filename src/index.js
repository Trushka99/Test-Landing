import "./scss/index.scss";
const customSelect = document.querySelector(".order__select");
const selectBtn = document.querySelector(".order__select-button");
const selectedValue = document.querySelector(".order__selected-value");
const optionsList = document.querySelectorAll(".order__dropdown li");
const submitButton = document.querySelector(".order__button");
const label = document.getElementById("label");
const headerButton = document.querySelector(".header__menu");
const headerList = document.querySelector(".header__list");
const inputRange = document.querySelector(".order__range-input");

// add a click event to select button
selectBtn.addEventListener("click", () => {
  // add/remove active class on the container element
  customSelect.classList.toggle("active");
  selectBtn.classList.toggle("active");
});
optionsList.forEach((option) => {
  function handler(e) {
    // Click Events
    if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
      selectedValue.textContent = this.children[1].textContent;
      customSelect.classList.remove("active");
    }
    // Key Events
    if (e.key === "Enter") {
      selectedValue.textContent = this.textContent;
      customSelect.classList.remove("active");
    }
  }

  option.addEventListener("keyup", handler);
  option.addEventListener("click", handler);
});
function updateTextInput(e) {
  label.textContent = `${e.target.value}%`;
}
function pressSubmit(e) {
  e.preventDefault();

  const form = e.target.form;
  const formData = new FormData(form);

  const data = Object.fromEntries(formData.entries());
  console.log("Form Data as object:", data);
}
submitButton.addEventListener("click", pressSubmit);

function showHeaderMenu() {
  headerList.classList.toggle("active");
}
headerButton.addEventListener("click", showHeaderMenu);
inputRange.addEventListener("input", updateTextInput);

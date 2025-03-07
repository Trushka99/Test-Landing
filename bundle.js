/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

var customSelect = document.querySelector(".order__select");
var selectBtn = document.querySelector(".order__select-button");
var selectedValue = document.querySelector(".order__selected-value");
var optionsList = document.querySelectorAll(".order__dropdown li");
var submitButton = document.querySelector(".order__button");
var label = document.getElementById("label");
var headerButton = document.querySelector(".header__menu");
var headerList = document.querySelector(".header__list");
var inputRange = document.querySelector(".order__range-input");

// add a click event to select button
selectBtn.addEventListener("click", function () {
  // add/remove active class on the container element
  customSelect.classList.toggle("active");
  selectBtn.classList.toggle("active");
});
optionsList.forEach(function (option) {
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
  label.textContent = "".concat(e.target.value, "%");
}
function pressSubmit(e) {
  e.preventDefault();
  var form = e.target.form;
  var formData = new FormData(form);
  var data = Object.fromEntries(formData.entries());
  console.log("Form Data as object:", data);
}
submitButton.addEventListener("click", pressSubmit);
function showHeaderMenu() {
  headerList.classList.toggle("active");
}
headerButton.addEventListener("click", showHeaderMenu);
inputRange.addEventListener("input", updateTextInput);
/******/ })()
;
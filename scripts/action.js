"use strict";
const submitButton = document.getElementById("submit");
const inputLists = document.getElementsByClassName("input-box");

function emptyForm(item) {
  let fieldName = item.children[0].name;
  item.classList.add("error");
  item.children[2].innerHTML = `${fieldName} cannot be empty`;
}

function checkEmail(item) {
  let validRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  let fieldValue = item.children[0].value;
  if (!fieldValue.match(validRegex)) {
    if (!item.classList.contains("error")) {
      item.classList.add("error");
    }
    item.children[2].innerHTML = "Looks like this is not an email";
  } else {
    item.classList.remove("error");
    item.classList.add("success");
  }
}

function checkPassword(item) {
  let validRegex = /^[a-zA-Z0-9]+$/;
  let fieldValue = item.children[0].value;
  if (!fieldValue.match(validRegex)) {
    if (!item.classList.contains("error")) {
      item.classList.add("error");
    }
    item.children[2].innerHTML =
      "Password should contain alphabets and numbers";
  } else {
    item.classList.remove("error");
    item.classList.add("success");
  }
}

const validateForm = () => {
  for (let i = 0; i < inputLists.length; i++) {
    let childs = inputLists[i].children[0];
    if (childs.value == "") {
      emptyForm(inputLists[i]);
    } else if (childs.name == "Email") {
      checkEmail(inputLists[i]);
    } else if (childs.name == "Password") {
      checkPassword(inputLists[i]);
    } else {
      inputLists[i].classList.add("success");
      inputLists[i].classList.remove("error");
    }
  }
};

submitButton.onclick = validateForm;

"use strict";

// initializing variable containing required DOM element
const submitButton = document.getElementById("submit");
// inputLists contains collection of elements containing class name input-box
const inputLists = document.getElementsByClassName("input-box");

// fucntion to style empty input fields
function emptyForm(item) {
  let fieldName = item.children[0].name;
  item.classList.add("error");
  item.children[2].innerHTML = `${fieldName} cannot be empty`;
}

/*******
    function to check for valid email *
 ******/
function checkEmail(item) {
  // regular expression for valid email
  let validRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  let fieldValue = item.children[0].value;

  // checking for regex match and applying style accordingly
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

/*******
    function to check for valid password
 ******/
function checkPassword(item) {
  // regular expression for valid password
  let validRegex = /^[a-zA-Z0-9]+$/;
  let fieldValue = item.children[0].value;

  // checking for regex match and applying style accordingly
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

/*******
  fucnction for validating form input elements
 ******/
const validateForm = () => {
  // looping through each child in collection inputLists
  for (let i = 0; i < inputLists.length; i++) {
    // selecting input field (each child of inputLists contain 3 elements namely input img and p)
    // img is for error icon and p is for error message (check index.html)
    let childs = inputLists[i].children[0];

    // checking if input field is empty also for valid email and password input field
    // else style for success
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

/*******
    adding onclick function to submit button
 ******/
submitButton.onclick = validateForm;

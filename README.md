# Frontend Mentor - Intro component  with SignUp Form solution

This is a solution to the [Intro component with signup form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![screenshot](images/screenshot.png)

### Links

- Solution URL: [Solution](https://github.com/Himanshu-196018/intro-component-with-signup-form-challenge)
- Live Site URL: [Demo/site](https://himanshu-196018.github.io/intro-component-with-signup-form-challenge/)

## My process

### Built with

- Semantic HTML5 markup
- Sass/CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

This project provided a valuable learning experience for me. I learned to validate multiple form input together with just a single click of a button through JS.

- I added a click function on a button and validate each input through that function

```
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

```

### Useful resources

- [Markdown](https://www.markdownguide.org/) - This helped me to understand and write down markdown.

## Author

- Website - [Himanshu]("")
- Github - [@Himanshu_196018](https://github.com/Himanshu-196018)
- LinkedIn - [@Himanshu](www.linkedin.com/in/himanshu-kumar-2b7993167)

## Acknowledgments

I would personally recommend to checkout [Frontend Mentor](https://www.frontendmentor.io/). This is a very useful site, it will help you to improve your Frontend Developing skills by building projects through challanges.

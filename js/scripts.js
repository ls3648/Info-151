Fancybox.bind();

AOS.init({
    duration: 3000,
});

// const container = document.getElementById("myCarousel");
const container = document.querySelector("#myCarousel");

const options = { infinite: true };

new Carousel(container, options);

/* ------------------
    Navigation
------------------- */

// var sectionTags = document.querySelector(".myClass");
var mainNav = document.querySelector("#mainNav");
var buttonContainer = document.querySelector("#buttons-container");
var burgerBtn = document.querySelector("#burger-container");
var burgerBars = document.querySelector("#burger-bars");
var burgerX = document.querySelector("#burger-x");

// initial condition statement, this can only be true or false since it's a boolean
var canYouSeeMainNav = false;

function showNav(){
    // if the initial condition is met, do something
    if(canYouSeeMainNav == false) {
        console.log("show menu");
        // this will add the class of showMainNav to the id mainNav
        mainNav.classList.add("showMainNav");
        // this will add the class of showButton to the id buttonContainer
        buttonContainer.classList.add("showButton");
        // sets boolean to true
        canYouSeeMainNav=true;
        // hide burger
        burgerBars.classList.add("hide-burger-bars");
        //show burger x
        burgerX.classList.remove("hide-burger-x");
    }
    else{
        console.log("hide menu");
        // this will remove the class of showMainNav from the id mainNav
        mainNav.classList.remove("showMainNav");
        // this will remove the class of showButton from the id buttonContainer
        buttonContainer.classList.remove("showButton");
        // show burger
        burgerBars.classList.remove("hide-burger-bars");
        // hide burger x
        burgerX.classList.add("hide-burger-x");
        // sets boolean back to initial state of false
        canYouSeeMainNav=false;
    }
}

// add a event listener to the button
burgerBtn.addEventListener("click",showNav);


/* ------------------
    Sign In
------------------- */

var signInBtn = document.querySelector("#sign-in-btn");
var signInContainer = document.querySelector("#sign-in-container");
var closeSignInModalBtn = document.querySelector("#close-sign-in-modal-btn");

function showSignInModal() {
    console.log("show sign in modal");
    // this will show sign in container
    signInContainer.classList.add("show-Sign-In-Container");
    mainNav.classList.remove("showMainNav");
    buttonContainer.classList.remove("showButton");
    burgerBars.classList.remove("hide-burger-bars");
    burgerX.classList.add("hide-burger-x");
    canYouSeeMainNav=false;
}
function hideSignInModal() {
    console.log("hide sign in modal");
    // this will remove sign in container
    signInContainer.classList.remove("show-Sign-In-Container");
}

signInBtn.addEventListener("click", showSignInModal);
closeSignInModalBtn.addEventListener("click", hideSignInModal);

/* ------------------
    Sign Up
------------------- */

var signUpBtn = document.querySelector("#sign-up-btn");
var signUpContainer = document.querySelector("#sign-up-container");
var cancelSignUpModalBtn = document.querySelector("#cancel-sign-up-modal-btn");

function showSignUpModal() {
    console.log("show sign up modal");
    // this will show sign up container
    signUpContainer.classList.add("show-Sign-Up-Container");
    mainNav.classList.remove("showMainNav");
    buttonContainer.classList.remove("showButton");
    burgerBars.classList.remove("hide-burger-bars");
    burgerX.classList.add("hide-burger-x");
    canYouSeeMainNav=false;
}
function hideSignUpModal() {
    console.log("hide sign up modal");
    // this will remove sign up container
    signUpContainer.classList.remove("show-Sign-Up-Container");
}

signUpBtn.addEventListener("click", showSignUpModal);
cancelSignUpModalBtn.addEventListener("click", hideSignUpModal);

/* --------------------------------
    My bad Week 7 - Navigation code
--------------------------------- */

// // alert("Hello Class!");////////////

// var mainNav = document.querySelector("#mainNav");
// var buttonContainer = document.querySelector("#buttons-container");
// var burgerBtn = document.querySelector("#burger-container button")
// console.log(burgerBtn);

// var canYouSeeMainNav = false;

// // var sectionTags = document.querySelector(".myClass");/////////

// function showNav(){
//     console.log("button clicked");
//     if(canYouSeeMainNav == false){
//         // this will add the class of showMainNav to the id mainNav/////////
//         mainNav.classList.add("showMainNav");

//         buttonContainer.classList.add("showMainNav");
//         canYouSeeMainNav=true;
//     }else{
//         // this will add the class of showMainNav to the id mainNav//////////
//         mainNav.classList.remove("showMainNav");

//         buttonContainer.classList.remove("showMainNav");

//         canYouSeeMainNav=false;
//     }
// }

// // add a event listener to the button/////////
// burgerBtn.addEventListener("click",showNav);

// // will call a function with the name of showNav//////////
// // showNav();/////////////

// alert("Hello Class!");////////////

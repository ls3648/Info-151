/* ------------------
    Navigation
------------------- */

// var sectionTags = document.querySelector(".myClass");
var mainNav = document.querySelector("#mainNav");
var buttonContainer = document.querySelector("#buttons-container");
var burgerBtn = document.querySelector("#burger-container");

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
    }
    else{
        console.log("hide menu");
        // this will remove the class of showMainNav from the id mainNav
        mainNav.classList.remove("showMainNav");
        // this will remove the class of showButton from the id buttonContainer
        buttonContainer.classList.remove("showButton");
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
    console.log("show modal now");
    signInContainer.classList.add("show-Sign-In-Container");
    mainNav.classList.remove("showMainNav");
    buttonContainer.classList.remove("showButton");
    canYouSeeMainNav=false;
}
function hideSignInModal() {
    console.log("hide modal now");
    signInContainer.classList.remove("show-Sign-In-Container");
}

signInBtn.addEventListener("click", showSignInModal);
closeSignInModalBtn.addEventListener("click", hideSignInModal);





/* --------------------------
    Week 7 - Navigation
--------------------------- */

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

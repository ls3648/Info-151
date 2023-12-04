/* ------------------
    Navigation
------------------- */

// var sectionTags = document.querySelector(".myClass");
var mainNav = document.querySelector("#mainNav");
var buttonContainer = document.querySelector("#buttons-container");
var burgerBtn = document.querySelector("#burger-container button");

// this can only be true or false since it's a boolean
var canYouSeeMainNav = false;

function showNav(){
    // console.log("button clicked");
    if(canYouSeeMainNav == false){
        console.log("show menu");
        // this will add the class of showMainNav to the id mainNav
        mainNav.classList.add("showMainNav");

        buttonContainer.classList.add("showButton");
        
        canYouSeeMainNav=true;
    }
    else{
        console.log("hide menu");
        // this will add the class of showMainNav to the id mainNav
        mainNav.classList.remove("showMainNav");

        buttonContainer.classList.remove("showButton");

        canYouSeeMainNav=false;
    }
}

// add a event listener to the button
burgerBtn.addEventListener("click",showNav);


/* ------------------
    Sign In
------------------- */

var signInBtn = document.querySelector("#sign-in-btn");

function showSignInModal() {
    console.log("show modal now");
}

signInBtn.addEventListener("click", showSignInModal);





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

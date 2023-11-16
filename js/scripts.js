// alert("Hello Class!");

var mainNav = document.querySelector("#mainNav");

var buttonContainer = document.querySelector("#buttons-container");

var burgerBtn = document.querySelector("#burger-container button")
console.log(burgerBtn);

var canYouSeeMainNav = false;

// var sectionTags = document.querySelector(".myClass");

function showNav(){
    console.log("button clicked");
    if(canYouSeeMainNav == false){
        // this will add the class of showMainNav to the id mainNav
        mainNav.classList.add("showMainNav");

        buttonContainer.classList.add("showMainNav");


        canYouSeeMainNav=true;
    }else{
        // this will add the class of showMainNav to the id mainNav
        mainNav.classList.remove("showMainNav");
        buttonContainer.classList.remove("showMainNav");

        canYouSeeMainNav=false;
    }
}

// add a event listener to the button
burgerBtn.addEventListener("click",showNav);

// will call a function with the name of showNav
// showNav();
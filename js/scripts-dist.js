var mainNav=document.querySelector("#mainNav"),buttonContainer=document.querySelector("#buttons-container"),burgerBtn=document.querySelector("#burger-container"),burgerBars=document.querySelector("#burger-bars"),burgerX=document.querySelector("#burger-x"),canYouSeeMainNav=!1;function showNav(){0==canYouSeeMainNav?(console.log("show menu"),mainNav.classList.add("showMainNav"),buttonContainer.classList.add("showButton"),canYouSeeMainNav=!0,burgerBars.classList.add("hide-burger-bars"),burgerX.classList.remove("hide-burger-x")):(console.log("hide menu"),mainNav.classList.remove("showMainNav"),buttonContainer.classList.remove("showButton"),burgerBars.classList.remove("hide-burger-bars"),burgerX.classList.add("hide-burger-x"),canYouSeeMainNav=!1)}burgerBtn.addEventListener("click",showNav);var signInBtn=document.querySelector("#sign-in-btn"),signInContainer=document.querySelector("#sign-in-container"),closeSignInModalBtn=document.querySelector("#close-sign-in-modal-btn");function showSignInModal(){console.log("show modal now"),signInContainer.classList.add("show-Sign-In-Container"),mainNav.classList.remove("showMainNav"),buttonContainer.classList.remove("showButton"),burgerBars.classList.remove("hide-burger-bars"),burgerX.classList.add("hide-burger-x"),canYouSeeMainNav=!1}function hideSignInModal(){console.log("hide modal now"),signInContainer.classList.remove("show-Sign-In-Container")}signInBtn.addEventListener("click",showSignInModal),closeSignInModalBtn.addEventListener("click",hideSignInModal);
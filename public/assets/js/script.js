// open and close nav

navMenu = document.querySelector(".nav-menu");
menuIcon = document.querySelector(".nav .menu-icon");
closeIcon = document.querySelector(".nav .close-icon");

menuIcon.addEventListener('click', showMenu);
closeIcon.addEventListener('click', hideMenu);

function showMenu(){
    navMenu.classList.add("active");
}

function hideMenu(){
    navMenu.classList.remove("active");
}


// move left animation for nav li's
// liTags = document.querySelectorAll(".nav-link-group li");
// for(let i = 0; i < liTags.length; i++){
//     liTags.addEventListener('click', toggleActive);
// }

// function toggleActive(){
    
// }


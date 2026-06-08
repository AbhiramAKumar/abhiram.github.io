window.addEventListener("scroll", () => {

const nav = document.querySelector("nav");

if(window.scrollY > 50){
    nav.style.background = "#050505";
}
else{
    nav.style.background = "#000";
}

});

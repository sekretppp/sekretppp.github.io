function showMenu(toggle, menu){
    const toggleMenu = document.getElementById(toggle)
    const sideMenu = document.getElementById(menu);
    
    if(toggleMenu && sideMenu){
        toggleMenu.addEventListener("click", function(){
           sideMenu.classList.toggle('active-menu');
       })
    }
}
showMenu("header-toggle", "header-menu");
const swipeer = new Swiper(".mainscreen_container", {
    loop: true,
    speed: 400,
    effect: "",
    grabCursor: true,
    keyboard:{
        enable: true,
    },
    autoplay:{
        delay:5000,
        disableOnInteraction: false,
    },
    navigation: {
        prevEl: ".arrow-left",
        nextEl: ".arrow-right",   
    },
})

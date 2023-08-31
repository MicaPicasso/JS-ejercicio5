const sideBar= document.querySelector(".links");
const toggleButton= document.querySelector(".toggle-button");
const closeButton= document.querySelector(".close-button");

toggleButton.addEventListener("click", function(){
    sideBar.classList.toggle("show-sidebar")
  
})

closeButton.addEventListener("click", function(){
        sideBar.classList.remove("show-sidebar")

})
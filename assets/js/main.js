let dropdown = $(".dropdown"),
  dropdownMenu = $(".dropdown-menu"),
  navMenu = $(".nav-menu"),
  asideMenu = $("#aside"),
  toggleMenu = $(".toggle-menu")

// Dropdown menu funtionally
dropdown.addEventListener("click", function (e) {
  dropdownMenu.classList.toggle("show-dropdown");
});


// Navigation menu funtionally

function renderNavigationMenu(data) {
  if (data.length) {
    data.forEach((el) => {
      const listItem = createElement(
        "li",
        classListItem,
        `<a href="${el.link} class="gap-x-[12px] text-xl flex items-center">
             <i class="bi ${el.icon} text-2xl"></i>
             <span>${el.title}</span> </a>`
      );

      navMenu.appendChild(listItem);
    });
  }
}

renderNavigationMenu(navigationMenu);

toggleMenu.addEventListener("click", () => {
  asideMenu.classList.toggle("hide-aside");
});



(function(){
let token = localStorage.getItem("token")


if(!token){
    window.location.href = "../../pages/login.html"
}
}())


function logOut(){
    localStorage.removeItem("token")
    window.location.href = "../../pages/login.html"
}
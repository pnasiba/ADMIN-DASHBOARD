let dropdown = $(".dropdown"),
  dropdownMenu = $(".dropdown-menu"),
  navMenu = $(".nav-menu")



// Dropdown menu funtionally
dropdown.addEventListener("click", function(e){
    e.preventDefault()
    dropdownMenu.classList.toggle("show-dropdown")
})

// window.addEventListener("click", function(e){
    

//     if(e.target.nodeName!="HTML"){

//         if(!e.target.parentNode.classList.contains("dropdown-menu") || !e.target.parentNode.classList.contains("dropdown")){
//             dropdownMenu.classList.add("show-dropdown")
//         } else{
//             dropdownMenu.classList.remove("show-dropdown");
//         }
//     } else{
//             dropdownMenu.classList.remove("show-dropdown");
//     }

// })

// Navigation menu funtionally


  function renderNavigationMenu(data){
    if(data.length){
        data.forEach(el => {
            const listItem = createElement("li",classListItem, 
            `<a href="${el.link} class="gap-x-[12px] text-xl flex items-center">
             <i class="bi ${el.icon} text-2xl"></i>
             <span>${el.title}</span> </a>`);

            navMenu.appendChild(listItem)
        });
    }
  }

  renderNavigationMenu(navigationMenu)
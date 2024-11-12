const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".dark-light"),
  searchToggle = document.querySelector(".searchToggle"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  sidebarClose = document.querySelector(".sidebarClose");

  const filterContainer = document.querySelector(".gallery-filter");
  const galleryItems = document.querySelectorAll(".item");
  
let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
  body.classList.add("dark");
}

// js code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");

  // js code to keep user selected mode even page refresh or file reopen
  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
});

// js code to toggle dark and light mode
searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});
// js code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});
body.addEventListener("click", (e) => {
  let clickedElm = e.target;
  if (
    !clickedElm.classList.contains("sidebarOpen") &&
    !clickedElm.classList.contains("menu")
  ) {
    nav.classList.remove("active");
  }
});


filterContainer.addEventListener("click", (event) =>{
  if(event.target.classList.contains("filter-item")){

    // deactivate existing active 'filter-item'
   filterContainer.querySelector(".filter-active").classList.remove("filter-active");

    // activate new 'filter-item'
   event.target.classList.add("filter-active");

   const filterValue = event.target.getAttribute("data-filter");

   galleryItems.forEach((item) =>{

      if(item.classList.contains(filterValue) || filterValue === 'all'){
       item.classList.remove("hide");
        item.classList.add("show");
      }

      else{
       item.classList.remove("show");
       item.classList.add("hide");
      }

    });
  }
});

// let previous = document.getElementById('previous');
// let next = document.getElementById('next');
// let relative = document.getElementsByClassName('relative')[0];
// next.addEventListener('click', () => {
//     relative.scrollLeft += 360;
// })
// previous.addEventListener('click', () => {
//     relative.scrollLeft -= 360;
// })
// let left = document.getElementById('left');
// let right = document.getElementById('right');
// let col_lg_3_custom = document.getElementById('col-lg-3-custom');
// let speechrelative = document.getElementsByClassName('speechrelative')[0];
// right.addEventListener('click', () => {
//   speechrelative.scrollLeft += 910;
// })
// left.addEventListener('click', () => {
//   speechrelative.scrollLeft -= 910;
// })

// owl carousel



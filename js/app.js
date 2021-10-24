/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const ul = document.querySelector("ul#navbar__list"),
      addBtn = document.querySelector("#addSecBtn"),
      main = document.querySelector("main"),
      toUp = document.querySelector("#toUp"),
      pageHeader = document.querySelector(".page__header");

let isScroll,
    sectionCount = 0;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// bulid the section
// function to create <section> and putting it inside <main> tag
function addSection() {
  // add the count by 1
  sectionCount++;
  let secContent = 
  `<section id="section${sectionCount}" data-nav="Section ${sectionCount}">
    <div class="landing__container">
      <h2>Section ${sectionCount}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        fermentum metus faucibus lectus pharetra dapibus. Suspendisse
        potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
        lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed
        convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla
        eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam
        nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis
        lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a
        tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus
        vitae elit. Integer nec libero venenatis libero ultricies molestie
        semper in tellus. Sed congue et odio sed euismod.
      </p>
      <p>
        Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar
        gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam.
        Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum
        consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget
        elementum tortor mollis non.
      </p>
    </div>
  </section>`;
  // this line to add the secContent after last item inside <main> tag
  main.insertAdjacentHTML("beforeend", secContent);
  // call the add nav function to build the nav menu while creating the section
  addList();
};

// build the nav
// building the nav list after entering the webpage
for (let i = 1; i< 5; i++) {
  ul.insertAdjacentHTML("beforeend", `<li><a href="#section${i}" class="menu__link">Section ${i}</a></li>`);
}
// function to create <li> and putting it inside <ul> tag
function addList() {
  let liContent = `<li><a href="#section${sectionCount}" class="menu__link">Section ${sectionCount}</a></li>`;
  // this line to add the liContent after last item inside <ul> tag
  ul.insertAdjacentHTML("beforeend", liContent);
};

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
// this event will execute the functions when user click on addBtn
addBtn.addEventListener("click", () => {
  let sections = document.querySelectorAll("section");
  sectionCount = sections.length;
  addSection();
});

// Scroll to section on link click

// Set sections as active


// Scroll event
window.addEventListener("scroll", () => {
  // to show the up button when user scroll of the top is greater than 400
  if (window.scrollY > 400) {
    toUp.classList.add("show");
  }
  else {
    toUp.classList.remove("show");
  }
  // to check while scroll the viewport of the section to add class to it to change its background
  let sections = document.querySelectorAll("section");
  sections.forEach(section => {
    let top = window.scrollY, // scrollY value
        height = section.offsetHeight, // the height of the section
        offset = section.offsetTop - 250, // the space between the top and the start of the section
        id = section.getAttribute("id");
        if (top >= offset && top < offset + height) {
          section.classList.add("isActive");
          ul.querySelector(`a[href*="${id}"]`).classList.add("active");
        }
        else {
          section.classList.remove("isActive");
          ul.querySelector(`a[href*="${id}"]`).classList.remove("active");
        }
  });
  // to hide the header (nav menu) while there is no scroll event
  pageHeader.style.cssText = "transform: translateY(0)";
  clearTimeout(isScroll); // remove the timeout if scroll is running
  // timeout to hide nav if no scroll happen after 5 seconds
  isScroll = setTimeout (() => {
    pageHeader.style.cssText = "transform: translateY(-100%)";
  },5000) // 5000 milliseconds = 5 seconds
});

// Go to Top button
// when the user click on the button it will back to the top
toUp.addEventListener("click", () => {
  // this will make a scroll to the top and the left of the page
  window.scrollTo(0, 0); // scrollX = scrollY = 0
});
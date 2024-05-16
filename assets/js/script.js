'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}



// Function to open the popup panel
function openPopup(projectId) {
  var popup = document.getElementById(projectId);
  if (popup) {
      popup.style.display = "block";
  }
}

// Function to close the popup panel
function closePopup(projectId) {
  var popup = document.getElementById(projectId);
  if (popup) {
      popup.style.display = "none";
  }
}

// Event listeners to open the popup panel for each project item
document.querySelectorAll(".project-item").forEach(function(projectItem) {
  projectItem.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default link behavior
      var projectId = this.getAttribute("data-popup");
      if (projectId) {
          openPopup(projectId);
      }
  });
});

// Event listeners to close the popup panel for each project item
document.querySelectorAll(".popup").forEach(function(popup) {
  popup.addEventListener("click", function(event) {
      var projectId = this.id;
      if (event.target === this) {
          closePopup(projectId);
      }
  });
});

// Add JavaScript functionality to toggle scrollbar visibility
const popupContent = document.querySelector('.popup-content-info-container');

// Toggle scrollbar visibility when clicking anywhere inside the popup content
popupContent.addEventListener('click', () => {
    popupContent.classList.toggle('has-scrollbar');
});



document.addEventListener('DOMContentLoaded', function() {
  // Select all expandable sections
  const expandableSections = document.querySelectorAll('.expandable-section');

  // Loop through each expandable section
  expandableSections.forEach(function(section) {
      // Select the toggle icon and details for each section
      const toggleIcon = section.querySelector('.toggle-icon');
      const details = section.querySelector('.details');

      // Add click event listener to toggle icon
      toggleIcon.addEventListener('click', function() {
          // Toggle the 'expanded' class on the current section
          section.classList.toggle('expanded');

          // Change the icon based on the 'expanded' class
          if (section.classList.contains('expanded')) {
              toggleIcon.setAttribute('name', 'remove'); // Change plus icon to minus icon
          } else {
              toggleIcon.setAttribute('name', 'add'); // Change minus icon to plus icon
          }
      });
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.carousel');
  
  carousels.forEach(carousel => {
      const id = carousel.getAttribute('id');
      let slideIndex = 1;

      showSlides(id, slideIndex);

      carousel.querySelectorAll('.carousel-control-prev').forEach(button => {
          button.addEventListener('click', () => {
              showSlides(id, --slideIndex);
          });
      });

      carousel.querySelectorAll('.carousel-control-next').forEach(button => {
          button.addEventListener('click', () => {
              showSlides(id, ++slideIndex);
          });
      });

      carousel.querySelectorAll('.dot').forEach(dot => {
          dot.addEventListener('click', () => {
              const slideTo = parseInt(dot.getAttribute('data-slide-to'));
              showSlides(id, slideTo);
          });
      });

      function showSlides(carouselId, n) {
          const carousel = document.getElementById(carouselId);
          const slides = carousel.querySelectorAll('.carousel-item');
          const dots = carousel.querySelectorAll('.dot');

          if (n > slides.length) { slideIndex = 1; }
          if (n < 1) { slideIndex = slides.length; }
          if (n > 0 && n <= slides.length) { slideIndex = n; }

          slides.forEach((slide, index) => {
              slide.style.display = (index === slideIndex - 1) ? 'block' : 'none';
              slide.classList.toggle('active', index === slideIndex - 1);
          });

          dots.forEach((dot, index) => {
              dot.classList.toggle('active', index === slideIndex - 1);
          });
      }
  });
});











        // explore button
        function workhome() {window.location.replace("https://fakhrirozann.github.io/work");}

              /* -- Carousel Navigation -- */

              let activeIndex = 0;

              const slides = document.getElementsByTagName("slides");
              
              const handleRightClick = () => {
                const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;
                
                const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
                      nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
                      
                currentSlide.dataset.status = "before";
                
                nextSlide.dataset.status = "becoming-active-from-after";
                
                setTimeout(() => {
                  nextSlide.dataset.status = "active";
                  activeIndex = nextIndex;
                });
              }
              
              const handleLeftClick = () => {
                const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;
                
                const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
                      nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
                
                currentSlide.dataset.status = "after";
                
                nextSlide.dataset.status = "becoming-active-from-before";
                
                setTimeout(() => {
                  nextSlide.dataset.status = "active";
                  activeIndex = nextIndex;
                });
              }
              
              let startX = 0;
              let isDragging = false;
              let slideTransitioned = false;
              const viewportWidth = window.innerWidth;
              const dragThresholdRatio = 0.2; // Adjust this ratio as needed
              
              const dragThreshold = viewportWidth * dragThresholdRatio;
              
              const handleDragStart = (event) => {
                isDragging = true;
                startX = event.clientX || event.touches[0].clientX;
                slideTransitioned = false; // Reset flag when drag starts
              };
              
              const handleDragMove = (event) => {
                if (!isDragging || slideTransitioned) return;
                
                const currentX = event.clientX || event.touches[0].clientX;
                const diffX = startX - currentX;
              
                if (Math.abs(diffX) >= dragThreshold) {
                  if (diffX > 0) {
                    handleRightClick();
                  } else {
                    handleLeftClick();
                  }
                  startX = currentX; // Reset starting position for smoother dragging
                  slideTransitioned = true; // Set flag to indicate slide transition
                }
              };
              
              const handleDragEnd = () => {
                isDragging = false;
              };
              
              document.addEventListener('mousedown', handleDragStart);
              document.addEventListener('touchstart', handleDragStart);
              document.addEventListener('mousemove', handleDragMove);
              document.addEventListener('touchmove', handleDragMove);
              document.addEventListener('mouseup', handleDragEnd);
              document.addEventListener('touchend', handleDragEnd);
              
              
        /* -- Mobile Nav Toggle -- */

        const nav = document.querySelector("nav");

        const handleNavToggle = () => {  
        nav.dataset.transitionable = "true";
        
        nav.dataset.toggled = nav.dataset.toggled === "true" ? "false" : "true";
        }

        window.matchMedia("(max-width: 800px)").onchange = e => {
        nav.dataset.transitionable = "false";

        nav.dataset.toggled = "false";
        };

        document.addEventListener("DOMContentLoaded", function () {
        const body = document.body;

        });
        const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
  
  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`
  }
  
  trailer.animate(keyframes, { 
    duration: 800, 
    fill: "forwards" 
  });
}

const getTrailerClass = type => {
  switch(type) {
    case "video":
      return "fa fa-play";
    case "openpage":
      return "fa fa-hand-pointer-o";
    default:
      return ; 
  }
}

window.onmousemove = e => {
  const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;
  
  const icon = document.getElementById("trailer-icon");
  
  animateTrailer(e, interacting);
  
  trailer.dataset.type = interacting ? interactable.dataset.type : "";
  
  if(interacting) {
    icon.className = getTrailerClass(interactable.dataset.type);
  }
}

// darktheme toggle
var toggle = document.getElementById("theme-toggle");

var storedTheme = localStorage.getItem('theme') || 
(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)


toggle.onclick = function() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};


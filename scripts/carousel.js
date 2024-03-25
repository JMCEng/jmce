// Add this to your existing JavaScript code
let currentImageIndex = 0;
const totalImages = document.querySelectorAll(".mainimg").length,
    images = document.querySelectorAll(".mainimg");

function showSlides() {
    images[currentImageIndex].classList.remove("fadeOut"), images[currentImageIndex].classList.add("fadeIn"), images[currentImageIndex].style.display = "block", setTimeout((() => {
        images[currentImageIndex].classList.remove("fadeIn"), images[currentImageIndex].classList.add("fadeOut"), setTimeout((() => {
            images[currentImageIndex].style.display = "none", currentImageIndex++, currentImageIndex >= totalImages && (currentImageIndex = 0), images[currentImageIndex].style.display = "block", setTimeout((() => {
                showSlides();
            }), 100) // Wait for the transition to complete before changing image
        }), 500) // Transition duration
    }), 5000) // Change image every 6 seconds
}

// Initial setup
showSlides();

var i = 0;
var txt = 'Experience You Can Trust'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener('DOMContentLoaded', typeWriter);




// Intersection Observer configuration
const options = {
    threshold: 0.4 // Adjust the threshold as needed
  };
  var myElement = document.getElementById("section2-header");
            
  // Add a class to the element
  
  // Callback function to handle intersection changes
  const handleIntersection = (entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('fade-in');
          myElement.classList.add("fade-in");
        }, 500 * index); // Adjust the delay as needed
        observer.unobserve(entry.target);
      }
    });
  };

  // Create an Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, options);

  // Target the cards and observe each one
  const cards = document.querySelectorAll('#Section2 .card');
  cards.forEach(card => {
    observer.observe(card);
    
  });
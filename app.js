$(document).ready(function() {
    $('.active-btn').click(function(e) {
        e.preventDefault();
        var target = $(this).data('target');
        $('.content-section').removeClass('active');
        $(target).addClass('active');
        $('.active-btn').removeClass('active');
        $(this).addClass('active');
    });
});

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


document.addEventListener("DOMContentLoaded", function() {
    var loadingScreen = document.getElementById('loading');
    loadingScreen.style.opacity = '0';
    setTimeout(function() {
        loadingScreen.style.display = 'none';
    }, 1000); // Match this duration with the transition duration in CSS
});


document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.getElementById("progressBar");
    
    // Update progress bar width based on scroll position
    window.addEventListener("scroll", function() {
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      progressBar.style.width = scrolled + "%";
    });
  });
  
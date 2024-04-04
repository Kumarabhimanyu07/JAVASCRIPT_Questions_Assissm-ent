document.addEventListener("DOMContentLoaded", function() {
    const colorButton = document.getElementById("colorButton");
    const colors = ["#007bff", "#28a745", "#dc3545", "#ffc107", "#17a2b8", "#6610f2", "#6c757d", "#fd7e14", "#343a40", "#20c997"];
    
    // Function to change background color
    function changeBackgroundColor() {
      const randomIndex = Math.floor(Math.random() * colors.length);
      document.body.style.backgroundColor = colors[randomIndex];
    }
    
    // Event listener for the button click
    colorButton.addEventListener("click", changeBackgroundColor);
  });
  
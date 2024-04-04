document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById("image");
    const container = document.getElementById("container");
    
    let positionX = 0;
    let positionY = 0;
    const step = 10; // adjust the step size as needed
    
    // Function to move the image
    function moveImage(direction) {
      switch (direction) {
        case "ArrowUp":
          positionY -= step;
          break;
        case "ArrowDown":
          positionY += step;
          break;
        case "ArrowLeft":
          positionX -= step;
          break;
        case "ArrowRight":
          positionX += step;
          break;
        default:
          return; // Exit function if other keys are pressed
      }
      image.style.top = positionY + "px";
      image.style.left = positionX + "px";
    }
    
    // Event listener for keydown event
    document.addEventListener("keydown", function(event) {
      moveImage(event.key);
    });
  });
  
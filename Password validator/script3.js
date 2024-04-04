document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.getElementById("paragraph");
    
    // Function to highlight words greater than 8 characters
    function highlightWords() {
      const textNodes = paragraph.childNodes;
      textNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          const words = node.nodeValue.split(" ");
          const highlightedWords = words.map(word => {
            if (word.length > 8) {
              return `<span class="highlight">${word}</span>`;
            }
            return word;
          });
          const span = document.createElement("span");
          span.innerHTML = highlightedWords.join(" ");
          node.replaceWith(span);
        }
      });
    }
    
    // Call the highlightWords function
    highlightWords();
  });
  
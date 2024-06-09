document.addEventListener("DOMContentLoaded", function() {
    // Function to load external HTML into the main page
    function includeHTML() {
      var z, i, elmnt, file, xhttp;
      /* Loop through a collection of all HTML elements: */
      z = document.getElementsByTagName("*");
      for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
          /* Make an HTTP request using the attribute value as the file name: */
          xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
              if (this.status == 200) {elmnt.innerHTML = this.responseText;}
              if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
              /* Remove the attribute, and call this function once more: */
              elmnt.removeAttribute("w3-include-html");
              includeHTML();
              addActiveClass();
            }
          }
          xhttp.open("GET", file, true);
          xhttp.send();
          /* Exit the function: */
          return;
        }
      }
    }
  
    // Function to add active class to the current nav link
    function addActiveClass() {
      const path = window.location.pathname;
      const page = path.split("/").pop();
  
      // Remove active class from all links
      document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.remove("active");
      });
  
      // Add active class to the current link
      switch (page) {
        case "index.html":
          document.getElementById("homeLink").classList.add("active");
          break;
        case "category.html":
          document.getElementById("categoryLink").classList.add("active");
          break;
        case "product.html":
          document.getElementById("productLink").classList.add("active");
          break;
        case "about.html":
          document.getElementById("aboutLink").classList.add("active");
          break;
        case "contact.html":
          document.getElementById("contactLink").classList.add("active");
          break;
        default:
          break;
      }
    }
  
    // Call the function to include HTML
    includeHTML();
  });
  
// Dictionary of services and their URLs
const services = {
    youtube: "https://www.youtube.com",
    google: "https://www.google.com",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    twitter: "https://www.twitter.com",
    whatsapp: "https://web.whatsapp.com/",
    chatgpt:'https://chatgpt.com/',
    linkedin: "https://www.linkedin.com/",
    github:"https://github.com/"
  };
  
  // Function to open the service
  function openService() {
    const input = document.getElementById("serviceInput").value.toLowerCase();
    const error = document.getElementById("error");
  
    if (services[input]) {
      // Open the URL in a new tab
      window.open(services[input], "_blank");
      error.textContent = ""; // Clear any previous error message
    } else {
      // Show an error if the service is not found
      error.textContent = "Service not found. Please try again!";
    }
  }
  
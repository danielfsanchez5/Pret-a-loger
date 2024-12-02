window.onload = function () {
    const logosContainer = document.querySelector('.companyLogos');
    const logos = Array.from(logosContainer.children);
  
    // Calculate the total width of all logos
    const totalWidth = logos.reduce((width, logo) => {
      return width + logo.offsetWidth + 30; // Include the gap (30px)
    }, 0);
  
    // Get the width of the container
    const containerWidth = logosContainer.parentElement.offsetWidth;
  
    // Duplicate logos to fill the container width and avoid gaps
    while (totalWidth < containerWidth * 2) {
      logos.forEach((logo) => {
        const clone = logo.cloneNode(true);
        logosContainer.appendChild(clone);
      });
    }
  };
  
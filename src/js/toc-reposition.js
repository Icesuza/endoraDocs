// Move TOC to appear right after navbar
document.addEventListener('DOMContentLoaded', function() {
  function moveTOC() {
    // Find the TOC element
    const toc = document.querySelector('.theme-doc-toc-desktop');
    const navbar = document.querySelector('.navbar');
    const mainWrapper = document.querySelector('.main-wrapper');
    
    // Only proceed if we're not on mobile (screen width > 996px)
    if (window.innerWidth <= 996) {
      return;
    }
    
    if (toc && navbar && mainWrapper) {
      // Create a new container for the TOC
      const tocContainer = document.createElement('div');
      tocContainer.className = 'fixed-toc-container';
      tocContainer.style.cssText = `
        position: fixed;
        top: 60px;
        left: 0;
        right: 0;
        z-index: 10;
        background: var(--ifm-background-color);
        border-bottom: 1px solid var(--ifm-color-emphasis-200);
        padding: 0.5rem 1rem;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        pointer-events: none;
      `;
      
      // Move the TOC content to the new container
      tocContainer.innerHTML = toc.innerHTML;
      
      // Re-enable pointer events for TOC links
      const tocLinks = tocContainer.querySelectorAll('a');
      tocLinks.forEach(link => {
        link.style.pointerEvents = 'auto';
      });
      
      // Insert the new TOC container right after the navbar
      navbar.parentNode.insertBefore(tocContainer, navbar.nextSibling);
      
      // Hide the original TOC
      toc.style.display = 'none';
      
      // Add padding to main content
      mainWrapper.style.paddingTop = '120px';
    }
  }
  
  // Run on page load
  setTimeout(moveTOC, 100);
  
  // Handle window resize
  window.addEventListener('resize', function() {
    setTimeout(moveTOC, 100);
  });
  
  // Run when navigation changes (for SPA behavior)
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {
        setTimeout(moveTOC, 100);
      }
    });
  });
  
  // Start observing
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});

// Custom pagination navigation with emoji arrows
document.addEventListener('DOMContentLoaded', function() {
  // Function to update pagination arrows
  function updatePaginationArrows() {
    // Find all pagination navigation items
    const prevItems = document.querySelectorAll('.pagination-nav__item--prev .pagination-nav__label');
    const nextItems = document.querySelectorAll('.pagination-nav__item--next .pagination-nav__label');
    
    // Update previous navigation
    prevItems.forEach(item => {
      if (item.textContent && !item.textContent.includes('⏪')) {
        item.textContent = item.textContent + ' ⏪';
      }
    });
    
    // Update next navigation
    nextItems.forEach(item => {
      if (item.textContent && !item.textContent.includes('⏩')) {
        item.textContent = '⏩ ' + item.textContent;
      }
    });
  }
  
  // Run on page load
  updatePaginationArrows();
  
  // Run when navigation changes (for SPA behavior)
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {
        updatePaginationArrows();
      }
    });
  });
  
  // Start observing
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});

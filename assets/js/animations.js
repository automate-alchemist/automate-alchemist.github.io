document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
      root: null,
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);
  
    document.querySelectorAll('.fade-in-section').forEach(section => {
      observer.observe(section);
    });
  });
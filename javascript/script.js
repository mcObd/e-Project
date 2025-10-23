// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Find all counter elements
    const counters = document.querySelectorAll('.counter');
    
    // Function to animate a counter
    function animateCounter(counter) {
        // Get the target number from data-count attribute
        const targetNumber = parseInt(counter.dataset.count);
        let currentNumber = 0;
        
        // Update the counter every 50 milliseconds
        const timer = setInterval(() => {
            // Increase the current number
            currentNumber += 1;
            
            // Update the counter text
            counter.textContent = currentNumber;
            
            // Stop when we reach the target number
            if (currentNumber >= targetNumber) {
                clearInterval(timer);
            }
        }, 50); // Speed of counting (lower number = faster)
    }
    
    // Start animation when counter is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // When counter becomes visible
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                // Stop observing after animation starts
                observer.unobserve(entry.target);
            }
        });
    });
    
    // Observe each counter
    counters.forEach(counter => observer.observe(counter));
});

// ACCORDION

document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.accordion-item.active');
            
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
            }
            
            item.classList.toggle('active');
        });
    });
});

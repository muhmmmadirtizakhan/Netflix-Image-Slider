// Netflix Slider JavaScript
// You can add any interactive functionality here if needed

document.addEventListener('DOMContentLoaded', function() {
    console.log('Netflix Slider loaded successfully!');
    
    // Add smooth scrolling for better user experience
    const images = document.querySelectorAll('.second img');
    
    images.forEach(img => {
        img.addEventListener('click', function() {
            // Add click functionality here if needed
            console.log('Image clicked:', this.src);
        });
    });
    
    // Auto-scroll functionality for mobile
    if (window.innerWidth <= 768) {
        const rows = document.querySelectorAll('.second');
        
        rows.forEach(row => {
            let isScrolling = false;
            
            row.addEventListener('scroll', function() {
                if (!isScrolling) {
                    isScrolling = true;
                    setTimeout(() => {
                        isScrolling = false;
                    }, 100);
                }
            });
        });
    }
});
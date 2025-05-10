document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSelector = this.dataset.target;
            const targetElement = document.querySelector(targetSelector);

            if (targetElement) {
                targetElement.style.display = targetElement.style.display === 'none' ? 'block' : 'none';
                this.classList.toggle('expanded');
                this.textContent = targetElement.style.display === 'none' ? 'Leer Más' : 'Leer Menos';
            } else {
                console.error(`Target element not found: ${targetSelector}`); // Add this for debugging
            }
        });
    });
});
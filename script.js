document.addEventListener("DOMContentLoaded", function() {
    // Get references to important DOM elements
    const filterDropdown = document.getElementById('filterDropdown');
    const phoneItems = document.querySelectorAll('li.phone-item');

    // Event listener for filter change
    filterDropdown.addEventListener('change', function() {
        const selectedBrand = filterDropdown.value.toLowerCase();

        phoneItems.forEach(item => {
            const brand = item.getAttribute('data-brand').toLowerCase();
            if (selectedBrand === "all" || brand === selectedBrand) {
                item.style.display = "block";  // Show matching brands
            } else {
                item.style.display = "none";   // Hide non-matching brands
            }
        });
    });
});

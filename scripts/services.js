document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('.toggleCheckbox');

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            const dropdown = checkbox.parentElement; // Get the parent li element

            if (checkbox.checked) {
                dropdown.style.maxHeight = '75px';
            } else {
                dropdown.style.maxHeight = 'none';
            }
        });
    });
});

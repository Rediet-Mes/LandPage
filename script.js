document.addEventListener('DOMContentLoaded', () => {
    const ratingButtons = document.querySelectorAll('.rating');
    let selectedRating = null;

    ratingButtons.forEach(button => {
        button.addEventListener('click', () => {
            ratingButtons.forEach(btn => btn.style.backgroundColor = '#e0e0e0');
            button.style.backgroundColor = '#ffd700';
            selectedRating = button.textContent;
        });
    });

    document.getElementById('submit').addEventListener('click', () => {
        if (selectedRating) {
            document.getElementById('rating-container').style.display = 'none';
            document.getElementById('selected-rating').textContent = selectedRating;
            document.getElementById('thank-you-container').style.display = 'block';
        } else {
            alert('Please select a rating before submitting.');
        }
    });
});

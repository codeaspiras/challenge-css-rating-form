const ratingInput = document.querySelector('input[name="rating"]');
const expectedClassName = 'rating-button';

document.addEventListener('click', function($event) {
    if ($event.target.className === expectedClassName) {
        ratingInput.value = $event.target.dataset.value;
    }
})
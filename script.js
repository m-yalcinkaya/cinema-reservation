const container = document.querySelector('.container');
const movie = document.querySelector('#movie');


container.addEventListener('click', function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
        e.target.classList.toggle('selected');
    }

    updateText();
});

movie.addEventListener('change', function(e) {
    updateText();
});



function updateText(){
        let count = container.querySelectorAll('.seat.selected').length;
        const countText = document.querySelector('#count');
        const amountText = countText.nextElementSibling;
        countText.textContent = count.toString();
        amountText.textContent = (Number(movie.value)*count).toString();
}
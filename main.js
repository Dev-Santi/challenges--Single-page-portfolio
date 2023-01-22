/* carrousel */
let carrousel = document.getElementById('carrousel');
let btnLeft = document.getElementsByClassName('car-btn')[0];
let btnRight = document.getElementsByClassName('car-btn')[1];
let count = 0;

btnLeft.onclick = () => {
    switch (count) {
        case 0:
            removeClass();
            addClass('transition-1');
            count++;
            break;
        case 1:
            removeClass();
            addClass('transition-2')
            count++;
            break;
        case 2:
            removeClass();
            addClass('transition-3')
            count = -2;
            break;
        case -2:
            removeClass();
            addClass('transition-4')
            count++;
            break;
        case -1:
            removeClass();
            addClass('transition-5')
            count++;
            break;
    }
}

btnRight.onclick = () => {
    switch (count) {
        case 0:
            removeClass();
            addClass('transition-4');
            count--;
            break;
        case 1:
            removeClass();
            addClass('transition-5')
            count--;
            break;
        case 2:
            removeClass();
            addClass('transition-1')
            count--;
            break;
        case -2:
            removeClass();
            addClass('transition-2')
            count = 2;
            break;
        case -1:
            removeClass();
            addClass('transition-3')
            count--;
            break;
    }
}




function addClass(clase) {
    carrousel.classList.add(clase);
}

function removeClass() {
    carrousel.className = "";
}
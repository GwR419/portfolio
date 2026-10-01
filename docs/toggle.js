/* Gavin Redding
   JavaScript Exercise 2
   Checkboxes add or remove the "on" class on matching spans. */

window.addEventListener('DOMContentLoaded', init, false);

function init() {
    let boxes = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', toggleSpans, false);
    }
    document.getElementById('allOn').addEventListener('click', allOn, false);
    document.getElementById('allOff').addEventListener('click', allOff, false);
}

/* the checkbox id matches the span class, so "card" toggles span.card */
function toggleSpans() {
    let spans = document.getElementsByClassName(this.id);
    for (let i = 0; i < spans.length; i++) {
        spans[i].classList.toggle('on');
    }
}

function allOn() {
    setAll(true);
}

function allOff() {
    setAll(false);
}

function setAll(turnOn) {
    let boxes = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].checked = turnOn;
        let spans = document.getElementsByClassName(boxes[i].id);
        for (let j = 0; j < spans.length; j++) {
            if (turnOn) {
                spans[j].classList.add('on');
            } else {
                spans[j].classList.remove('on');
            }
        }
    }
}

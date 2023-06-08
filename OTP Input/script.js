let inputs = document.querySelector('.inputs');
let p = document.querySelector('p');

function inputHandler(e){
    e.addEventListener('keyup', checkInput);
}

function checkInput(e){
    let value = e.key;
    console.log(e.target.value);
    let currStyle = e.target.style;
    if(value == 'Backspace' || value == 'Delete'){
        let prevEl = e.target.previousElementSibling;
        e.target.value = '';
        if(!prevEl) return;
        
        e.target.style = prevEl.style;
        prevEl.style = currStyle;
        e.target.removeEventListener('keyup', checkInput);
        e.target.blur();
        prevEl.focus();
        inputHandler(prevEl);
    }
    else if(!Number(e.target.value)) alert('please enter a number');
    else{
        let nextEl = e.target.nextElementSibling;
        if(!nextEl) return;

        e.target.style = nextEl.style;
        nextEl.style = currStyle;
        e.target.removeEventListener('keyup', checkInput);
        e.target.blur();
        nextEl.focus();
        
        inputHandler(nextEl);
    }
}

inputs.firstElementChild.addEventListener('focus', (e) => inputHandler(e.target));
let starContainer = document.querySelector('.star-container');
let ratingCount = document.getElementById('count');
// let prevIndex = 0;
let prevClickEvent = { target:null };

function starColorHandler(e){
    if(e.target!=null && !e.target.classList.contains('star')) return;

    if(e.type == 'click'){ 
        ratingCount.innerText = e.target.dataset.index;
        prevClickEvent = e;
    }
    
    let curStar = e.target;
    while(curStar != null && !curStar.classList.contains('star-filled')){
        curStar.classList.add('star-filled');
        curStar = curStar.previousElementSibling;
    }
    
    curStar = e.target;
    if(curStar == null) curStar = starContainer.firstElementChild;
    else curStar = curStar.nextElementSibling;

    while(curStar != null && curStar.classList.contains('star-filled')){
        curStar.classList.remove('star-filled');
        curStar = curStar.nextElementSibling;
    }    
}

starContainer.addEventListener('click', starColorHandler);
starContainer.addEventListener('mouseover', starColorHandler);
starContainer.addEventListener('mouseout', (e) => {
    starColorHandler(prevClickEvent);
});
let searchbar = document.querySelector('.searchbar');
let c = 1;
let searchHandler = debounce(dataHandler, 500);
const urlBase = 'https://demo.dataverse.org/api/search?q=';

let resultContainer = document.querySelector('.results');

async function getData(url){
    let response = await fetch(url);
    let newdata = await response.json();
    let data = [ ...newdata.data.items ];
    if(data.length == 0) {
        resultContainer.style.display = 'none';
        return;
    }

    for(let i=0; i<data.length; i++){
        data[i] = data[i].name;
    }
    showItems(data);
}

function dataHandler(){
    console.log('Network Call',c++);
    let keyword = searchbar.value;
    let urlString = urlBase + keyword;
    
    getData(urlString);
}

function showItems(data){
    resultContainer.innerHTML = '';
    for(let i of data){
        let item = document.createElement('p');
        item.className = 'item';
        item.innerText = i;
        resultContainer.appendChild(item);
    }
    resultContainer.style.display = 'block';
}

function debounce(cb, time){
    let timeout;
    
    return function (){
        clearTimeout(timeout);
        if(searchbar.value != '') timeout = setTimeout(cb, time);
        else resultContainer.style.display = 'none';
    }
}

searchbar.addEventListener('keydown', searchHandler);

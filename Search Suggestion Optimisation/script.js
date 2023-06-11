// let urlString = 'https://demo.dataverse.org/api/search?q=value';
// let data;
let searchbar = document.querySelector('.searchbar');
let delay = 1000;
let searchHandler = debounce(fn, delay);
let c = 1;
/* 
async function getData(url){
    let response = await fetch(url);
    let testdata = await response.json();
    data = testdata.data;
    console.log(data);
}

getData(urlString);
 */
function fn(){
    console.log('Network Call',c++);
}

function debounce(cb, time){
    let timeout;
    
    // if(searchbar.value == '') return clearTimeout(timeout);
    return function (){
        clearTimeout(timeout);
        if(searchbar.value != '') timeout = setTimeout(cb, time);
    }
}

searchbar.addEventListener('keydown', searchHandler);
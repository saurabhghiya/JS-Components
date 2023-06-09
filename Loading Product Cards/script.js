// WRITE SOLUTION HERE


let mainContainer = document.getElementById('container');
let n = data.length;
for(let i=0; i<n; i++){
    let product = data[i];
    let starcount = Math.floor(product.rating.rate);
    let starfilled = '<span class="star__filled">&#9733;</span>';
    let starempty = '<span class="star__notfilled">&#9734;</span>';

    let stars = document.createElement('div');
    stars.className = 'all__star';
    for(let i=1; i<=5; i++){
        stars.innerHTML += i<=starcount ? starfilled : starempty;
    }

    let card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
    <div class="details">
        <span class="product__name">${product.title}</span>
        <br>
        <span class="product__category">${product.category}</span>
        <div class="all__star">
            ${stars.innerHTML}
        </div>
        <div class="rating__count">Rating Count : <span>${product.rating.count}</span></div>
    </div>
    <div class="btn">
        <button class="btn__buy">Buy Now</button>
    </div>
    `;

    mainContainer.appendChild(card);
}
// console.log(card)

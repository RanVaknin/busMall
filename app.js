'use strict';

var leftImageEl = document.getElementById('left');
var centerImageEl = document.getElementById('center');
var rightImageEl = document.getElementById('right');
var containerEl = document.getElementById('container');
var tableEl = document.getElementById('table');
var ulEl = document.getElementById('list');


var allProducts = [];
var uniqueArray =[];

function Product(productName){
    this.productName = productName;
    this.path = `images/${productName}.jpg`
    allProducts.push(this)
    this.views = 0;
    this.votes = 0;    
}

function renderProducts() {
    uniqueArray[0] = makeRandom();
    leftImageEl.src = allProducts[uniqueArray[0]].path;
    leftImageEl.title = allProducts[uniqueArray[0]].productName;
    allProducts[uniqueArray[0]].views++

    uniqueArray[1] = makeRandom();
    rightImageEl.src = allProducts[uniqueArray[1]].path;
    rightImageEl.title = allProducts[uniqueArray[1]].productName;
    allProducts[uniqueArray[1]].views++

    uniqueArray[2] = makeRandom();
    centerImageEl.src = allProducts[uniqueArray[2]].path; 
    centerImageEl.title = allProducts[uniqueArray[2]].productName; 
    allProducts[uniqueArray[2]].views++

    
    if (leftImageEl.src === rightImageEl.src || leftImageEl.src === centerImageEl.src || rightImageEl.src === centerImageEl.src){
        renderProducts();
    }

}
function makeRandom() {
    return Math.floor(Math.random() * allProducts.length);
  }


new Product('banana');
new Product('usb');
new Product('baby');
new Product('glass')
new Product('shark');
new Product('bag');
new Product('unicorn');
new Product('dragon');
new Product('bathroom');
new Product('water');
new Product('scissors');
new Product('pen');
new Product('cthulhu');
new Product('bubblegum');
new Product('breakfast');
new Product('sweep');
new Product('chair');
new Product('dog');
new Product('tauntaun');





Product.selections = 0;

function handleClick() {
    var chosenImage = event.target.title;
    console.log('chosen image: ' ,chosenImage)
    for (let i=0; i < allProducts.length; i++){
        if (chosenImage === allProducts[i].productName){
            allProducts[i].votes++;
        }
    }

    Product.selections++;
    if (Product.selections === amountOfTries){
        containerEl.innerHTML = ""
        for (let i = 0; i < allProducts.length; i++){
            var liEl = document.createElement('li');
            liEl.textContent = `${allProducts[i].productName} has: ${allProducts[i].votes} votes.` 
            ulEl.appendChild(liEl);
        }
        
        // var trEl = document.createElement('tr');
        // var thEl = document.createElement('th');
        // thEl.textContent = 'Products';
        // trEl.appendChild(thEl);
        // for (let i = 0 ; i < allProducts.length; i++){
        //     var tdEl = document.createElement('td');
        //     tdEl.textContent = allProducts[i].productName;
        //     trEl.appendChild(tdEl);
        //     tdEl.classList.add("tdClass"); 
            
        // }
        // tableEl.appendChild(trEl);
        // var trClickEl = document.createElement('tr');
        // var thClickEl = document.createElement('th');
        // thClickEl.textContent = 'Votes';
        // trClickEl.appendChild(thClickEl);
        // for (let j = 0; j < allProducts.length ; j++){
        //     var tdClickEl = document.createElement('td');
        //     tdClickEl.textContent = allProducts[j].votes;
        //     trClickEl.appendChild(tdClickEl);
        //     tdClickEl.classList.add("tdClass");
        // }tableEl.appendChild(trClickEl);
        // var trViewEl = document.createElement('tr');
        // var thViewEl = document.createElement('th');
        // thViewEl.textContent = 'Views';
        // trViewEl.appendChild(thViewEl);
        // for (let k = 0; k < allProducts.length ; k++){
        //     var tdViewEl = document.createElement('td');
        //     tdViewEl.textContent = allProducts[k].views;
        //     trViewEl.appendChild(tdViewEl);
        //     tdViewEl.classList.add("tdClass");
        // }tableEl.appendChild(trViewEl);

        


    }
    
    renderProducts();
}
containerEl.addEventListener('click', handleClick);

renderProducts();
var amountOfTries = 5;




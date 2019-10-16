'use strict';

var leftImageEl = document.getElementById('left');
var centerImageEl = document.getElementById('center');
var rightImageEl = document.getElementById('right');
var containerEl = document.getElementById('container');
var tableEl = document.getElementById('table');
var ulEl = document.getElementById('list');


var randomArray = [];

var arrayOfItems = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

var allProducts = [];
var uniqueArray =[];

function Product(productName){
    this.productName = productName;
    this.path = `images/${productName}.jpg`
    allProducts.push(this)
    this.views = 0;
    this.votes = 0;    
}

function makeRandomNew() {
    return Math.floor(Math.random() * arrayOfItems.length);
  }





function generateNewArray(){

    while( randomArray.length < 6){
        var randomNumber = makeRandom();
        if(!randomArray.includes(randomNumber)){
            randomArray.push(randomNumber)
            console.log(randomArray);
        }
    }

}
//     for (let j = 0 ; j < 6 ; j++){
//         var randomNumber = makeRandom();
//     if(!randomArray.includes(randomNumber)){
//         randomArray.push(randomNumber)
//         console.log(randomArray);
//     } else {
//         j--;
//     }
//   }


// }




function shiftNewArray() {
    generateNewArray();
    for (let i = 0; i < randomArray.length; i++) {
        var temp = randomArray.shift();
        
    }
    return randomArray;
}

function renderProducts() {
    shiftNewArray();

    leftImageEl.src = allProducts[randomArray[0]].path;
    leftImageEl.title = allProducts[randomArray[0]].productName;
    allProducts[randomArray[0]].views++

    rightImageEl.src = allProducts[randomArray[1]].path;
    rightImageEl.title = allProducts[randomArray[1]].productName;
    allProducts[randomArray[1]].views++

    centerImageEl.src = allProducts[randomArray[2]].path; 
    centerImageEl.title = allProducts[randomArray[2]].productName; 
    allProducts[randomArray[2]].views++

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

    //END OF GAME
    if (Product.selections === amountOfTries){
        containerEl.innerHTML = ""

        renderChart();
    }
    
    renderProducts();
    
}

var nameData = [];
var voteData =[];


function voteChart(){
    for (let i = 0; i < allProducts.length ; i++){
        nameData.push(allProducts[i].productName);
        voteData.push(allProducts[i].votes);
    }
}

function renderChart(){
    voteChart();
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: nameData,
            datasets: [{ 
                label: '# of votes',
                data: voteData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    })
}

containerEl.addEventListener('click', handleClick);

renderProducts();
var amountOfTries = 25;




debugger;

let season;
let productsCategory;
let vegetables = ["cabbage", "avocado", "tomato"];
let fruits = ["grapes", "raspberry", "coconut"];
let vegetablePrices = [8, 30, 10];
let fruitPrices = [20, 25, 50];
let productCount;
let productPrice;

do {
    season = prompt("Which season's products do you want to buy: winter or summer?").replaceAll(" ", "").toLowerCase();
} while (season !== "summer" && season !== "winter");


do {
    productsCategory = prompt("Please, choose category in which do you want to buy products: vegetables or fruits").replaceAll(" ", "").toLowerCase();
} while (productsCategory !== "vegetables" && productsCategory !== "fruits");


if (productsCategory === "vegetables") {
    do {
        chosenProduct = prompt(`Choose product from category vagetables: ${vegetables.join(", ")}.`);
    } while (!vegetables.includes(chosenProduct));
} else { 
    do {
        chosenProduct = prompt(`Choose product from category fruits: ${fruits.join(", ")}.`);
    } while (!fruits.includes(chosenProduct));
}

do {
    productCount = +prompt(`Enter count of ${chosenProduct}`);
} while (isNaN(productCount) || productCount < 1);


switch (chosenProduct) {
    case "cabbage": 
        productPrice = vegetablePrices[0];
        break;  
    case "avocado":
        productPrice = vegetablePrices[1];
        break;
    case "tomato":
        productPrice = vegetablePrices[2];
        break;
    case "grapes": 
        productPrice = fruitPrices[0];
        break;
    case "raspberry": 
        productPrice = fruitPrices[1];
        break;
    case "coconut": 
        productPrice = fruitPrices[2];
        break;
}


if (season === "winter") {
    productPrice *= 2 * productCount; 
} else {
    productPrice *= 0.8 * productCount;
};


document.write (`
    <div class="product" align="center">
        <img src="images/${productsCategory}/${chosenProduct}.svg" alt="${chosenProduct}" width="100" height="100">
        <p>Selected product: <b>${chosenProduct}</b></p>
        <p>Count of ${chosenProduct}: <b>${productCount}</b></p>
        <p>Selected period: <b>${season}</b></p>
        <p>Selected category: <b>${productsCategory}</b></p>
        <p>Final sum: <b>${productPrice}</b></p>
    </div>`);

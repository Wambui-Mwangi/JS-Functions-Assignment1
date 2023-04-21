// You manage a grocery store and need to keep track of the inventory of various items.
//  You will use arrays to store the data and various functions to manipulate and analyze the data.

// Create an array containing the names of all items in the inventory.
// Create a separate array with the corresponding stock quantities of each item.
// Write a function to add a new item to the inventory, updating both arrays.
// Write a function to update the stock quantity of an existing item.
// Write a function to calculate the total number of items in the inventory.
// Write a function to find the item with the lowest stock quantity.

// Create an array containing the names of all items in the inventory.
let inventoryItems = [];    


// Create a separate array with the corresponding stock quantities of each item.
let stockQuantities = [];   


// Write a function to add a new item to the inventory, updating both arrays.
const addItems = (item, quantity) =>{
    inventoryItems.push(item);
    stockQuantities.push(quantity);
}
addItems('Tomatoes', 24);
addItems('Potatoes', 52);
addItems('Pineapples', 124);
addItems('Garlic', 10);

console.log(inventoryItems);
console.log(stockQuantities);


// Write a function to update the stock quantity of an existing item.
const update = (item, newQuant) => {
    let position = inventoryItems.indexOf(item);
    if (position>=0) {
        stockQuantities[position]=newQuant;
    }
}
update('Tomatoes', 50);
console.log(stockQuantities);


// Write a function to calculate the total number of items in the inventory.
const totalNumber = () =>{
    let allItems=0;
    for (let i = 0; i < stockQuantities.length; i++) {
       allItems+=stockQuantities[i]; 
    }
    return allItems;
}
console.log(totalNumber());


// Write a function to find the item with the lowest stock quantity.
const lowestQuantity = () =>{
    let lowestQuantIndex = 0;
    for (let l = 0; l < stockQuantities.length; l++) {
        if (stockQuantities[l]<stockQuantities[lowestQuantIndex]) {
            lowestQuantIndex=l;
        }   
    }
    return inventoryItems[lowestQuantIndex]
}
console.log(lowestQuantity());
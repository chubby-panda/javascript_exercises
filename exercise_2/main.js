let allItems = document.getElementById('all-items');
let shoppingCart = document.getElementById('shopping-cart')

rows = document.getElementsByClassName('item-content')

for (var r of rows) {
    itemRow = r.cells;
    // console.log(itemRow);
    itemName = r.cells[0].innerText;
    price = r.cells[1].innerText;
    // console.log("Item: " + itemName + " Price: $" + price);
    console.log(itemRow[2])
    // itemRow[2].onclick = function() {

    // }
}

// 1. how to access names and values from html 
// 2. 
function addItem(e) {
    const el = e.eventTarget
    
}
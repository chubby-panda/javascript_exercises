let allItems = document.getElementById('all-items');
let shoppingCart = document.getElementById('shopping-cart')

rows = document.getElementsByClassName('item-content')

for (var r of rows) {
    itemRow = r.cells;
    // console.log(itemRow);
    itemName = r.cells[0].innerText;
    price = r.cells[1].innerText;
    button = r.cells[2]
    // console.log(button)
    button.addEventListener('click', addItem)
    // console.log("Item: " + itemName + " Price: $" + price);
    // console.log(itemRow[2])
    // itemRow[2].onclick = function() {

    // }
}

function addItem() {
    let itemInputCell = event.target;
    let itemNameCell = event.target.parentElement.parentElement.children[0];
    let itemPriceCell = event.target.parentElement.parentElement.children[1];
    console.log(itemPriceCell);
    let itemRow = document.createElement('tr');
    itemRow.appendChild(itemNameCell.cloneNode(true));
    itemRow.appendChild(itemPriceCell.cloneNode(true));
    shoppingCart.appendChild(itemRow);
    
}
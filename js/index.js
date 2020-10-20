// ITERATION 1
function updateSubtotal(product) {
    const price = (product.querySelector('.price span').innerHTML);
    const quantity = product.querySelector('.quantity input').value;
    const subTotalElement = product.querySelector('.subtotal span');
    const subTotalCalc = price * quantity;
    subTotalElement.innerHTML = subTotalCalc;
    return subTotalCalc;
}

function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
    // end of test
    // ITERATION 2
    const products = document.getElementsByClassName("product");
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += updateSubtotal(products[i]);
    }

    // ITERATION 3
    document.getElementById("total-value").getElementsByTagName("span")[0].innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target.parentNode);
    let parent = target.parentNode.parentNode;
    parent.parentNode.removeChild(parent);
    calculateAll();
}

// ITERATION 5

function createProduct() {
    const row = document.querySelector('.create-product');
    const name = row.getElementsByTagName("input")[0];
    const price = row.getElementsByTagName("input")[1];
    let newRow = document.createElement("tr");
    newRow.innerHTML = '<td class="name"><span></span></td><td class="price">$<span></span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td>'
    newRow.classList.toggle("product");
    document.querySelector("tbody").appendChild(newRow);
    newRow.querySelector('.price span').innerHTML = price.value;
    newRow.querySelector('.name span').innerHTML = name.value;
    newRow.querySelector('.btn-remove').onclick = (event) => removeProduct(event);
    name.value = "";
    price.value = 0;
}


window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
    const removeButton = [...document.getElementsByClassName('btn btn-remove')];
    removeButton.forEach(removeBtn => {
        removeBtn.onclick = (event) => removeProduct(event);
    });    const createBtn = document.getElementById('create');
    createBtn.addEventListener('click', createProduct);});

updateCartCount()

function updateCartCount() {
  let localStorageData = [];

  if (!localStorage.getItem('cart')) {
    localStorageData = []
  }
  else {

    localStorageData = JSON.parse(localStorage.getItem('cart'));
  }
  let cartCountElement = document.getElementById('cartCountSpan');

  cartCountElement.innerText = localStorageData.length;
}

function shoppingBooks() {
  let localStorageData = [];

  if (!localStorage.getItem('cart')) {
    localStorageData = [];
  } else {
    localStorageData = JSON.parse(localStorage.getItem('cart'));
  }

  let shoppingDataList = "";
  let totalQty = 0;
  let totalPrice = 0;

  for (let index = 0; index < localStorageData.length; index++) {
    let bookItem = localStorageData[index];
    totalQty += bookItem.quantity
    totalPrice += bookItem.price * bookItem.quantity
    shoppingDataList += `<tr>
      <td>${bookItem.id}</td>
      <td class="" width="50px" colspan="2"><img src="${bookItem.img}" alt="Book Image" width="100"></td>
      <td>${bookItem.discription}</td>
      <td><input type="number" min="1" class="form-control w-25" id="qty${index}" onchange="changeQuantity(${index})" value="${bookItem.quantity}"></td>
      <td>$${bookItem.price}</td>
      <td>$${(bookItem.price * bookItem.quantity)}</td>
      <td><i class="bi bi-dash-square-fill h5 text-secondary text-danger pointer-cursor" onclick="deleteCartItem(${index})"></i></td>
    </tr>`
  }
  document.getElementById('rowsList').innerHTML = shoppingDataList;
  document.getElementById('totalQty').innerHTML = totalQty;
  document.getElementById('totalPrice').innerHTML = '$' + totalPrice;
  console.warn(totalQty);
}

shoppingBooks();

function changeQuantity(index) {
  var qty = document.getElementById('qty' + index).value;
  let localStorageData = [];

  if (!localStorage.getItem('cart')) {
    localStorageData = [];
  } else {
    localStorageData = JSON.parse(localStorage.getItem('cart'));
  }
  localStorageData[index].quantity = qty
  localStorage.setItem('cart', JSON.stringify(localStorageData));
  shoppingBooks()
}

function deleteCartItem(index) {
  let localStorageData = [];

  if (!localStorage.getItem('cart')) {
    localStorageData = [];
  } else {
    localStorageData = JSON.parse(localStorage.getItem('cart'));
  }
  localStorageData.splice(index, 1);

  localStorage.setItem('cart', JSON.stringify(localStorageData));
  shoppingBooks();
  updateCartCount();

}
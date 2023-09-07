let books = [
  {
    id: 1,
    img: '../Assets/images/b1.jpg',
    price: 14.00,
    name: 'Sam & Dave dig a Hole',
    discription: 'By SI MODARSK, TE SORKAZ',
  },
  {
    id: 2,
    img: '../Assets/images/b2.jpg',
    price: 19.00,
    name: 'The Assault',
    discription: 'ByMESHO BUVAHR, MODARSK',
  },
  {
    id: 3,
    img: '../Assets/images/b3.jpg',
    price: 19.00,
    name: 'The Carrot Hunt',
    discription: 'By KOGA FORESCAR, MESHO',
  },
  {
    id: 4,
    img: '../Assets/images/b4.jpg',
    price: 18.00,
    name: 'The DARK',
    discription: 'By SAVANNA WALKER',
  },
  {
    id: 5,
    img: '../Assets/images/b5.jpg',
    price: 12.00,
    name: 'The Journey of Dreams',
    discription: 'ByBHUZUN NAHLAM, WALKER',
  },
  {
    id: 6,
    img: '../Assets/images/b6.jpg',
    price: 22.00,
    name: 'The Night Ocean',
    discription: 'BySERO GLAN, SI MODARSK',
  },
  {
    id: 7,
    img: '../Assets/images/b7.jpg',
    price: 24.00,
    name: 'The Summer Impossible',
    discription: 'ByCHAI IAM, HOF NURGIN',
  },
  {
    id: 8,
    img: '../Assets/images/b8.jpg',
    price: 14.00,
    name: 'TRIO',
    discription: 'ByCHAI IAM, SAVANNA WALKER',
  },
];

let bookData = ""
for (let index = 0; index < books.length; index++) {
  let book = books[index];
  bookData += `<div class="col">
    <div class="card border-0">
      <a href="../Assets/Detail-Pages/detail.html">
        <img src="${book.img}" class="card-img-top" alt="...">
      </a>
      <div class="card-body d-flex flex-column align-items-center">
        <h4 class="card-text text-center text-success">$${book.price}</h4>
        <h5 class="card-title text-center my-2">${book.name}</h5>
        <p class="card-text text-center">${book.discription}</p>
        <div class="d-flex justify-content-center align-items-center mb-2 gap-2">
          <span>QTY</span>
          <input type="number" id="prodQty${index}" value="1" min="1" aria-label="Last name" class="form-control w-25 p-1">
        </div>
          <button type="button" class="btn btn-outline-secondary" onclick="addToCart(${index})">Add To Cart</button>
      </div>
    </div>
  </div>`
}
document.getElementById('grid-row').innerHTML = bookData;

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

function addToCart(index) {
  let cartData = books[index];
  let localStorageData = [];
  let qty = Number(document.getElementById(`prodQty${index}`).value)
  if (!localStorage.getItem('cart')) {
    localStorageData = []
  }
  else {

    localStorageData = JSON.parse(localStorage.getItem('cart'));
  }
  let cartExist = 0
  for (i = 0; i < localStorageData.length; i++) {
    if (localStorageData[i].id === cartData.id) {
      cartExist = 1
    }
  }
  if (cartExist === 0) {
    cartData = { ...cartData, ...{ quantity: qty } };
    console.log(cartData)
    localStorageData.push(cartData);
    localStorage.setItem('cart', JSON.stringify(localStorageData));
  }
  updateCartCount()
};
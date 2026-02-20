const url = "https://dummyjson.com/products";
let cart = JSON.parse(localStorage.getItem('cart')) || [];

loadProduct()
displayCart();
function addToCart(p) {
    const exits = cart.find((i)=>i.id == p.id)

    if(exits){
        exits.quantity++;
    }else{
        const p_with_quantity = {...p,quantity:1}
        cart.push(p_with_quantity)
    }
    saveCart()
    displayCart()
}

function removeToCart(p){
    const product = cart.find((i)=>i.id == p.id)

    if(product.quantity == 1){
        cart = cart.filter((i)=> i.id != product.id)
    }else{
        product.quantity--;
    }
    saveCart()
    displayCart()
}


function saveCart(){
    const deep_cart = structuredClone(cart)
    localStorage.setItem('cart', JSON.stringify(deep_cart))
    
}

function displayCart(){
    const container = document.getElementById("cartProduct");
    container.innerHTML = "";
    const items = localStorage.getItem("cart")
    if (!items) return;
    const cartItems = JSON.parse(items);
  
    cartItems.forEach((i)=>{
        createCartBox(i)
    })

    let total = cartItems.reduce((curr,acc)=>{
        curr = curr + (acc.quantity*acc.price)
        return curr
    },0)
    total =  Math.round(total * 100) / 100
    const div = document.createElement('div')
    div.innerHTML = 
    `
    <h2><strong>Total:${total} </strong> </h2>
    `
    container.appendChild(div)
}

function createCartBox(p){
    const container = document.getElementById("cartProduct")
    const div = document.createElement('div')
    div.className = 'product-card'

    div.innerHTML = `
        <h4>${p.title}</h4>
        <p><strong>Price:</strong> $ ${p.price}</p>
        <p><strong>Brand:</strong> ${p.brand}</p>
        <p><strong>Quantity:</strong> ${p.quantity}</p>
        <button class="removeCartBtn" >Remove to Cart</button>
    `

    const btn = div.querySelector(".removeCartBtn");
    btn.addEventListener("click", () => {
       removeToCart(p); 
    });
    container.appendChild(div);
}


function createProductBox(p){
    const container = document.getElementById("products");
    const div = document.createElement("div");
    div.className = "product-card";

    //   <p>${p.description}</p>
    //    <p><strong>Stock:</strong> ${p.stock}</p>

    div.innerHTML = `
    <h3>${p.title}</h3>
    <img src="${p.thumbnail}" alt="${p.title}" />
    <p><strong>Price:</strong> $ ${p.price}</p>
    <p><strong>Brand:</strong> ${p.brand}</p>
    <p><strong>Rating:</strong> ⭐ ${p.rating}</p>
    <button class="addCartBtn" >Add to Cart</button>
  `;

    const btn = div.querySelector(".addCartBtn");
    btn.addEventListener("click", () => {
       addToCart(p); 
    });


  container.appendChild(div);
}


async function fetchProduct(url,limit=20) {
  try {
    const res = await fetch(url+`?limit=${limit}`);
    const data = await res.json();
    // console.log(data);
    const {products} = data
    // console.log(products);

    products.forEach(p => {
        if(p.stock>0){
            createProductBox(p)
        }
    });

  } catch (err) {
    console.log("Error: In API fetching", err);
  }
}

function loadProduct(){
    fetchProduct(url)
}



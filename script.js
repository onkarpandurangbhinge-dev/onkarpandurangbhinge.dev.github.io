let cart=[];

function addToCart(item,price){

cart.push({item:item,price:price});

localStorage.setItem("cart",JSON.stringify(cart));

alert(item+" added to cart");

}

function showCart(){

let data=JSON.parse(localStorage.getItem("cart")) || [];

let output="";
let total=0;

for(let i=0;i<data.length;i++){

output+=data[i].item+" - ₹"+data[i].price+"<br>";

total+=data[i].price;

}

document.getElementById("cartItems").innerHTML=output;

document.getElementById("total").innerHTML="Total: ₹"+total;

}

function placeOrder(){

alert("Order Placed Successfully!");

localStorage.removeItem("cart");

location.reload();

}

function toggleDarkMode(){

document.body.classList.toggle("dark-mode");

}

function searchFood(){

let input=document.getElementById("searchBar").value.toLowerCase();
let cards=document.getElementsByClassName("card");

for(let i=0;i<cards.length;i++){

let text=cards[i].innerText.toLowerCase();

if(text.includes(input)){
cards[i].style.display="block";
}else{
cards[i].style.display="none";
}

}

}

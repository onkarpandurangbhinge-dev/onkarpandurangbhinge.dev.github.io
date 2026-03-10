function searchFood(){

let input = document.getElementById("search").value.toLowerCase();
let cards = document.getElementsByClassName("card");

for(let i=0;i<cards.length;i++){

let title = cards[i].innerText.toLowerCase();

if(title.includes(input)){
cards[i].style.display="block";
}
else{
cards[i].style.display="none";
}

}

}

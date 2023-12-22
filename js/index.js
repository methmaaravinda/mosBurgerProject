import {menuItems} from "./home"
// console.log(document.getElementById("img_holder").innerHTML="hello")

const placeItems = (pathToImg,itemCode,itemName,itemPrice)=>{
    const elm = document.getElementById("img_holder");

    const insertElm = `
        <div class="card mt-3" style="width: 10rem " >
            <img src="img/${pathToImg}" class="card-img-top" alt="..." />
            <ul class="list-group list-group-flush">
            <li class="list-group-item">${itemCode}</li>
            <li class="list-group-item">${itemName}</li>
            <li class="list-group-item">${itemPrice}</li>
            </ul>
        </div>
    `
    elm.innerHTML=insertElm;
    
}
placeItems("burgers/B1003.jpg","B1003","chiken burger"," 750.00");
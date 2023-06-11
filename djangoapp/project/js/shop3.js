const product = [
    {
        id: 0,
        image: 'images/shopnow4/samsungs8.jpeg',
        title: 'SAMSUNG S8',
        price: 1300,
    },
    {
        id: 1,
        image: 'images/shopnow4/iphone8.jpeg',
        title: 'IPHONE 8',
        price: 2000,
    },
    {
        id: 2,
        image: 'images/shopnow4/iphonex.jpeg',
        title: 'IPHONE X',
        price: 2100,
    },
    {
        id: 3,
        image: 'images/shopnow4/iphone11pro.jpeg',
        title: 'IPHONE 11 PRO',
        price: 3000,
    },
    {
        id: 4,
        image: 'images/shopnow4/iphone13.jpeg',
        title: 'IPHONE 13',
        price:4000,
    },
    {
        id: 5,
        image: 'images/shopnow4/iphone14pro.jpeg',
        title: 'IPHONE 14 PRO',
        price:4000,
    },
    {
        id: 5,
        image: 'images/shopnow4/airpodspro.jpeg',
        title: 'AIRPODS PRO',
        price:4000,
    },
    {
        id: 5,
        image: 'images/shopnow4/airpods1.webp',
        title: 'AIRPODS 1',
        price:4000,
    },
    {
        id: 5,
        image: 'images/shopnow4/samsungbuds.jpeg',
        title: 'SAMSUNG BUDS',
        price:4000,
    },
    {
        id: 6,
        image: 'images/shopnow4/nothing.jpeg',
        title: 'NOTHING EARSTICKS',
        price:4000,
    },
    
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+ 
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}
var area = [
    {
        image_url:
        "https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png",
        label: "Sprouts Farmers Market",
        Del: "Delivery - Pickup 7.5mi",
    },
    {
        image_url:
        "https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/1/1fe0065e-a947-4b5d-b274-3900694536d5.png",
        label:"Safeway",
        Del:"Delivery",
    },
    {
        image_url:
        "https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/31/f889f29f-5d02-4e96-92d2-19c05e886ff6.png",
        label:"Rainbow Grocery",
        Del:"Delivery",
    },
    {
        image_url:
        "https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png",
        label:"Costco",
        Del:"Delivery",
    },
    {
        image_url:
        "https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/1573/e04c8eaf-a180-4753-b651-8c4a1c81845c.png",
        label:"Walgreens",
        Del:"Delivery by 1:45am",
    },
    {
        image_url:
        "https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/1239/fa662636-8cbe-4625-b4a8-e5a54cc647bc.png",
        label:"Woodlands",
        Del:"Delivery",
    },
    {
        image_url:
        "https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/115/9617cce6-ddc3-4f24-a705-d92b7c95e886.jpg",
        label:"Mollie Stone's Markets",
        Del:"Delivery",
    },
    {
        image_url:
        "https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/180/485ab8a3-eadb-480e-9936-ca19c5777f10.png",
        label:"Gus's Community Market",
        Del:"Delivery",
    },
    {
        image_url:
        "https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/118/c7780a16-90f9-4596-b82b-af4121fe1ca0.png",
        label:"CVS Pharmacy",
        Del:"Delivery",
    },
    {
        image_url:
        "https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/220/fba1c010-69bd-4fd2-9d51-031a8cbe2965.png",
        label:"BevMo!",
        Del:"Delivery",
    },
    {
        image_url:
        "https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/29/1fbf3168-c654-4f7d-864f-7a615a041346.jpg",
        label:"Bi-Rite Market",
        Del:"Delivery",
    },
    {
        image_url:
        "https://www.instacart.com/image-server/87x87/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/542/930560f2-a134-496c-a71b-99984d9bfa52.png",
        label:"Lucky Supermarkets",
        Del:"Delivery",
    }
]
area.map(function(elem){
    var box = document.createElement("div");
    box.style.display="flex";
    box.className="box";
    var boxx = document.createElement("div");
    var boxxx = document.createElement("div");
    var img = document.createElement("img");
    img.src = elem.image_url;
    boxx.append(img);
    boxx.className="boxx";
    

    var name = document.createElement("p");
    name.textContent = elem.label;

    var del = document.createElement("p");
    del.innerText = elem.Del;
    boxxx.append(name,del);
    boxxx.className="boxxx";


box.append(boxx,boxxx)

document.querySelector("#container").append(box);
});

// redirecting to login page
document.querySelector(".login").addEventListener("click",loginPage)
function loginPage(){
    window.location.href="login.html"
}
// ends

//redirecting to signup page
document.querySelector(".signup").addEventListener("click",signupPage)
function signupPage(){
    window.location.href="signup.html"
}
//ends

//redirecting to grocery page 
document.querySelector(".startshopping").addEventListener("click",startShop)
function startShop(){
    window.location.href = "grocery.html";
}







let shopGoods = [
  {
    "store_name": "Moda Dünyası",
    "store_address": "Bakı şəhəri, Nizami kuçəsi 5",
    "products": [
      {"product_name": "Kişi köynəyi", "product_description": "Mavi rəngdə, 100% pamuk", "product_price": 50},
      {"product_name": "Qadın bluzası", "product_description": "Dəri detallı, qara rəngdə", "product_price": 60},
      {"product_name": "Kişi pantolonu", "product_description": "Qəhvəyi rəng, kənar cebi", "product_price": 75},
      {"product_name": "Qadın eteyi", "product_description": "Qırmızı rəng, mini", "product_price": 40},
      {"product_name": "Kişi dəsmalı", "product_description": "Nəqşdar dizayn", "product_price": 20},
      {"product_name": "Qadın çantası", "product_description": "Əlgötürən, dəri", "product_price": 90},
      {"product_name": "Kişi botları", "product_description": "Qış üçün, suya davamlı", "product_price": 120},
      {"product_name": "Qadın ayaqqabıları", "product_description": "Yüksək tapan, lacivərt", "product_price": 85},
      {"product_name": "Kişi papağı", "product_description": "Qara rəngdə, dəri", "product_price": 45},
      {"product_name": "Qadın şalvarı", "product_description": "Göy rəngdə, kaşmir", "product_price": 70}
    ]
  },
  {
    "store_name": "Zərif Moda",
    "store_address": "Bakı şəhəri, 28 May kuçəsi 12",
    "products": [
      {"product_name": "Kişi palto", "product_description": "Süət dəri, qara rəngdə", "product_price": 250},
      {"product_name": "Qadın jaketi", "product_description": "Uzun, qaşqır", "product_price": 200},
      {"product_name": "Kişi kəməri", "product_description": "Dəri, metal tokalı", "product_price": 40},
      {"product_name": "Qadın badlonu", "product_description": "Retro stil, qızıl rəngdə", "product_price": 180},
      {"product_name": "Kişi şortu", "product_description": "Spor stil, elastik", "product_price": 60},
      {"product_name": "Qadın maykası", "product_description": "Boyalı nəqş, pamuklu", "product_price": 45},
      {"product_name": "Kişi saatı", "product_description": "Qara rəngdə, analog", "product_price": 150},
      {"product_name": "Qadın bəzək", "product_description": "Qızıl, komplekt", "product_price": 220},
      {"product_name": "Kişi atkısı", "product_description": "Xəzəl rəng, uzun", "product_price": 35},
      {"product_name": "Qadın bantı", "product_description": "Metal detallı, elastik", "product_price": 50}
    ]
  },
  {
    "store_name": "Əliyev Moda Mərkəzi",
    "store_address": "Bakı şəhəri, Azadlıq prospekti 89",
    "products": [
      {"product_name": "Kişi kostyumu", "product_description": "İki parçalı, qara rəngdə", "product_price": 320},
      {"product_name": "Qadın kombinezonu", "product_description": "Yaz üçün, açıq rəng", "product_price": 150},
      {"product_name": "Kişi sviteri", "product_description": "Düz rəng, yüngül", "product_price": 70},
      {"product_name": "Qadın ziyafət geyimi", "product_description": "Düzənşən, yaz üçün", "product_price": 95},
      {"product_name": "Kişi sport formaları", "product_description": "Spandex, idman üçün", "product_price": 55},
      {"product_name": "Qadın bikini", "product_description": "Tropik nəqş, elastik", "product_price": 45},
      {"product_name": "Kişi çantası", "product_description": "Dizayner, əsas bölməsi", "product_price": 100},
      {"product_name": "Qadın ətri", "product_description": "Gül ətri, uzunömürlü", "product_price": 80},
      {"product_name": "Kişi şalı", "product_description": "Səliqəli, çoxrəngli", "product_price": 25},
      {"product_name": "Qadın sutyeni", "product_description": "Destəklənmiş, rahat", "product_price": 65}
    ]
  }
];

let currentUser = "Admin";  
let shoppingCart = {};  

while (true) {
  let operation = prompt(currentUser === "Admin" ? "Admin əməliyyatları: 1-Malların siyahısı, 2-Mal əlavə et, 3-Malı sil, 4-Qiyməti dəyiş,  5-Məhsulları sırala, 6-Alıcı kimi daxil ol, 0-Çıxış" : "Alıcı əməliyyatları: 1-Malların siyahısı, 2-Mal axtar, 3-Malları sırala, 4-Səbətə əlavə et, 5-Səbəti göstər, 0-Çıxış");

  if (operation === "0") {
    break;
  }

  if (currentUser === "Admin") {
    switch (operation) {
      case "1":
        showAllProducts();
        break;
      case "2":
        addProduct();
        break;
      case "3":
        deleteProduct();
        break;
      case "4":
        changePrice();
        break;
      case "5":
        sortProducts();
        break;
      case "6":
        currentUser = "Buyer";
        break;
      default:
        alert("Düzgün əməliyyat seçilməyib!");
    }
  } else {
    switch (operation) {
      case "1":
        showAllProducts();
        break;
      case "2":
        searchProduct();
        break;
      case "3":
        sortProducts();
        break;
      case "4":
        addToCart();
        break;
      case "5":
        showCart();
        break;
      case "0":
        break;
      default:
        alert("Düzgün əməliyyat seçilməyib!");
    }
  }
}

function showAllProducts() {
  let productList = "";
  shopGoods.forEach((item)=>{
    productList += `\nMağaza adı: ${item.store_name}\nMağaza ünvanı: ${item.store_address}\nMallar:\n`;
    item.products.forEach((product)=>{
      productList += `- ${product.product_name}, ${product.product_description}, Qiymət: ${product.product_price}\n`;
    })
  })
  
  console.log(productList);
}

function addProduct() {
  let storeName = prompt("Mal əlavə edilməli olduğu mağazanın adını daxil edin:");
  let product = {
    "product_name": prompt("Məhsulun adını daxil edin:"),
    "product_description": prompt("Məhsulun təsvirini daxil edin:"),
    "product_price": parseFloat(prompt("Məhsulun qiymətini daxil edin:"))
  };
 
  shopGoods.forEach((item )=>{ 
    if (item.store_name === storeName) {
      item.products.push(product);
      alert("Məhsul uğurla əlavə edildi!");
      return;
    }  
}) 
}


function deleteProduct() {
  let productName = prompt("Silmək istədiyiniz məhsulun adını daxil edin:");
  shopGoods.forEach((item)=>{
    for (let i = 0; i < item.products.length; i++) {
      if (item.products[i].product_name === productName) {
        item.products.splice(i, 1);
        alert("Məhsul uğurla silindi!");
        return;
      }
    }
  })
  
   
}

function changePrice() {
  let productName = prompt("Qiymətini dəyişmək istədiyiniz məhsulun adını daxil edin:");
  let newPrice = parseFloat(prompt("Yeni qiyməti daxil edin:"));
  shopGoods.forEach((item )=>{ 
    item.products.forEach((product)=>{
      if (product.product_name === productName) {
        product.product_price = newPrice;
        alert("Qiymət uğurla dəyişdirildi!");
        return;
      }

    })
    
  }) 
}

 
function sortProducts() {
  let sortOrder = prompt("Sıralama üsulu: 1-Qiyməti artan, 2-Qiyməti azalan, 3-Əlifba sırası");
  shopGoods.forEach((item)=>{
    item.products.sort((a, b) => {
      if (sortOrder === "1") {
        return a.product_price - b.product_price;
      } else if (sortOrder === "2") {
        return b.product_price - a.product_price;
      } else {
        return a.product_name.localeCompare(b.product_name);
      }
    });
  })
  
  alert("Məhsullar müvəffəqiyyətlə sıralandı!");
}

function searchProduct() {
  let productName = prompt("Axtardığınız məhsulun adını daxil edin:");
  let foundProducts = "";
  shopGoods.forEach((item)=>{
    item.products.forEach((product)=>{
      if (product.product_name.toLowerCase().includes(productName.toLowerCase())) {
        foundProducts += `Mağaza: ${item.store_name}, Məhsul: ${product.product_name}, Təsvir: ${product.product_description}, Qiymət: ${product.product_price}\n`;
      }
    })
     
  })   
  console.log(foundProducts || "Axtardığınız məhsul tapılmadı!");
}

function addToCart() {
  let productName = prompt("Səbətə əlavə etmək istədiyiniz məhsulun adını daxil edin:");
  let quantity = parseInt(prompt("Miqdarı daxil edin:"));
  shopGoods.forEach((item)=>{
    item.products.forEach((product)=>{
      if (product.product_name.toLowerCase() === productName.toLowerCase()) {
        if (shoppingCart[productName]) {
          shoppingCart[productName].quantity += quantity;
        } else {
          shoppingCart[productName] = {
            "price": product.product_price,
            "quantity": quantity
          };
        }
        alert("Məhsul səbətə əlavə edildi!");
        return;
      } 
    })
  })
   
   
}
function showCart() {
  let cartItems = "Səbət:\n";
  let totalPrice = 0;

  Object.keys(shoppingCart).forEach(item => {
    cartItems += `${item} - Miqdar: ${shoppingCart[item].quantity}, Qiymət: ${shoppingCart[item].price * shoppingCart[item].quantity}\n`;
    totalPrice += shoppingCart[item].price * shoppingCart[item].quantity;
  });

  alert(cartItems + `Cəm: ${totalPrice}`);
}
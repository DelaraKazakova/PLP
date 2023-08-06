const products = [
  {
    "id": 1,
    "name": "t-shirt",
    "description": "This is a t-shirt",
    "price": 19,
    "discountPrice": 15.2,
    "category": "men",
    "color": "blue",
    "size": "small",
    "rating": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 2,
    "name": "pants",
    "description": "This is a pants",
    "price": 66,
    "discountPrice": "",
    "category": "women",
    "color": "red",
    "size": "medium",
    "rating": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 3,
    "name": "blouse",
    "description": "This is a blouse",
    "price": 140,
    "discountPrice": "",
    "category": "men",
    "color": "yellow",
    "size": "large",
    "rating": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 4,
    "name": "jacket",
    "description": "This is a jacket",
    "price": 156,
    "discountPrice": 124.8,
    "category": "men",
    "color": "blue",
    "size": "small",
    "rating": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 5,
    "name": "skirt",
    "description": "This is a skirt",
    "price": 115,
    "discountPrice": 92,
    "category": "women",
    "color": "red",
    "size": "medium",
    "rating": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 6,
    "name": "sweatshirt",
    "description": "This is a t-shirt",
    "price": 81,
    "discountPrice": 64.8,
    "category": "men",
    "color": "yellow",
    "size": "large",
    "rating": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 7,
    "name": "jeans",
    "description": "This is a pants",
    "price": 70,
    "discountPrice": "",
    "category": "men",
    "color": "blue",
    "size": "small",
    "rating": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 8,
    "name": "blouse",
    "description": "This is a blouse",
    "price": 198,
    "discountPrice": 158.4,
    "category": "women",
    "color": "red",
    "size": "medium",
    "rating": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 9,
    "name": "jacket",
    "description": "This is a jacket",
    "price": 120,
    "discountPrice": "",
    "category": "men",
    "color": "yellow",
    "size": "large",
    "rating": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 10,
    "name": "skirt",
    "description": "This is a skirt",
    "price": 39,
    "discountPrice": "",
    "category": "women",
    "color": "blue",
    "size": "small",
    "rating": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 11,
    "name": "t-shirt",
    "description": "This is a t-shirt",
    "price": 68,
    "discountPrice": 54.4,
    "category": "women",
    "color": "red",
    "size": "medium",
    "rating": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 12,
    "name": "pants",
    "description": "This is a pants",
    "price": 71,
    "discountPrice": 56.8,
    "category": "men",
    "color": "yellow",
    "size": "large",
    "rating": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 13,
    "name": "blouse",
    "description": "This is a blouse",
    "price": 37,
    "discountPrice": "",
    "category": "men",
    "color": "blue",
    "size": "small",
    "rating": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 14,
    "name": "jacket",
    "description": "This is a jacket",
    "price": 27,
    "discountPrice": "",
    "category": "women",
    "color": "red",
    "size": "medium",
    "rating": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 15,
    "name": "skirt",
    "description": "This is a skirt",
    "price": 152,
    "discountPrice": 121.6,
    "category": "women",
    "color": "yellow",
    "size": "large",
    "rating": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 16,
    "name": "t-shirt",
    "description": "This is a t-shirt",
    "price": 79,
    "discountPrice": "",
    "category": "men",
    "color": "blue",
    "size": "small",
    "rating": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 17,
    "name": "t-shirt",
    "description": "This is a t-shirt",
    "price": 158,
    "discountPrice": 126.4,
    "category": "men",
    "color": "red",
    "size": "medium",
    "rating": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 18,
    "name": "pants",
    "description": "This is a pants",
    "price": 120,
    "discountPrice": "",
    "category": "women",
    "color": "yellow",
    "size": "large",
    "rating": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 19,
    "name": "blouse",
    "description": "This is a blouse",
    "price": 140,
    "discountPrice": 112,
    "category": "men",
    "color": "blue",
    "size": "small",
    "rating": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 20,
    "name": "jacket",
    "description": "This is a jacket",
    "price": 117,
    "discountPrice": "",
    "category": "men",
    "color": "red",
    "size": "medium",
    "rating": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 21,
    "name": "skirt",
    "description": "This is a skirt",
    "price": 183,
    "discountPrice": 146.4,
    "category": "women",
    "color": "yellow",
    "size": "large",
    "rating": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 22,
    "name": "t-shirt",
    "description": "This is a t-shirt",
    "price": 173,
    "discountPrice": "",
    "category": "men",
    "color": "blue",
    "size": "small",
    "rating": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 23,
    "name": "pants",
    "description": "This is a pants",
    "price": 158,
    "discountPrice": "",
    "category": "men",
    "color": "red",
    "size": "medium",
    "rating": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 24,
    "name": "blouse",
    "description": "This is a blouse",
    "price": 71,
    "discountPrice": "",
    "category": "women",
    "color": "yellow",
    "size": "large",
    "rating": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 25,
    "name": "jacket",
    "description": "This is a jacket",
    "price": 50,
    "discountPrice": 40,
    "category": "men",
    "color": "blue",
    "size": "small",
    "rating": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 26,
    "name": "skirt",
    "description": "This is a skirt",
    "price": 96,
    "discountPrice": "",
    "category": "women",
    "color": "red",
    "size": "medium",
    "rating": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 27,
    "name": "t-shirt",
    "description": "This is a t-shirt",
    "price": 84,
    "discountPrice": 67.2,
    "category": "women",
    "color": "yellow",
    "size": "large",
    "rating": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 28,
    "name": "pants",
    "description": "This is a pants",
    "price": 177,
    "discountPrice": "",
    "category": "men",
    "color": "blue",
    "size": "small",
    "rating": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 29,
    "name": "blouse",
    "description": "This is a blouse",
    "price": 102,
    "discountPrice": 81.6,
    "category": "men",
    "color": "red",
    "size": "medium",
    "rating": "⭐⭐⭐⭐⭐"
  },
  {
    "id": 30,
    "name": "jacket",
    "description": "This is a jacket",
    "price": 133,
    "discountPrice": 106.4,
    "category": "women",
    "color": "yellow",
    "size": "large",
    "rating": "⭐⭐⭐⭐⭐"
  }
]
$(document).ready(() => {
  let currentPage = 1;
  const productsPerPage = 16;

  // Function to create product tiles
  function createProductTile(product) {
    const hasDiscount = product.discountPrice > 0;
    const productTile = `
  <div class="col product show ${product.category} ${product.size} ${product.color}" data-name="${product.name}" data-price="${hasDiscount ? product.discountPrice : product.price}">
    <div class="card">
      <img src="./images/${product.category}.jpg" class="card-img-top" alt="image">
      <div class="card-body position-relative">
        <div class="row row-cols-2 productDescription">
          <div class="col"><h5 class="card-title">${product.name}</h5></div>
          <div class="col text-end"><span class="d-inline-block">${product.rating}</span></div>
          <div class="col"><p class="card-text small">${product.description}</p></div>
          <div class="col text-end">
            <del class="text-secondary">${hasDiscount ? product.price + '$' : ''}</del>
            <h5 class="d-inline">${hasDiscount ? product.discountPrice + '$' : product.price + '$'}</h5>
          </div >
        </div >
      <button class="btn mt-2 add-to-cart" type="button">Add to cart</button>
      </div >
    </div >
  </div >
    `;
    return productTile;
  }

  //Navigation
  $("body").on("click", ".nav-link", function (e) {
    e.preventDefault()
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
    //Update selected category
    selectedCategory = $(this).text();

    if (selectedCategory == "show all") {
      $('.product').show();
    }
    else {
      $(".product").not("." + selectedCategory).hide("1000").removeClass("show")
      $('.product').filter("." + selectedCategory).show("1000")
      updateProductCounter()
    }
    //categories description
    $("#category").text(selectedCategory);
    switch (selectedCategory) {
      case "SHOP ALL":
        $("#description").text("Clothing for all.");
        break;
      case "MEN":
        $("#description").text("Only mens clothing.");
        break;
      case "WOMEN":
        $("#description").text("Only womens clothing.");
        break;
      default:
        break;
    }
    currentPage = 1;
    updateProductGrid();
  });


  // Function to update the product counter
  function updateProductCounter() {
    const totalProducts = products.length;
    const displayedProducts = $('#productList .product.show').length;
    $('#counter #productsDisplayed').text(displayedProducts + " / " + totalProducts);
  }

  // Function to display products
  function displayProducts() {
    const productList = $("#productList");

    let startIndex = (currentPage - 1) * productsPerPage;
    let endIndex = startIndex + productsPerPage;

    for (let i = startIndex; i < endIndex; i++) {
      const product = products[i];
      if (!product) break;
      const productTile = createProductTile(product);
      productList.append(productTile);
    }
    updateProductCounter();
  }

  // Function to update the product grid
  function updateProductGrid(startIndex, endIndex) {
    const totalProducts = products.length;
    endIndex = Math.min(endIndex, totalProducts);
    displayProducts(startIndex, endIndex);
  }

  //Sorting
  $(document).on("change", "#sorting", () => {
    const value = $("option:selected").val()
    sortProducts(value)
    updateProductGrid()
  })

  function sortProducts(value) {
    var product = $(".product")
    if (value === "ascending") {
      product.sort((a, b) => {
        return $(a).data("price") - $(b).data("price")
      });
    } else if (value === "descending") {
      product.sort((a, b) => {
        return $(b).data("price") - $(a).data("price")
      });
    } else if (value === "a-z") {
      product.sort((a, b) => {
        const nameA = $(a).data("name")
        const nameB = $(b).data("name")
        return nameA.localeCompare(nameB)
      })
    } else if (value === "z-a") {
      product.sort((a, b) => {
        const nameA = $(a).data("name")
        const nameB = $(b).data("name")
        return nameB.localeCompare(nameA)
      })
    }
    $("#productList").html(product);
  }

  // Load products on page load
  displayProducts();

  //Added to cart alert
  $(".add-to-cart").on("click", () => {
    alert("Item added to cart");
  });

  // Load More
  $("#loadMore").on("click", () => {
    currentPage++;
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    updateProductGrid(startIndex, endIndex);
  });
});
let cartCount = 0; // Counter variable for products added to cart

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const productListElement = document.getElementById("productlist");
    data.forEach((product, index) => {
      const cardContainer = document.createElement("div");
      cardContainer.classList.add("col");

      const card = document.createElement("div");
      card.classList.add("card", "h-100");

      const row = document.createElement("div");
      row.classList.add("row", "g-0");

      const imageColumn = document.createElement("div");
      imageColumn.classList.add("col-md-4");

      const image = document.createElement("img");
      image.src = `product${index + 1}.jpg`;`product.jpeg`; `product2{index + 1}.webp`;// Assumes your images are named product1.jpg, product2.jpg, etc.
      image.classList.add("img-fluid", "rounded-start");
      image.alt = product.product_name;

      const contentColumn = document.createElement("div");
      contentColumn.classList.add("col-md-8");

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const title = document.createElement("h5");
      title.classList.add("card-title");
      title.textContent = product.product_name;

      const description = document.createElement("p");
      description.classList.add("card-text");
      description.textContent = product.product_description;

      const price = document.createElement("p");
      price.classList.add("card-text");
      price.innerHTML = `<small class="text-muted">Price: $${product.product_price}</small>`;

      const dates = document.createElement("p");
      dates.classList.add("card-text");
      dates.innerHTML = `<small class="text-muted">Added: ${product.product_dateAdded}, Expires: ${product.product_ExpirationDate}</small>`;

      const addToCartButton = document.createElement("button");
      addToCartButton.classList.add("btn", "btn-primary");
      addToCartButton.textContent = "Add to Cart";

      addToCartButton.addEventListener("click", () => {
        cartCount++; // Increment cart count when button is clicked
        document.getElementById("cartCount").textContent = `Products in Cart: ${cartCount}`;
      });

      cardBody.appendChild(title);
      cardBody.appendChild(description);
      cardBody.appendChild(price);
      cardBody.appendChild(dates);
      cardBody.appendChild(addToCartButton);

      imageColumn.appendChild(image);
      contentColumn.appendChild(cardBody);

      row.appendChild(imageColumn);
      row.appendChild(contentColumn);

      card.appendChild(row);
      cardContainer.appendChild(card);

      productListElement.appendChild(cardContainer);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

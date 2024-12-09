document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.getElementById("mainContent");
  const homeLink = document.getElementById("homeLink");
  const catalogLink = document.getElementById("catalogLink");

  // Load Home Page
  homeLink.addEventListener("click", (e) => {
    e.preventDefault();
    mainContent.innerHTML = `<h1>Welcome to the Catalog</h1>`;
  });

  // Load Catalog
  catalogLink.addEventListener("click", async (e) => {
    e.preventDefault();
    const categories = await fetchCategories();
    renderCategories(categories);
  });

  // Fetch categories
  async function fetchCategories() {
    const response = await fetch("categories.json");
    return response.json();
  }

  // Fetch products
  async function fetchProducts(category) {
    const response = await fetch(`${category}.json`);
    return response.json();
  }

  // Render categories
  function renderCategories(categories) {
    mainContent.innerHTML = `<h2>Catalog</h2><div class="row"></div>`;
    const row = mainContent.querySelector(".row");
    categories.forEach((category) => {
      const card = document.createElement("div");
      card.className = "col-md-3 mb-3";
      card.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${category.name}</h5>
            <p class="card-text">${category.notes}</p>
            <button class="btn btn-primary" data-category="${category.shortname}">View</button>
          </div>
        </div>`;
      row.appendChild(card);
    });

    // Add event listeners for category buttons
    document.querySelectorAll(".btn-primary").forEach((button) => {
      button.addEventListener("click", async (e) => {
        const category = e.target.getAttribute("data-category");
        const products = await fetchProducts(category);
        renderProducts(category, products);
      });
    });
  }

  // Render products
  function renderProducts(category, products) {
    mainContent.innerHTML = `<h2>${category.charAt(0).toUpperCase() + category.slice(1)}</h2><div class="row"></div>`;
    const row = mainContent.querySelector(".row");
    products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "col-md-3 mb-3";
      card.innerHTML = `
        <div class="card">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text"><strong>${product.price}</strong></p>
          </div>
        </div>`;
      row.appendChild(card);
    });
  }
});

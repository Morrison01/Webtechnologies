document.addEventListener('DOMContentLoaded', function () {
    const categoriesContainer = document.getElementById('categories');
    const specialsLink = document.getElementById('specialsLink');
  
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        // Виведення категорій
        data.forEach(category => {
          const categoryDiv = document.createElement('div');
          categoryDiv.classList.add('category');
          categoryDiv.innerHTML = `
            <h2>${category.name}</h2>
            <p>${category.notes}</p>
            <div id="category-${category.id}" class="products"></div>
          `;
          categoriesContainer.appendChild(categoryDiv);
  
          // Виведення товарів у категорії
          category.products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
              <img src="${product.image}" alt="${product.name}">
              <h3>${product.name}</h3>
              <p>${product.description}</p>
              <p class="price">Ціна: ${product.price}</p>
            `;
            document.getElementById(`category-${category.id}`).appendChild(productDiv);
          });
        });
  
        // Випадковий вибір категорії
        specialsLink.addEventListener('click', function () {
          const randomCategory = data[Math.floor(Math.random() * data.length)];
          const randomCategoryDiv = document.getElementById(`category-${randomCategory.id}`);
          categoriesContainer.innerHTML = `
            <h1>Спеціальні пропозиції</h1>
            <h2>${randomCategory.name}</h2>
          `;
          randomCategory.products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
              <img src="${product.image}" alt="${product.name}">
              <h3>${product.name}</h3>
              <p>${product.description}</p>
              <p class="price">Ціна: ${product.price}</p>
            `;
            categoriesContainer.appendChild(productDiv);
          });
        });
      });
  });
  
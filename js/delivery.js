fetch("food.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const pizzaItemMenu = document.getElementById("pizza-item-menu");
    const burgerItemMenu = document.getElementById("burger-item-menu");
    const friesItemMenu = document.getElementById("fries-item-menu");
    const miscItemMenu = document.getElementById("misc-item-menu");

    for (let each = 0; each < data.length; each++) {
      if (data[each].category === "Pizza") {
        pizzaItemMenu.innerHTML += `
        <div class="menu-item-card">
          <img src="${data[each].image}" alt="${data[each].name}" />
          <div class="item-info">
            <h3>${data[each].name}</h3>
            <p>${data[each].description}</p>
          </div>
          <div class="item-price-add">
            <span class="price">${"₹" + data[each].price}</span>
            <button class="add-btn">+</button>
          </div>
        </div>
        `;
      } else if (data[each].category === "Burgers") {
        burgerItemMenu.innerHTML += `
        <div class="menu-item-card">
          <img src="${data[each].image}" alt="${data[each].name}" />
          <div class="item-info">
            <h3>${data[each].name}</h3>
            <p>${data[each].description}</p>
          </div>
          <div class="item-price-add">
            <span class="price">${"₹" + data[each].price}</span>
            <button class="add-btn">+</button>
          </div>
        </div>
        `;
      } else if (data[each].category === "Fries") {
        friesItemMenu.innerHTML += `
        <div class="menu-item-card">
          <img src="${data[each].image}" alt="${data[each].name}" />
          <div class="item-info">
            <h3>${data[each].name}</h3>
            <p>${data[each].description}</p>
          </div>
          <div class="item-price-add">
            <span class="price">${"₹" + data[each].price}</span>
            <button class="add-btn">+</button>
          </div>
        </div>
        `;
      } else if (data[each].category === "Miscellaneous") {
        miscItemMenu.innerHTML += `
        <div class="menu-item-card">
          <img src="${data[each].image}" alt="${data[each].name}" />
          <div class="item-info">
            <h3>${data[each].name}</h3>
            <p>${data[each].description}</p>
          </div>
          <div class="item-price-add">
            <span class="price">${"₹" + data[each].price}</span>
            <button class="add-btn">+</button>
          </div>
        </div>
        `;
      }
    }
  });

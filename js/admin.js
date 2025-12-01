function addToJson() {
  const newFoodItem = {
    name: document.getElementById("name").value,
    category: document.getElementById("category").value,
    price: document.getElementById("price").value,
    image: document.getElementById("image").value,
    description: document.getElementById("description").value,
  };
  console.log(newFoodItem);
}

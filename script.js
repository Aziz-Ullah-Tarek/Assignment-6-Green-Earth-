const categoryContainer = document.getElementById("categoryContainer");
const cardContainer = document.getElementById("cardContainer");
const callBtn = document.getElementById("call-btn");

let cart = [];

// Load all categories
const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => {
      const categories = data.categories;
      showCategory(categories);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Show categories
const showCategory = (categories) => {
  // Add All Plants first
  categoryContainer.innerHTML = `
    <li id="all" class="space-y-6 pt-3 text-[16px] bg-green-600 rounded-sm p-1 cursor-pointer">
      All Plants 
    </li>
  `};
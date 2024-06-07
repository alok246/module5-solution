// Array of category short names
const categoryShortNames = ["Lunch", "Dinner", "Sushi", "Drinks", "Desserts"];

// Function to generate a random category short name
function getRandomCategoryShortName() {
    return categoryShortNames[Math.floor(Math.random() * categoryShortNames.length)];
}

// Function to load a random single category menu page
function loadSpecialsPage() {
    const randomCategoryShortName = getRandomCategoryShortName();
    console.log("Loading specials for category:", randomCategoryShortName);
    // Here you would add code to load menu items for the given category
}

// Add event listener to the Specials tile
document.getElementById("specials-tile").addEventListener("click", loadSpecialsPage);

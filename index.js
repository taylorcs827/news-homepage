// Selecting DOM elements
const menuBtn = document.querySelector('.menu-btn'); // Menu button
const menu = document.querySelector('.menu'); // Menu itself
const closeBtn = document.querySelector('.close-btn'); // Close button within the menu

// Event listener for opening/closing the menu
menuBtn.addEventListener('click', () => {
    // Toggle the 'show-menu' class on the menu to show/hide it
    menu.classList.toggle('show-menu');
    // Toggle the 'hidden' class on the menu button to hide/show it
    menuBtn.classList.toggle('hidden');
});

// Event listener for closing the menu when close button is clicked
closeBtn.addEventListener('click', () => {
    // Toggle the 'show-menu' class on the menu to hide it
    menu.classList.toggle('show-menu');
    // Toggle the 'hidden' class on the menu button to show it
    menuBtn.classList.toggle('hidden');
});

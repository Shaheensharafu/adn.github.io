
  function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
  }
  
  // Close the menu when a menu item is clicked
  const menuItems = document.querySelectorAll('.menu li a');
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const menu = document.querySelector('.menu');
      menu.classList.remove('show');
    });
  });
  
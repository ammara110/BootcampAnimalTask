// Filter function
function filter(filter) {
  // Get all image containers
  const containers = document.querySelectorAll('.imageFilter');
  
  containers.forEach(container => {
    // Show all containers on 'all' filter 
    if(filter === 'all') {
      container.style.display = 'block';
    }
    // Otherwise, show only containers that match filter
    else {
      if(container.classList.contains(filter)) {
        container.style.display = 'block';
      } else {
        container.style.display = 'none';
      }
    }
  })  
}

// Filter  click handlers
document.querySelectorAll('.buttonFilter').forEach(button => {

  button.addEventListener('click', () => {
   
    // Remove active class from all buttons 
    document.querySelectorAll('.buttonFilter').forEach(el => {
      el.classList.remove('active');
    });
    
    // Add active class for clicked button
    button.classList.add('active');
    
    // Get filter value
    const filterValue = button.getAttribute('data-filter'); 
    
    // Apply filter
    filter(filterValue);
    
    // Update helper text
    updateHelperText();
    
  });

});


// Search 
document.getElementById('search').addEventListener('keyup', () => {

  const searchValue = event.target.value;
  
  // Apply filter with value 
  filter(searchValue);
  
  // Update helper text called
  updateHelperText();
  
});


// Update helper text function to show value for selected item
function updateHelperText() {

  const searchText = document.getElementById('search').value;  
  const activeFilter = document.querySelector('.active').innerText;

  document.getElementById('helperText').innerText = `
    Showing animals that match "${searchText}" and the filter ${activeFilter}
  `;

}
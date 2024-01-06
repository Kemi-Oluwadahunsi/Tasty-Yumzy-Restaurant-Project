document.querySelector('.orderNow').addEventListener('click', popCart)
document.getElementById('closeCart').addEventListener('click', closeCart)

function popCart() {
  document.getElementById('cartContainer').style.display = 'block';
};
  
  function closeCart() {
    document.getElementById('cartContainer').style.display = 'none';
  };



const toggleButton = document.querySelector('.toggle_btn');
const icon = toggleButton.querySelector('i');


toggleButton.addEventListener('click', Show)

function Show() {
  // document.querySelector('.mobileContainer').style.display = 'block'
  document.querySelector('.mobileContainer').classList.toggle('show-menu');
  
  
  // Toggle between the bars and X icon
  if (icon.classList.contains('fa-bars')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
   
  }
  
};




const selectedTime = document.getElementById('time').value;
// selectedTime.addEventListener("click" , showMeals)


function showMeals() {
  // Hide all meal sections
  const mealSections = document.querySelectorAll('#menu ul');
  mealSections.forEach(section => {
    section.style.display = 'none';
  });

  // Show selected meal section
  const selectedTime = document.getElementById('time').value;
  const selectedSection = document.getElementById(selectedTime + '-meals');
  if (selectedSection) {
  selectedSection.style.display = 'block';
  }
  // Change background color
const cartContent = document.getElementById('cartContent');
if (selectedTime === "choose") {
  cartContent.style.background = ''; // Revert to default background color
} else {
  cartContent.style.background = 'white';
}
}
  function calculateTotal() {
    // Retrieve the selected time of the day
    const selectedTime = document.getElementById('time').value;
  
   
  
    // Retrieve the quantity for each meal
    const meal1Quantity = parseInt(document.getElementById('meal1').value);
    const meal2Quantity = parseInt(document.getElementById('meal2').value);
    const meal3Quantity = parseInt(document.getElementById('meal3').value);
    const meal4Quantity = parseInt(document.getElementById('meal4').value);
    const meal5Quantity = parseInt(document.getElementById('meal5').value);
    const meal6Quantity = parseInt(document.getElementById('meal6').value);
    const meal7Quantity = parseInt(document.getElementById('meal7').value);
    const meal8Quantity = parseInt(document.getElementById('meal8').value);
    const meal9Quantity = parseInt(document.getElementById('meal9').value);
    const meal10Quantity = parseInt(document.getElementById('meal10').value);
    const meal11Quantity = parseInt(document.getElementById('meal11').value);
    const meal12Quantity = parseInt(document.getElementById('meal12').value);
    const meal13Quantity = parseInt(document.getElementById('meal13').value);
    const meal14Quantity = parseInt(document.getElementById('meal14').value);
    const meal15Quantity = parseInt(document.getElementById('meal15').value);
    const meal16Quantity = parseInt(document.getElementById('meal16').value);
    const meal17Quantity = parseInt(document.getElementById('meal17').value);
    const meal18Quantity = parseInt(document.getElementById('meal18').value);
    const meal19Quantity = parseInt(document.getElementById('meal19').value);
    const meal20Quantity = parseInt(document.getElementById('meal20').value);
    const meal21Quantity = parseInt(document.getElementById('meal21').value);
    const meal22Quantity = parseInt(document.getElementById('meal22').value);
    const meal23Quantity = parseInt(document.getElementById('meal23').value);
    const meal24Quantity = parseInt(document.getElementById('meal24').value);
    const meal25Quantity = parseInt(document.getElementById('meal25').value);
    const meal26Quantity = parseInt(document.getElementById('meal26').value);
    const meal27Quantity = parseInt(document.getElementById('meal27').value);
    const meal28Quantity = parseInt(document.getElementById('meal28').value);
    const meal29Quantity = parseInt(document.getElementById('meal29').value);
    const meal30Quantity = parseInt(document.getElementById('meal30').value);
    const meal31Quantity = parseInt(document.getElementById('meal31').value);
    const meal32Quantity = parseInt(document.getElementById('meal32').value);
    const meal33Quantity = parseInt(document.getElementById('meal33').value);
    const meal34Quantity = parseInt(document.getElementById('meal34').value);
    const meal35Quantity = parseInt(document.getElementById('meal35').value);
    const meal36Quantity = parseInt(document.getElementById('meal36').value);
    
    
  
    // Define the prices for each meal
    const meal1Price = 4.30;
    const meal2Price = 4.70;
    const meal3Price = 5.30;
    const meal4Price = 4.50;
    const meal5Price = 4.00;
    const meal6Price = 5.20;
    const meal7Price = 3.60;
    const meal8Price = 4.30;
    const meal9Price = 5.60;
    const meal10Price = 5.80;
    const meal11Price = 6.30;
    const meal12Price = 5.50;
    const meal13Price = 5.20;
    const meal14Price = 3.80;
    const meal15Price = 6.20;
    const meal16Price = 7.20;
    const meal17Price = 6.00;
    const meal18Price = 4.75;
    const meal19Price = 3.50;
    const meal20Price = 4.00;
    const meal21Price = 5.25;
    const meal22Price = 4.00;
    const meal23Price = 5.25;
    const meal24Price = 4.00;
    const meal25Price = 5.55;
    const meal26Price = 6.25;
    const meal27Price = 3.65;
    const meal28Price = 4.00;
    const meal29Price = 4.50;
    const meal30Price = 5.00;
    const meal31Price = 4.00;
    const meal32Price = 5.00;
    const meal33Price = 4.50;
    const meal34Price = 5.25;
    const meal35Price = 4.75;
    const meal36Price = 4.00;
    
    
    
    
  
    // Calculate the total amount
    let totalAmount = 0;
  
    // Calculate total based on selected time and meal quantities
    if (selectedTime === 'brunch') {
      totalAmount = meal1Quantity * meal1Price + meal2Quantity * meal2Price + meal3Quantity * meal3Price + meal4Quantity * meal4Price + meal5Quantity * meal5Price + meal6Quantity * meal6Price + meal7Quantity * meal7Price;
    } else if (selectedTime === 'lunch') {
      totalAmount = meal8Quantity * meal8Price + meal9Quantity * meal9Price + meal10Quantity * meal10Price + meal11Quantity * meal11Price + meal12Quantity * meal12Price + meal13Quantity * meal13Price + meal14Quantity * meal14Price + meal15Quantity * meal15Price ;
    } else if (selectedTime === 'dinner') {
      totalAmount = meal16Quantity * meal16Price + meal17Quantity * meal17Price  + meal18Quantity * meal18Price + meal19Quantity * meal19Price + meal20Quantity * meal20Price + meal21Quantity * meal21Price + meal22Quantity * meal22Price + meal23Quantity * meal23Price;
    } else if (selectedTime === 'wines&Cocktails') {
    totalAmount = meal24Quantity * meal24Price + meal25Quantity * meal25Price  + meal26Quantity * meal26Price + meal27Quantity * meal27Price + meal28Quantity * meal28Price + meal29Quantity * meal29Price + meal30Quantity * meal30Price ;
  }
    else if (selectedTime === 'desserts'){
      totalAmount = meal31Quantity * meal31Price + meal32Quantity * meal32Price  + meal33Quantity * meal33Price + meal34Quantity * meal34Price + meal35Quantity * meal35Price + meal36Quantity * meal36Price ;
    }
  
    // Display the total amount
    document.getElementById('total').innerHTML = 'Total Amount: $' + totalAmount.toFixed(2);
  
    // Redirect to the payment website
    if (totalAmount > 0) {
      window.location.href = 'https://paypal.com'; // Replace with the actual payment website URL
    } else {
      alert('No items selected. Please choose at least one item.');
    }
  }



  // JavaScript code to show and hide meal sections based on the selected category
const mealCategories = document.querySelectorAll('.menuSpan .foodTime');
const mealSections = document.querySelectorAll('.mealOfTheDay .meals');

// Set default color to the first category
mealCategories[0].classList.add('default-color');

mealCategories.forEach((category, index) => {
  category.addEventListener('click', () => {
    // Hide all meal sections
    mealSections.forEach(section => {
      section.classList.add('hide');
    });

    // Remove 'selected' class from all categories
    mealCategories.forEach(category => {
      category.classList.remove('default-color');
    });

    // Show the selected meal section
    mealSections[index].classList.remove('hide');

    // Add 'default-color' class to the clicked category
    category.classList.add('default-color');
  });

  category.addEventListener('touchend', () => {
    // Hide all meal sections
    mealSections.forEach(section => {
      section.classList.add('hide');
    });

    // Remove 'selected' class from all categories
    mealCategories.forEach(category => {
      category.classList.remove('default-color');
    });

    // Show the selected meal section
    mealSections[index].classList.remove('hide');

    // Add 'default-color' class to the clicked category
    category.classList.add('default-color');
  });
});

  

 
   
  

  
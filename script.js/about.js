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



document.querySelector('.orderNow').addEventListener('click', popCart)
document.getElementById('closeCart').addEventListener('click', closeCart)



function popCart() {
  document.getElementById('cartContainer').style.display = 'block';
};
  
  function closeCart() {
    document.getElementById('cartContainer').style.display = 'none';
  };






const selectedTime = document.getElementById('time').value;

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
  cartContent.style.background = '';
}
}

  function calculateTotal() {
    // Retrieve the selected time of the day
    const selectedTime = document.getElementById("time").value;

    // Define the prices for each meal
    const mealPrices = {
      meal1: 4.3,
      meal2: 4.7,
      meal3: 5.3,
      meal4: 4.5,
      meal5: 4.0,
      meal6: 5.2,
      meal7: 3.6,
      meal8: 4.3,
      meal9: 5.6,
      meal10: 5.8,
      meal11: 6.3,
      meal12: 5.5,
      meal13: 5.2,
      meal14: 3.8,
      meal15: 6.2,
      meal16: 7.2,
      meal17: 6.0,
      meal18: 4.75,
      meal19: 3.5,
      meal20: 4.0,
      meal21: 5.25,
      meal22: 4.0,
      meal23: 5.25,
      meal24: 4.0,
      meal25: 5.55,
      meal26: 6.25,
      meal27: 3.65,
      meal28: 4.0,
      meal29: 4.5,
      meal30: 5.0,
      meal31: 4.0,
      meal32: 5.0,
      meal33: 4.5,
      meal34: 5.25,
      meal35: 4.75,
      meal36: 4.0,
    };

    // Retrieve the quantity for each meal
    let totalAmount = 0;
    for (let i = 1; i <= 36; i++) {
      const quantity = parseInt(document.getElementById(`meal${i}`).value);
      totalAmount += quantity * mealPrices[`meal${i}`];
    }

    // Display the total amount
    document.getElementById("total").innerHTML =
      "Total Amount: $ " + totalAmount.toFixed(2);
  }

  function redirect() {
    const totalAmount = parseFloat(
      document.getElementById("total").innerText.replace("Total Amount: $ ", "")
    );
    if (totalAmount > 0) {
      window.location.href = "https://paypal.com"; // Replace with the actual payment website URL
    } else {
      alert("No items selected. Please choose at least one item.");
    }
  }

  
  
    

  

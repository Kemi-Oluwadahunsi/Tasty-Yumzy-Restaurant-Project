const toggleButton = document.querySelector(".toggle_btn");
const icon = toggleButton.querySelector("i");

toggleButton.addEventListener("click", Show);

function Show() {
  // document.querySelector('.mobileContainer').style.display = 'block'
  document.querySelector(".mobileContainer").classList.toggle("show-menu");

  // Toggle between the bars and X icon
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
}

document.querySelector(".orderNow").addEventListener("click", popCart);
document.getElementById("closeCart").addEventListener("click", closeCart);

function popCart() {
  document.getElementById("cartContainer").style.display = "block";
}

function closeCart() {
  document.getElementById("cartContainer").style.display = "none";
}

const selectedTime = document.getElementById("time").value;

function showMeals() {
  // Hide all meal sections
  const mealSections = document.querySelectorAll("#menu ul");
  mealSections.forEach((section) => {
    section.style.display = "none";
  });

  // Show selected meal section
  const selectedTime = document.getElementById("time").value;
  const selectedSection = document.getElementById(selectedTime + "-meals");
  if (selectedSection) {
    selectedSection.style.display = "block";
  }
  // Change background color
  const cartContent = document.getElementById("cartContent");
  if (selectedTime === "choose") {
    cartContent.style.background = ""; // Revert to default background color
  } else {
    cartContent.style.background = "";
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

// Function to display selected meals
function displaySelectedMeals() {
  const selectedItemsDiv = document.getElementById("selectedItems");
  selectedItemsDiv.innerHTML = ""; // Clear previous content

  // Loop through all meal options to check if selected
  const mealOptions = document.querySelectorAll('input[type="number"]');
  mealOptions.forEach((option) => {
    if (option.value > 0) {
      const mealName =
        option.parentElement.querySelector(".mealName").textContent;
      const quantity = option.value;

      // Create elements for displaying selected meal and delete button
      const selectedMealItem = document.createElement("div");
      selectedMealItem.classList.add("selected-meal-item");
      selectedMealItem.innerHTML = `
        <span class="meal-quantity">${quantity}</span>
        <span class="meal-name">${mealName}</span>
        
      `;

      // Append selected meal item to selectedItemsDiv
      selectedItemsDiv.appendChild(selectedMealItem);
    }
  });

  // Update total amount after displaying selected meals
  calculateTotal();
}

// Update the display of selected meals whenever a meal is selected or deselected
function updateSelectedMealsDisplay() {
  displaySelectedMeals();
}

// Attach event listener to meal options to update selected meals display when quantity changes
const mealOptions = document.querySelectorAll('input[type="number"]');
mealOptions.forEach((option) => {
  option.addEventListener("change", updateSelectedMealsDisplay);
});


// Function to show the cash on delivery form and update the amount to pay
function showCashOnDeliveryForm() {
  const totalAmount = parseFloat(document.getElementById("total").innerText.replace("Total Amount: $ ", ""));
  document.getElementById("amountToPay").textContent = "$" + totalAmount.toFixed(2);
  document.getElementById("cashOnDeliveryForm").style.display = "block";
}
let makeOrderButtonClicked = false;

function showPaymentOptions() {
  document.getElementById("paymentOptions").style.display = "block";
  if (!makeOrderButtonClicked) {
    handleMakeOrderButtonClick();
    makeOrderButtonClicked = true;
  }
}

function closePaymentOptions() {
  document.getElementById("paymentOptions").style.display = "none";
}
// Function to handle the click event of the make order button
document.querySelector(".orderButton").addEventListener("click", function() {
  const paymentOptions = document.getElementById("paymentOptions");
  if (paymentOptions.style.display === "block") {
    closePaymentOptions();
     // Close payment options if already open
  } else {
    showPaymentOptions(); // Otherwise, show payment options
  }
});



// Function to handle the click event of the make order button


// Function to show the cash on delivery form and update the amount to pay
function showCashOnDeliveryForm() {
  const totalAmount = parseFloat(document.getElementById("total").innerText.replace("Total Amount: $ ", ""));
  document.getElementById("amountToPay").textContent = "$" + totalAmount.toFixed(2);
  document.getElementById("cashOnDeliveryForm").style.display = "block";
}

// Function to handle cash on delivery form submission
document.getElementById("cashOnDeliveryDetailsForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  // Retrieve form data
  const formData = new FormData(event.target);
  const address = formData.get("address");
  const phone = formData.get("phone");
  const name = formData.get("name");
  // For demonstration purposes, just alert the collected details
  alert(`Order Confirmed!\nThanks for your patronage!\n\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\n\nYour order is being prepared. Our rider will reach you as soon as possible!`);
  // Clear form inputs
  event.target.reset();
  closeCashOnDeliveryForm(); // Close the form after submission
});

function closeCashOnDeliveryForm() {
  document.getElementById("cashOnDeliveryForm").style.display = "none";
}


// Function to initialize PayPal button
function initializePayPalButton(totalAmount) {
  
  paypal.Buttons({
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: totalAmount.toFixed(2) // Total amount to be paid
          }
        }]
      });
    },
    onApprove: function(data, actions) {
     
      return actions.order.capture().then(function(details) {
        // Handle successful payment
        const buyerInfo = {
          name: details.payer.name.given_name,
          email: details.payer.email_address,
          address: details.purchase_units[0].shipping.address.address_line_1,
          totalAmount: totalAmount.toFixed(2),
        };
        console.log(details.purchase_units[0].shipping);

        // Display buyer information in an alert
        alert(
          `Payment status: Successful!\n\nOrder Confirmed!\nThanks for your patronage!\n\nBuyer Information:\nName: ${buyerInfo.name}\nEmail: ${buyerInfo.email}\nAddress: ${buyerInfo.address}\nTotal Amount: $${buyerInfo.totalAmount}\n\nYour order is being prepared. Our rider will reach you as soon as possible!`
        );
      });
    }
  }).render('#paypal-button-container'); // Render PayPal button in specified container
}

// Function to handle the click event of the make order button
function handleMakeOrderButtonClick() {
  // Calculate the total amount
  calculateTotal();
  
  // Retrieve the total amount after calculation
  const totalAmount = parseFloat(document.getElementById("total").innerText.replace("Total Amount: $ ", ""));
  
  // Check if totalAmount is a valid number
  if (!isNaN(totalAmount) && totalAmount > 0) {
    // Initialize PayPal button with total amount
    initializePayPalButton(totalAmount);

    // Toggle visibility of payment options

  } else {
    alert("Invalid total amount. Please select at least one item before making the order.");
  }
}


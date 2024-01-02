// const getSumBtn = document.createElement("button");
// getSumBtn.append("Get Total Price");
// document.body.appendChild(getSumBtn);

// const getSum = () => {
// //Add your code here
  
// };

// getSumBtn.addEventListener("click", getSum);

// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Function to calculate and display the total price
    function calculateTotal() {
        // Get all elements with class="prices"
        const pricesElements = document.querySelectorAll('.prices');

        // Calculate the total price
        let totalPrice = 0;
        pricesElements.forEach(priceElement => {
            const price = parseFloat(priceElement.textContent);
            if (!isNaN(price)) {
                totalPrice += price;
            }
        });

        // Create a new row for total price
        const totalRow = document.createElement('tr');
        const totalCell = document.createElement('td');
        totalCell.colSpan = 2; // Span both columns
        totalCell.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
        totalRow.appendChild(totalCell);

        // Append the total row to the table
        const table = document.getElementById('groceryTable');
        table.appendChild(totalRow);
    }

    // Initial call to calculate total when the page loads
    calculateTotal();
});

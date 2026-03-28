// Function that runs when the button is clicked
function calculateTotal() {

    // Get value from "price" input field
    // .value returns it as a string
    let price = document.getElementById("price").value;

    // Get value from "liters" input field
    let liters = document.getElementById("liters").value;

    // Convert both values from string to number
    // parseFloat allows decimal numbers
    price = parseFloat(price);
    liters = parseFloat(liters);

    // Multiply price by liters to get total cost
    let total = price * liters;

    // Update the paragraph text with the result
    // toFixed(2) keeps 2 decimal places (like money)
    document.getElementById("result").textContent =
        "Total Cost: AED " + total.toFixed(2);
}
document.addEventListener("DOMContentLoaded", () => {
    // Retrieve the form data from localStorage
    const formData = JSON.parse(localStorage.getItem("formData"));

    // Display the form data in the placeholders
    document.getElementById("output-first-name").textContent = formData.firstName || "N/A";
    document.getElementById("output-last-name").textContent = formData.lastName || "N/A";
    document.getElementById("output-email").textContent = formData.email || "N/A";
    // Add more placeholders for other form fields if needed
});
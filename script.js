function scanQR() {
    // Simulated function to handle QR code scanning
    // This function should extract information from the QR code and autofill the form
    // For demonstration purposes, we'll just show the complaint form
    document.getElementById("complaintForm").style.display = "block";
}

// Function to show department section
function showDepartment(department) {
    // Hide all department graphs
    document.querySelectorAll('.graph').forEach(function(graph) {
        graph.style.display = 'none';
    });

    // Show selected department graph
    document.getElementById(department + '-graph').style.display = 'block';

    // Initialize chart for the selected department
    initializeChart(department);
}

// Function to initialize chart for each department
function initializeChart(department) {
    let complaintsData;
    let chartTitle;

    // Customize data and title based on department
    switch (department) {
        case 'computer':
            complaintsData = {
                labels: ["Keyboard", "Mouse", "Monitor", "CPU"],
                datasets: [{
                    data: [20, 15, 10, 5],
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.7)",
                        "rgba(54, 162, 235, 0.7)",
                        "rgba(255, 206, 86, 0.7)",
                        "rgba(75, 192, 192, 0.7)"
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)"
                    ],
                    borderWidth: 1
                }]
            };
            chartTitle = "Complaints in Computer Engineering";
            break;
        case 'civil':
            complaintsData = {
                labels: ["Concrete", "Steel", "Bricks", "Sand"],
                datasets: [{
                    data: [10, 20, 5, 15],
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.7)",
                        "rgba(54, 162, 235, 0.7)",
                        "rgba(255, 206, 86, 0.7)",
                        "rgba(75, 192, 192, 0.7)"
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)"
                    ],
                    borderWidth: 1
                }]
            };
            chartTitle = "Complaints in Civil Engineering";
            break;
        case 'mechanical':
            complaintsData = {
                labels: ["Gears", "Bearings", "Pumps", "Motors"],
                datasets: [{
                    data: [8, 12, 15, 10],
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.7)",
                        "rgba(54, 162, 235, 0.7)",
                        "rgba(255, 206, 86, 0.7)",
                        "rgba(75, 192, 192, 0.7)"
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)"
                    ],
                    borderWidth: 1
                }]
            };
            chartTitle = "Complaints in Mechanical Engineering";
            break;
        case 'electrical':
            complaintsData = {
                labels: ["Cables", "Switches", "Transformers", "Generators"],
                datasets: [{
                    data: [15, 8, 10, 12],
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.7)",
                        "rgba(54, 162, 235, 0.7)",
                        "rgba(255, 206, 86, 0.7)",
                        "rgba(75, 192, 192, 0.7)"
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)"
                    ],
                    borderWidth: 1
                }]
            };
            chartTitle = "Complaints in Electrical Engineering";
            break;
        default:
            complaintsData = {};
            chartTitle = "Complaints by Item";
            break;
    }

    // Get canvas element
    const pieChartCanvas = document.getElementById("pie-chart-" + department).getContext("2d");

    // Create pie chart
    new Chart(pieChartCanvas, {
        type: "pie",
        data: complaintsData,
        options: {
            responsive: true,
            legend: {
                position: "bottom"
            },
            title: {
                display: true,
                text: chartTitle
            }
        }
    });
}

// Show Civil Engineering by default
showDepartment('civil');


// Monitor QR
// document.addEventListener('DOMContentLoaded', function() {
//     // Function to parse URL parameters
//     function getUrlParameter(name) {
//       name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
//       var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
//       var results = regex.exec(location.search);
//       return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
//     };
  
//     // Function to check if the user is logged in
//     function isLoggedIn() {
//       // Check if user is logged in (you need to implement your own logic here)
//       return false; // Change this to your login check logic
//     }
  
//     // Function to autofill form fields with data from QR code
//     function autofillForm(qrData) {
//       try {
//         var decodedData = JSON.parse(qrData);
//         // Autofill form fields
//         document.getElementById('qrData').value = qrData;
//         document.getElementById('name').value = decodedData.name || '';
//         document.getElementById('branch').value = decodedData.branch || '';
//         document.getElementById('prn').value = decodedData.prn || '';
//         document.getElementById('description').value = decodedData.description || '';
//       } catch (error) {
//         console.error('Error parsing JSON data:', error);
//       }
//     }
  
//     // Check if user is logged in
//     if (!isLoggedIn()) {
//       // If user is not logged in, redirect to login page
//       window.location.href = 'login.html'; // Change the URL to your login page
//     }
  
//     // Fill form fields with data from QR code if available
//     var qrData = getUrlParameter('qrdata');
//     if (qrData) {
//       autofillForm(qrData);
//     }
  
//     // Form submission validation
//     document.getElementById('qrForm').addEventListener('submit', function(event) {
//       if (!document.getElementById('name').value || !document.getElementById('branch').value || !document.getElementById('prn').value || !document.getElementById('description').value) {
//         // If any of the required fields are empty, prevent form submission
//         alert('Please fill in all fields.');
//         event.preventDefault();
//       }
//     });
//   });
  

// JavaScript
// document.addEventListener('DOMContentLoaded', function() {
//     // Function to parse URL parameters
//     function getUrlParameter(name) {
//       name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
//       var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
//       var results = regex.exec(location.search);
//       return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
//     };
  
//     // Fill form fields with data from QR code if available
//     var qrData = getUrlParameter('qrdata');
//     if (qrData) {
//       try {
//         var decodedData = JSON.parse(qrData);
//         // Autofill form fields
//         document.getElementById('qrData').value = qrData;
//         document.getElementById('name').value = decodedData.name || '';
//         document.getElementById('branch').value = decodedData.branch || '';
//         document.getElementById('prn').value = decodedData.prn || '';
//         document.getElementById('description').value = decodedData.description || '';
//       } catch (error) {
//         console.error('Error parsing JSON data:', error);
//       }
//     }
//   });
  

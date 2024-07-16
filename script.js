// Declare variables of different data types
var myString = "Hello, World!";
var myNumber = 42;
var myBoolean = true;

// Define functions to perform simple operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) {
        console.log("Error: Division by zero is not allowed.");
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

// Use console.log() to print output and debug code
console.log("String variable:", myString);
console.log("Number variable:", myNumber);
console.log("Boolean variable:", myBoolean);

console.log("Addition of 5 and 3:", add(5, 3));
console.log("Subtraction of 5 from 3:", subtract(5, 3));
console.log("Division of 10 by 2:", divide(10, 2));
console.log("Multiplication of 4 and 7:", multiply(4, 7));

// Test division by zero
console.log("Division of 10 by 0:", divide(10, 0));

// DOM Manipulation
document.getElementById('addButton').addEventListener('click', function() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = add(num1, num2);
    document.getElementById('result').textContent = "Result: " + result;
});

document.getElementById('subtractButton').addEventListener('click', function() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = subtract(num1, num2);
    document.getElementById('result').textContent = "Result: " + result;
});

document.getElementById('divideButton').addEventListener('click', function() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = divide(num1, num2);
    document.getElementById('result').textContent = "Result: " + result;
});

document.getElementById('multiplyButton').addEventListener('click', function() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = multiply(num1, num2);
    document.getElementById('result').textContent = "Result: " + result;
});

document.getElementById('toggleButton').addEventListener('click', function() {
    var toggleParagraph = document.getElementById('toggleParagraph');
    if (toggleParagraph.classList.contains('hidden')) {
        toggleParagraph.classList.remove('hidden');
    } else {
        toggleParagraph.classList.add('hidden');
    }
});

// Create a pie chart using Chart.js
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Segment A', 'Segment B', 'Segment C', 'Segment D'],
        datasets: [{
            label: '# of Votes',
            data: [25, 35, 20, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        var label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.raw !== null) {
                            label += context.raw + '%';
                        }
                        return label;
                    }
                }
            }
        }
    }
});

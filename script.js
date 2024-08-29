document.addEventListener('DOMContentLoaded', function() {
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const tableContainer = document.getElementById('tableContainer');
    const tableBody = document.querySelector('#infoTable tbody');

    let buttons = [
        { element: btn1, name: 'Кнопка 1', color: 'Зелёный' },
        { element: btn2, name: 'Кнопка 2', color: 'Красный' },
    ];

    // Function to hide table if it's visible
    function hideTable() {
        tableContainer.style.display = 'none';
        tableBody.innerHTML = ''; // Clear table content
    }

    // Change buttons to green and update names
    btn1.addEventListener('click', function() {
        buttons.forEach(button => {
            if (button.element !== btn3) { // Skip Button 3
                button.element.querySelector('a').style.backgroundColor = 'green';
                button.element.querySelector('a').textContent = button.name + ' (З)';
                button.color = 'Зелёный';
            }
        });
        hideTable(); // Hide table if shown
    });

    // Change buttons to red and update names
    btn2.addEventListener('click', function() {
        buttons.forEach(button => {
            if (button.element !== btn3) { // Skip Button 3
                button.element.querySelector('a').style.backgroundColor = 'red';
                button.element.querySelector('a').textContent = button.name + ' (К)';
                button.color = 'Красный';
            }
        });
        hideTable(); // Hide table if shown
    });

    // Show/Hide table when Button 3 is clicked
    btn3.addEventListener('click', function() {
        if (tableContainer.style.display === 'block') {
            hideTable(); // Hide table if visible
        } else {
            // Add rows for Button 1 and Button 2 only
            buttons.forEach(button => {
                if (button.element !== btn3) { // Skip Button 3
                    const row = document.createElement('tr');
                    const nameCell = document.createElement('td');
                    const colorCell = document.createElement('td');
                    nameCell.textContent = button.element.querySelector('a').textContent;
                    colorCell.textContent = button.color;
                    row.appendChild(nameCell);
                    row.appendChild(colorCell);
                    tableBody.appendChild(row);
                }
            });
            tableContainer.style.display = 'block'; // Show table
        }
    });
});

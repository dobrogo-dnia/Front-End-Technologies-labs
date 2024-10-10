document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('numberTable');
    const colorPicker = document.getElementById('colorPicker');
    const targetNumber = 9;

    let number = 1;
    for (let i = 0; i < 6; i++) {
        const row = table.insertRow();
        for (let j = 0; j < 6; j++) {
            const cell = row.insertCell();
            cell.textContent = number;
            cell.dataset.number = number;

            if (number === targetNumber) {
                cell.addEventListener('mouseover', function() {
                    cell.style.backgroundColor = getRandomColor();
                });

                cell.addEventListener('click', function() {
                    cell.style.backgroundColor = colorPicker.value;
                });

                cell.addEventListener('dblclick', function() {
                    const columnIndex = cell.cellIndex; 
                    changeColumnColor(table, columnIndex, cell.parentElement.rowIndex, colorPicker.value);
                });
            }

            number++;
        }
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function changeColumnColor(table, columnIndex, startRowIndex, color) {
        for (let i = startRowIndex; i < table.rows.length; i += 2) {
            table.rows[i].cells[columnIndex].style.backgroundColor = color;
        }
    }
});
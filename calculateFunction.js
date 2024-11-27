

function calculateA(x, y, z, b) {
    return (Math.sqrt(Math.abs(x * x - z)) ** 0.3 - Math.sqrt(Math.abs(1 + 2 * b))) / 
        (1 + (Math.pow(x, 1) / factorial(1)) + (Math.pow(y, 2) / factorial(2)) + (Math.pow(z, 3) / factorial(3)));
}

function calculateB(x, y, z) {
    return x * ((y + Math.atan(Math.abs(Math.pow(x, 2) + z)) ** 0.1) / (3 + Math.sin(Math.pow(y, 3)) ** 2)) + Math.exp(-(x + z) / y);
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const xMin = parseFloat(document.getElementById('x_min').value);
    const xMax = parseFloat(document.getElementById('x_max').value);
    const dx = parseFloat(document.getElementById('dx').value);
    const yMin = parseFloat(document.getElementById('y_min').value);
    const yMax = parseFloat(document.getElementById('y_max').value);
    const dy = parseFloat(document.getElementById('dy').value);
    const z = parseFloat(document.getElementById('z').value);

    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    for (let x = xMin; x <= xMax; x += dx) {
        for (let y = yMin; y <= yMax; y += dy) {
            const b = calculateB(x, y, z);
            const a = calculateA(x, y, z, b);

            const row = document.createElement('tr');
            row.innerHTML = `<td>${x.toFixed(2)}</td><td>${y.toFixed(2)}</td><td>${a.toFixed(4)}</td><td>${b.toFixed(4)}</td>`;
            tableBody.appendChild(row);
        }
    }
});

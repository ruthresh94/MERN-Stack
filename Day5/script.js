function converttoFahrenheit() {
    var a = document.getElementById('fahrenheit').value;
    var f = (a * 9/5) + 32;
    document.getElementById('resultFahrenheit').innerHTML = `Result: ${f} °F`;
}

function converttoCelsius() {
    var b = document.getElementById('celsius').value;
    var c = (b - 32) * (5/9);
    document.getElementById('resultCelsius').innerHTML = `Result: ${c} °C`;
}

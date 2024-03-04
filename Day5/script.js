function converttoFahrenheit() {
    var a = document.getElementById('celsius').value;
    var f = (9 / 5) * parseFloat(a) + 32;
    document.getElementById('resultFahrenheit').innerHTML = `Result: ${f} °F`;
  }

  function converttoCelsius() {
    var b = document.getElementById('fahrenheit').value;
    var c = (parseFloat(b) - 32) * (5 / 9);
    document.getElementById('resultCelsius').innerHTML = `Result: ${c} °C`;
  }
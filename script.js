function convert() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
    var result = document.getElementById("result");
    
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = parseFloat(fahrenheitInput.value);
    
    if (!isNaN(celsius)) {
      var convertedTemp = (celsius * 9/5) + 32;
      result.innerHTML = celsius + "°C is equal to " + convertedTemp + "°F";
    } else if (!isNaN(fahrenheit)) {
      var convertedTemp = (fahrenheit - 32) * 5/9;
      result.innerHTML = fahrenheit + "°F is equal to " + convertedTemp + "°C";
    } else {
      result.innerHTML = "Please enter a valid temperature.";
    }
  }
  
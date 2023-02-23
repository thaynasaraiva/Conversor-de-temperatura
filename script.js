const celsiusInput = document.getElementById("celsius");

const fahrenheitInput = document.getElementById("fahrenheit");

const converterButton = document.getElementById("btnConverter");

converterButton.addEventListener("click", () => {

  const celsius = parseFloat(celsiusInput.value);

  const fahrenheit = (celsius * 1.8) + 32;

  fahrenheitInput.value = fahrenheit.toFixed(2);

});

let input = document.getElementById("inputFahrenheit");
input.addEventListener("change", function () {
    temperatureConverter(input.value)
});
input.addEventListener("input", function () {
    temperatureConverter(input.value)
});

function temperatureConverter(number) {
    let temp = parseFloat(number);
    document.getElementById("outputCelsius").innerHTML = ((temp - 32) / 1.8).toString();
    return 1;
}
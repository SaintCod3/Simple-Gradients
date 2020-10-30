var firstColor = document.getElementById("color-1-value");
var secondColor = document.getElementById("color-2-value");
var direction = document.getElementById("direction");
var cssTextArea = document.getElementById("cssCode");

// Create the CSS output 
cssTextArea.value = `/* Gradient created using Simple Gradients */
background-image: linear-gradient(
  to ${getComputedStyle(document.getElementById("gradient")).getPropertyValue(
    "--direction"
  )},
  ${getComputedStyle(document.getElementById("gradient")).getPropertyValue(
    "--first-color"
  )},${getComputedStyle(document.getElementById("gradient")).getPropertyValue(
  "--second-color"
)}
);`;

direction.addEventListener("change", changeDirection);
document.getElementById("color-1").addEventListener("change", changeColor);
document.getElementById("color-2").addEventListener("change", changeColor);

function changeColor() {
  firstColor.value = document.getElementById("color-1").value;
  document
    .getElementById("gradient")
    .style.setProperty(
      "--first-color",
      document.getElementById("color-1").value
    );
  secondColor.value = document.getElementById("color-2").value;
  document.getElementById("gradient").style.setProperty(
      "--second-color",
      document.getElementById("color-2").value
    );
  cssTextArea.value = `/* Gradient created using Simple Gradients */
  background-image: linear-gradient(
  to ${getComputedStyle(document.getElementById("gradient")).getPropertyValue(
    "--direction"
  )},
  ${getComputedStyle(document.getElementById("gradient")).getPropertyValue(
    "--first-color"
  )}, ${getComputedStyle(document.getElementById("gradient")).getPropertyValue(
    "--second-color"
  )}
);`;
}

function changeDirection() {
  document
    .getElementById("gradient")
    .style.setProperty("--direction", direction.value);
  cssTextArea.value = `/* Gradient created using Simple Gradients */
    background-image: linear-gradient(
    to ${getComputedStyle(document.getElementById("gradient")).getPropertyValue(
      "--direction"
    )},
    ${getComputedStyle(document.getElementById("gradient")).getPropertyValue(
      "--first-color"
    )},${getComputedStyle(document.getElementById("gradient")).getPropertyValue(
    "--second-color"
  )}
  );`;
}

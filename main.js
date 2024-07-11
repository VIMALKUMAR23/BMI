function cal() {
  //  alert(weight.value)
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  if (weight !== "" && height !== "") {
    let w = Number(weight);
    let h = Number(height);
    let meter = h / 100;
    let i = w / (meter * meter);
    let bmi = i.toFixed(2);
    document.getElementById("BMI").innerHTML = bmi;

    let BMItype = document.getElementById("typeValue");
    BMItype.innerHTML = "";

    let type = "";
    if (bmi < 18.4) {
      type = "UNDER-WEIGHT 😔";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      type = "NORMAL 🥳";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      type = "OVER-WEIGHT 🥲";
    } else {
      type = "OBESE 😨";
    }
    BMItype.innerHTML = type;
  } else {
    document.getElementById("invalid").innerHTML =
      "Enter proper value  to check your BMI";
  }
}

function clearBMI() {
  // hard and proper way
  //   document.getElementById("weight").value = "";
  //   document.getElementById("height").value = "";
  //   document.getElementById("BMI").innerHTML = "";
  //   document.getElementById("typeValue").innerHTML = "";
  //   document.getElementById("invalid").innerHTML = "";
  //   this will check only one input
  //   document.getElementById("flexRadioDefault2").checked = false;
  // use for loop to check each and every element in the input radio type box
  // Clear radio buttons
  //   let radioButtons = document.getElementsByName("flexRadioDefault");
  //   for (let i = 0; i < radioButtons.length; i++) {
  //     radioButtons[i].checked = false;
  //   }
  // esay way
  window.location.reload();
}

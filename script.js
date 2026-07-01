const form = document.getElementById("bmiForm");
const resultCard = document.getElementById("resultCard");

const submissions = [];

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const sex = document.getElementById("sex");
    const weight = document.getElementById("weight");
    const height = document.getElementById("height");

    // for loop
    const fields = [name, age, sex, weight, height];

    for (let field of fields) {
        if (field.value.trim() === "") {
            alert("Please complete all required fields.");
            field.focus();
            return;
        }
    }

    if (!/^[A-Za-z\s]+$/.test(name.value.trim())) {
        alert("Full Name should contain letters and spaces only.");
        name.focus();
        return;
    }

    const weightValue = parseFloat(weight.value);
    const heightValue = parseFloat(height.value);

    // if-else validation
    if (weightValue <= 0 || heightValue <= 0) {
        alert("Weight and height must be positive numbers.");
        return;
    }
    else if (age.value < 1 || age.value > 120) {
        alert("Please enter a valid age.");
        return;
    }

    const heightMeters = heightValue / 100;

    const bmi = +(weightValue / (heightMeters * heightMeters)).toFixed(1);

    let category;
    let message;
    let color;

    // switch-case
    switch (true) {

        case bmi < 18.5:
            category = "Underweight";
            color = "#4FC3F7";
            message = "Eat a balanced diet and consult a healthcare professional if needed.";
            break;

        case bmi < 25:
            category = "Normal";
            color = "#66BB6A";
            message = "Excellent! Continue maintaining a healthy lifestyle.";
            break;

        case bmi < 30:
            category = "Overweight";
            color = "#FFA726";
            message = "Exercise regularly and maintain a healthy diet.";
            break;

        default:
            category = "Obese";
            color = "#EF5350";
            message = "Consult your healthcare provider for proper guidance.";
    }

    submissions.push({
        name: name.value,
        bmi: bmi,
        category: category
    });

    recordSubmission({
        name: name.value,
        age: age.value,
        sex: sex.value,
        weight: weightValue,
        heightCm: heightValue,
        bmi: bmi,
        category: category
    });

    showResult(
        name.value,
        age.value,
        sex.value,
        bmi,
        category,
        message,
        color
    );
});

form.addEventListener("reset", function () {
    resultCard.classList.add("hidden");
    resultCard.innerHTML = "";
    resultCard.style.borderLeft = "none";

});

function showResult(name, age, sex, bmi, category, message, color) {

    resultCard.classList.remove("hidden");
    resultCard.style.borderLeft = `10px solid ${color}`;

    resultCard.innerHTML = `<h2>${name}</h2>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Sex:</strong> ${sex}</p>

        <h3>Your BMI: ${bmi}</h3>

        <div class="badge" style="background:${color}">
            ${category}
        </div>

        <p>${message}</p>
    `;
}

function recordSubmission(record) {

    fetch("https://script.google.com/macros/s/AKfycbwQaQZ0r7TCAz6zA00TToHnu3iozgCDjMD7kHLnLAaY2bFRNofRkUIoGqP1rgtOSyR9/exec", {

        method: "POST",

        body: JSON.stringify(record)

    })
        .then(response => response.json())
        .then(data => console.log("Recorded:", data))
        .catch(error => console.error(error));

}
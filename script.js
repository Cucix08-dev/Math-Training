const num1 = document.getElementById('num1');
const operation = document.getElementById('operation');
const num2 = document.getElementById('num2');
const userInput = document.getElementById('user-input-result');
const refreshButton = document.getElementById('refresh-button');
const confirmButton = document.getElementById('confirm-button');

const sign = ["+", "-", "*", "/"];

const compliments = [
    "You're doing an amazing job!",
    "Your work is genuinely impressive.",
    "You have great talent and it really shows.",
    "You make everything look easy — well done.",
    "You're improving so fast, keep it up!"
];

const encouragements = [
    "Keep going, you're stronger than you think.",
    "Don't give up, you're getting closer every day.",
    "You absolutely have what it takes to succeed.",
    "Believe in yourself — you're on the right path.",
    "Stay focused, you're making real progress."
];


function generateExpression() {
    let a = Math.floor(Math.random() * 100) + 1;
    let b = Math.floor(Math.random() * 100) + 1;

    const big = Math.max(a, b);
    const small = Math.min(a, b);

    operation.textContent = sign[Math.floor(Math.random() * 4)];

    num1.textContent = big;
    num2.textContent = small;

    switch (operation.textContent) {
        case "+":
            return big + small;

        case "-":
            return big - small;

        case "*":
            return big * small;

        case "/":
            const divisor = Math.floor(Math.random() * 10) + 1; // 1–10
            const base = Math.floor(Math.random() * 10) + 1;    // 1–10

            const newSmall = divisor;
            const newBig = divisor * base;

            num1.textContent = newBig;
            num2.textContent = newSmall;

            return newBig / newSmall;

        default:
            return -1;
    }
}



let result = generateExpression();

const correctOrIncorrect = document.getElementById("correct-or-incorrect");

const backgroundcolorIncorrect = "#391e1eba";
const colorIncorrect = "#ff9595";

const backgroundcolorCorrect = "#45ff6a50";
const colorCorrect = "#1cff27";


confirmButton.addEventListener("click", () => {
    correctOrIncorrect.classList.add("show");

    const expression = `${num1.textContent} ${operation.textContent} ${num2.textContent} = ${result}`;

    let remainder = null;
    if (operation.textContent === "/") {
        remainder = parseInt(num1.textContent) % parseInt(num2.textContent);
    }

    if (parseInt(userInput.value) === result) {
        correctOrIncorrect.style.backgroundColor = backgroundcolorCorrect;
        correctOrIncorrect.style.color = colorCorrect;
        correctOrIncorrect.innerHTML = `
            <h2>CORRECT!</h2>
            <br>
            <p>${expression}</p>
            <br>
            <p>${compliments[Math.floor(Math.random() * compliments.length)]}</p>
        `;
    }
    else {
        correctOrIncorrect.style.backgroundColor = backgroundcolorIncorrect;
        correctOrIncorrect.style.color = colorIncorrect;

        const remainderText = operation.textContent === "/" 
            ? `<p>The result is ${result}, with the remainder of ${remainder}</p><br>`
            : `<p>The result is ${result}</p><br>`;

        correctOrIncorrect.innerHTML = `
            <h2>INCORRECT</h2><br>
            <p>${expression}</p><br>
            ${remainderText}
            <p>${encouragements[Math.floor(Math.random() * encouragements.length)]}</p><br>
        `;
    }

    setTimeout(() => {
        correctOrIncorrect.classList.remove("show");
        result = generateExpression();
        correctOrIncorrect.innerHTML = ""
    }, 2000);
});


refreshButton.addEventListener("click", () => {
    result = generateExpression();
});


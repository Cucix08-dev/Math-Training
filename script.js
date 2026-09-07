const num1 = document.getElementById('num1');
const operation = document.getElementById('operation');
const num2 = document.getElementById('num2');
const userInput = document.getElementById('user-input-result');
const refreshButton = document.getElementById('refresh-button');
const confirmButton = document.getElementById('confirm-button');

const translationButton = document.getElementById("translation-button");

let it = false

translationButton.addEventListener("click", () => {
    it = !it;
    translationButton.classList.toggle("active");
    updateLanguage();
});

const sign = ["+", "-", "*", "/", "^"];

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

let complimentsCurrent = compliments;
let encouragementsCurrent = encouragements;


const complimentsIT = [
    "Stai facendo un lavoro fantastico!",
    "Il tuo lavoro è davvero impressionante.",
    "Hai un grande talento e si vede.",
    "Rendi tutto facile — ben fatto.",
    "Stai migliorando velocemente, continua così!"
];

const encouragementsIT = [
    "Continua così, sei più forte di quanto pensi.",
    "Non mollare, ogni giorno sei più vicino.",
    "Hai tutto ciò che serve per riuscire.",
    "Credi in te stesso — sei sulla strada giusta.",
    "Rimani concentrato, stai facendo veri progressi."
];


const oneToTen = document.getElementById("1-10")
const oneToOneHundred = document.getElementById("1-100")
const oneToOneThousand = document.getElementById("1-1000")

let n = 100;

let selectedZero = "1-100"

oneToTen.addEventListener("click", () => {
    n = 10;
    document.getElementById(`${selectedZero}`).classList.remove("selected");
    selectedZero = "1-10"
    oneToTen.classList.add("selected");
});

oneToOneHundred.addEventListener("click", () => {
    n = 100;
    document.getElementById(`${selectedZero}`).classList.remove("selected");
    selectedZero = "1-100"
    oneToOneHundred.classList.add("selected");
});

oneToOneThousand.addEventListener("click", () => {
    n = 1000;
    document.getElementById(`${selectedZero}`).classList.remove("selected");
    selectedZero = "1-1000"
    oneToOneThousand.classList.add("selected");
});

const normalTrainingButton = document.getElementById("normal-training");
const grade1Button = document.getElementById("grade-1");
const grade2Button = document.getElementById("grade-2");
const grade3Button = document.getElementById("grade-3");
const grade4Button = document.getElementById("grade-4");
const middleSchoolButton = document.getElementById("middle-school");
const title = document.getElementById("mode");

let o = 4;

let selectedOneMode = "normal-training"

normalTrainingButton.addEventListener("click", () => {
    o = 4;
    title.textContent = "Normal Training";
    document.getElementById(`${selectedOneMode}`).classList.remove("selected")
    selectedOneMode = "normal-training"
    normalTrainingButton.classList.add("selected");
});

grade1Button.addEventListener("click", () => {
    o = 1;
    title.textContent = "Level 1";
    document.getElementById(`${selectedOneMode}`).classList.remove("selected")
    selectedOneMode = "grade-1"
    grade1Button.classList.add("selected");
});

grade2Button.addEventListener("click", () => {
    o = 2;
    title.textContent = "Level 2";
    document.getElementById(`${selectedOneMode}`).classList.remove("selected")
    selectedOneMode = "grade-2"
    grade2Button.classList.add("selected");
});

grade3Button.addEventListener("click", () => {
    o = 3;
    title.textContent = "Level 3";
    document.getElementById(`${selectedOneMode}`).classList.remove("selected")
    selectedOneMode = "grade-3"
    grade3Button.classList.add("selected");
});

grade4Button.addEventListener("click", () => {
    o = 4;
    title.textContent = "Level 4";
    document.getElementById(`${selectedOneMode}`).classList.remove("selected")
    selectedOneMode = "grade-4"
    grade4Button.classList.add("selected");
});

middleSchoolButton.addEventListener("click", () => {
    o = 5;
    title.textContent = "Level MAX";
    document.getElementById(`${selectedOneMode}`).classList.remove("selected")
    selectedOneMode = "middle-school"
    middleSchoolButton.classList.add("selected");
});

function generateExpression() {
    let a = Math.floor(Math.random() * n) + 1;
    let b = Math.floor(Math.random() * n) + 1;

    const big = Math.max(a, b);
    const small = Math.min(a, b);

    operation.textContent = sign[Math.floor(Math.random() * o)];

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
            const divisor = Math.floor(Math.random() * (n / 10)) + 1;
            const base = Math.floor(Math.random() * 10) + 1;

            const newSmall = divisor;
            const newBig = divisor * base;

            num1.textContent = newBig;
            num2.textContent = newSmall;

            return newBig / newSmall;

        case "^":
            const newBigPot = Math.floor(Math.random() * 20 + 1);
            const newSmallPot = Math.floor(Math.random() * 5 + 1);

            num1.textContent = newBigPot;
            num2.textContent = newSmallPot;

            return Math.pow(newBig,newSmall);

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
            <p>${complimentsCurrent[Math.floor(Math.random() * complimentsCurrent.length)]}</p>
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
            <p>${encouragementsCurrent[Math.floor(Math.random() * encouragementsCurrent.length)]}</p><br>
        `;
    }

    setTimeout(() => {
        correctOrIncorrect.classList.remove("show");
        result = generateExpression();
        correctOrIncorrect.innerHTML = ""
        userInput.value = ""
    }, 2000);
});


refreshButton.addEventListener("click", () => {
    result = generateExpression();
});




const menuButton = document.getElementById("menu-button");
const menuAside = document.getElementById("menu-aside");

const threeLines = document.getElementById("three-lines");
const leftArrow = document.getElementById("left-arrow");

let signActive = false;

menuButton.addEventListener("click", () => {
    signActive = !signActive;

    if (signActive) {
        menuAside.style.left = `0%`;
        threeLines.classList.add("hidden")
        leftArrow.classList.remove("hidden")
    }
    else {
        menuAside.style.left = `-200%`;
        leftArrow.classList.add("hidden")
        threeLines.classList.remove("hidden")
    }
});

function updateLanguage() {
    const elements = document.querySelectorAll(".translation");

    if (it) {
        elements.forEach(el => {
            el.dataset.en = el.textContent;
            el.textContent = el.dataset.it;
        });

        complimentsCurrent = complimentsIT;
        encouragementsCurrent = encouragementsIT;
    } else {
        elements.forEach(el => {
            el.textContent = el.dataset.en;
        });

        complimentsCurrent = compliments;
        encouragementsCurrent = encouragements;
    }
}
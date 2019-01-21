const questions = [
    {
        question: "What is 10",
        options: ["8", "7", "9", "10"],
        answer: "10"
    },
    {
        question: "What is hello",
        options: ["8", "7", "9", "10"],
        answer: "10"
    },
    {
        question: "What is next one",
        options: ["8", "7", "9", "10"],
        answer: "10"
    }
];

let question_number = 0;
let correct = 0;

document.addEventListener("DOMContentLoaded", () => {
    load_question();
});

function load_question () {
    // Display correct
    document.querySelector("#correct").innerHTML = String(correct) + " of " + String(question_number);

    // Checks if reached the end
    if (question_number >= questions.length) {
        document.querySelector("#question").innerHTML = "Quiz complete!";
        document.querySelector("#options").innerHTML = "";
        return false;
    }

    // Loads the question
    document.querySelector("#question").innerHTML = questions[question_number].question;
    const options = document.querySelector("#options");
    options.innerHTML = "";
    for (const option of questions[question_number].options) {
        options.innerHTML += '<button class="option">' + option + '</button>';
    }
    document.querySelectorAll(".option").forEach(option => {
        option.onclick = () => {
            if (option.innerHTML === questions[question_number].answer) {
                correct++;
            }
            question_number++;
            load_question();
        }
    })
}
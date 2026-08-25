const questions = [

    {
        question: "What does HTML stand for?",

        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],

        answer: 0
    },

    {
        question: "Which language is used to style a web page?",

        options: [
            "Python",
            "CSS",
            "C",
            "SQL"
        ],

        answer: 1
    },

    {
        question: "Which language adds interactivity to websites?",

        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],

        answer: 2
    },

    {
        question: "Which keyword declares a variable in JavaScript?",

        options: [
            "variable",
            "let",
            "define",
            "newvar"
        ],

        answer: 1
    },

    {
        question: "Which symbol is used for comments in JavaScript?",

        options: [
            "//",
            "<!-- -->",
            "#",
            "**"
        ],

        answer: 0
    },

    {
        question: "Which language is commonly used for data analysis?",

        options: [
            "Python",
            "HTML",
            "CSS",
            "XML"
        ],

        answer: 0
    },

    {
        question: "What does SQL mainly work with?",

        options: [
            "Images",
            "Databases",
            "Videos",
            "Operating Systems"
        ],

        answer: 1
    },

    {
        question: "Which tool is used to track code changes?",

        options: [
            "Git",
            "Chrome",
            "HTML",
            "CSS"
        ],

        answer: 0
    },

    {
        question: "What is GitHub mainly used for?",

        options: [
            "Code hosting and collaboration",
            "Photo editing",
            "Video streaming",
            "Music production"
        ],

        answer: 0
    },

    {
        question: "Which one is a programming language?",

        options: [
            "Python",
            "HTML",
            "CSS",
            "HTTP"
        ],

        answer: 0
    }

];


const questionElement =
    document.getElementById("question");

const optionsElement =
    document.getElementById("options");

const questionNumberElement =
    document.getElementById("questionNumber");

const progressBar =
    document.getElementById("progressBar");

const feedback =
    document.getElementById("feedback");

const nextButton =
    document.getElementById("nextButton");

const quizScreen =
    document.getElementById("quizScreen");

const resultScreen =
    document.getElementById("resultScreen");

const scoreElement =
    document.getElementById("score");

const restartButton =
    document.getElementById("restartButton");


let currentQuestion = 0;

let score = 0;

let answered = false;


function showQuestion() {

    answered = false;

    feedback.textContent = "";

    nextButton.disabled = true;

    const question =
        questions[currentQuestion];


    questionElement.textContent =
        question.question;


    questionNumberElement.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    const progress =
        ((currentQuestion + 1) / questions.length) * 100;


    progressBar.style.width =
        `${progress}%`;


    optionsElement.innerHTML = "";


    question.options.forEach(
        (option, index) => {

            const button =
                document.createElement("button");

            button.className = "option";

            button.textContent = option;


            button.addEventListener(
                "click",
                () => selectAnswer(
                    button,
                    index
                )
            );


            optionsElement.appendChild(button);

        }
    );

}


function selectAnswer(button, selectedIndex) {

    if (answered) {
        return;
    }

    answered = true;

    const correctIndex =
        questions[currentQuestion].answer;


    const allOptions =
        document.querySelectorAll(".option");


    allOptions.forEach(option => {

        option.disabled = true;

    });


    if (selectedIndex === correctIndex) {

        button.classList.add("correct");

        feedback.textContent =
            "✓ Correct answer!";

        feedback.style.color =
            "#16a34a";

        score++;

    } else {

        button.classList.add("wrong");

        allOptions[correctIndex]
            .classList.add("correct");

        feedback.textContent =
            "✗ Wrong answer!";

        feedback.style.color =
            "#dc2626";

    }


    nextButton.disabled = false;

}


nextButton.addEventListener(
    "click",
    () => {

        currentQuestion++;

        if (
            currentQuestion <
            questions.length
        ) {

            showQuestion();

        } else {

            showResult();

        }

    }
);


function showResult() {

    quizScreen.style.display =
        "none";

    resultScreen.style.display =
        "block";

    scoreElement.textContent =
        `${score} / ${questions.length}`;

}


restartButton.addEventListener(
    "click",
    () => {

        currentQuestion = 0;

        score = 0;

        resultScreen.style.display =
            "none";

        quizScreen.style.display =
            "block";

        showQuestion();

    }
);


showQuestion();
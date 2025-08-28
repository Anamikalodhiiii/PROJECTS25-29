const questions = [
    {
        question: ""Which company developed JavaScript?",
        choices: [
      "Netscape",
      "Microsoft",
      "Google",
      "Apple"
    ],
    answer: 0
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    choices: [
      "Number",
      "String",
      "Boolean",
      "Float"
    ],
    answer: 3
    },
  {
    question: "What is the correct syntax to print a message in the console?",
    choices: [
      "console.print('Hello')",
      "print('Hello')",
      "console.log('Hello')",
      "log.console('Hello')"
    ],
    answer: 2
    },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    choices: [
      "//",
      "/*",
      "#",
      "<!--"
    ],
    answer: 0
  },
  {
    question: "How do you declare a variable in JavaScript?",
    choices: [
      "var myVar;",
      "int myVar;",
      "let myVar;",
      "Both A and C"
    ],
    answer: 3
  },
  {
    question: "Which method converts a JSON string to a JavaScript object?",
    choices: [
      "JSON.parse()",
      "JSON.stringify()",
      "parse.JSON()",
      "toObject()"
    ],
    answer: 0
    },
  {
    question: "What will 'typeof null' return?",
    choices: [
      "'null'",
      "'object'",
      "'undefined'",
      "'number'"
    ],
    answer: 1
  },
  {
    question: "Which array method adds one or more elements to the end of an array?",
    choices: [
      "push()",
      "pop()",
      "shift()",
      "unshift()"
    ],
    answer: 0
  },
  {
    question: "How do you write an arrow function in JavaScript?",
    choices: [
      "function => {}",
      "() => {}",
      "() -> {}",
      "=> () {}"
    ],
    answer: 1
},
{
    question: "Which keyword is used to define a constant in JavaScript?",
    choices: [
      "let",
      "var",
      "const",
      "static"
    ],
    answer: 2
  }
];
  
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;   
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.innerHTML = choice;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {  
        
        showQuestion();
    } else {
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {    
          startQuiz();
    }
});

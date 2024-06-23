// Sample data
const questions = [
    {
    text: "Which language is primarily used for web app development?",
    options: ["C#", "Python", "JavaScript", "Swift"],
    correct: 2
},
{
    text: "Which of the following is a relational database management system?",
    options: ["Oracle", "Scala", "Perl", "Java"],
    correct: 0
},
{
    text: "In which language is memory management provided by JVM?",
    options: ["Java", "C", "C++", "Python"],
    correct: 0
},
{
    text: "What does HTML stand for?",
    options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
    correct: 2
},
{
    text: "Which of the following is not a valid variable name in Python?",
    options: ["_myVar", "myVar2", "2myVar", "my_var"],
    correct: 2
},
{
    text: "Which of the following is not an object-oriented programming language?",
    options: ["Java", "C#", "Scala", "C"],
    correct: 3
},
{
    text: "Which tool is used to ensure code quality in JavaScript?",
    options: ["JSLint", "TypeScript", "Babel", "Webpack"],
    correct: 0
},
{
    text: "In which data structure, elements are added at one end and removed from the other?",
    options: ["Array", "Stack", "Queue", "LinkedList"],
    correct: 2
},
{
    text: "What is the primary use of the Git command 'clone'?",
    options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
    correct: 1
},
{
    text: "What does API stand for in the context of programming?",
    options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
    correct: 1
}
];


// Variable to keep track of current question index
let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question");
const answerList = document.getElementById("answer-list");
const submitButton = document.getElementById("submit");
const nextButton = document.getElementById("next");

// Function to render current question and options
function renderQuestion() {
    questionContainer.innerHTML = ""; // Clear previous question
    const currentQuestion = questions[currentQuestionIndex];

    // Render question text
    questionContainer.textContent = `Q ${currentQuestionIndex+1}. ${currentQuestion.text}`;
    answerList.innerHTML = "";
    
    // Render options
    currentQuestion.options.forEach((option, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<input type="radio" name="answer" value="${index}"> ${option}`;
        answerList.appendChild(listItem);
    });

    // Hide Next and Show Submit
    submitButton.hidden = false;
    nextButton.hidden = true;
}

submitButton.addEventListener("click", () => {
    // Write the JS code that you want to be executed each time the Submit button is clicked.
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if(!selectedAnswer) {
        alert("Please select an answer!");
        return;
    }

    // Check if selected option is correct
    if(parseInt(selectedAnswer.value) === questions[currentQuestionIndex].correct) {
        score++;
    }

    // Highlight correct answer
    const correctAnswerIndex = questions[currentQuestionIndex].correct;
    answerList.children[correctAnswerIndex].style.background = "rgb(144, 238, 144)";

    // Hide Submit and Show Next
    submitButton.hidden = true;
    nextButton.hidden = false;
});

nextButton.addEventListener("click", () => {
    // Write the JS code that you want to be executed each time the Next button is clicked.
    currentQuestionIndex++;

    if(currentQuestionIndex < questions.length) {
        renderQuestion();
    } else {
        // Quiz finished, show score alert
        alert(`Quiz finished! Your score is: ${score}/${questions.length}`);
        // Reset quiz
        currentQuestionIndex = 0;
        score = 0;
        renderQuestion();
    }
});

// Render initial question
renderQuestion();
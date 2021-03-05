const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()

})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
} 

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
 const selectedButton = e.target
 const correct = selectedButton.dataset.correct
 setStatusClass(document.body, correct)
 Array.from(answerButtonsElement.children).forEach(button => {
     setStatusClass(button, button.dataset.correct)
 })
 if (shuffledQuestions.length > currentQuestionIndex + 1) {
 
 nextButton.classList.remove('hide')
 } else {
     startButton.innerText = 'End Game'
     startButton.classList.remove('hide')
 }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

}

const questions = [
    {
        question: 'Who was the hacker villain in diehard?',
        answers: [
            { text: 'Theo', correct: true },
            { text: 'Hans Gruber', correct: false},
            { text: 'Karl', correct: false },
            { text: 'John McClane', correct: false }

        ]
    },
    {
        question: "Which one of these is not a coding language",
        answers: [
            { text: 'HTML', correct: false },
            { text: 'CSS', correct: false },
            { text: 'JavaScript', correct: false },
            { text: 'BTFD', correct: true },
        ]
    },
    {
        question: "Ice-type moves are super-effective against which type of Pokemon?",
        answers: [
            { text: 'Fire-type', correct: false },
            { text: 'Electric-type', correct: false },
            { text: 'Dragon-type', correct: true },
            { text: 'Water-type', correct: false }
        ]
    },
    {
        question: "Who won the 2005 World Series?",
        answers: [
            { text: 'Arizona Diamondbacks', correct: false },
            { text: 'Chicago White Sox', correct: true },
            { text: 'Boston Red Sox', correct: false },
            { text: 'St. Louis Cardinals', correct: false }
        ]
    },
    {
        question: "Which of the following Hip-Hop artists is attributed with authoring multiple timeless hits such as Foot Fungus and Faucet Failure?",
        answers: [
            { text: 'Drake', correct: false },
            { text: 'Ski Mask the Slump God', correct: true },
            { text: 'Lil Yachty', correct: false },
            { text: 'Kendrick Lamar', correct: false }
        ]
    },
    {
        question: "Which of the following is classified as a fruit",
        answers: [
            { text: 'Avocado', correct: true },
            { text: 'Potato', correct: false },
            { text: 'Lasagna', correct: false },
            { text: 'Strawberry-flavored starburst', correct: false }
        ]
    },
    {
        question: "What is the capital of Hungary",
        answers: [
            { text: 'Starving', correct: false },
            { text: 'Famished', correct: false },
            { text: 'Bucharest', correct: false },
            { text: 'Budapest', correct: true }
        ]
    }
]
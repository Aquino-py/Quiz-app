const quizData = [
    {
        question: 'Quantos anos tem o Pedro?',
        a: '10',
        b: '17',
        c: '23',
        d: '110',
        correct: 'c'
    }, {
        question: 'Qual a linguagem de programação mais usada atualmente?',
        a: 'Java',
        b: 'Python',
        c: 'C++',
        d: 'JavaScript',
        correct: 'd'
    }, {
        question: 'Quem é o presidente atual dos estados unidos?',
        a: 'Donald Trump',
        b: 'Bill Clinton',
        c: 'George Washington',
        d: 'Joe Biden',
        correct: 'd'
    }, {
        question: 'Oque significa HTML?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Application Terminals Motorboats',
        correct: 'a'
    }, {
        question: 'Em que ano javascript foi criado?',
        a: '1995',
        b: '1996',
        c: '1997',
        d: 'Nenhuma das respostas acima',
        correct: 'a'
    },
]

const quiz = document.getElementById('quiz')
const answersEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function getSelected() {
    let answer = undefined
    let snackbar = document.getElementById("snackbar");
    
    answersEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id
        } else {
            // snackbar
            snackbar.className = "show";
            setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
        }
    })

    return answer
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false
    })
}

submitBtn.addEventListener('click', () => {
    // check if answer is correct and if the quiz is over
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2>Você acertou ${score} de ${quizData.length} das perguntas.</h2> <button onclick="location.reload()">Tentar novamente</button>`
        }
    }
})
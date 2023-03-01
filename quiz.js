const quizData =
[
   {
    question :"1. HTML stands for",
    a:"HighText Machine Language",
    b:"HyperText and links Markup Language",
    c:"HyperText Markup Language",
    d:"None of these",
    correct:"c"
   } ,
   {
    question :"2. The correct sequence of HTML tags for starting a webpage is",
    a:"Head, Title, HTML, body",
    b:"HTML, Body, Title, Head",
    c:"HTML, Head, Title, Body",
    d:"HTML, Head, Body,title",
    correct:"c"
   } ,
   {
    question :"3. Which of the following element is responsible for making the text bold in HTML?",
    a:"<pre>",
    b:"<a>",
    c:"<b>",
    d:"<br>",
    correct:"c"
   } ,
   {
    question :"4. Which of the following tag is used for inserting the largest heading in HTML?",
    a:"<h3>",
    b:"<h1>",
    c:"<h5>",
    d:"<h2>",
    correct:"b"
   } ,
   {
    question :"5.  Which of the following tag is used to insert a line-break in HTML?",
    a:"<br>",
    b:"<a>",
    c:"<pre>",
    d:"<b>",
    correct:"a"
   } ,
   {
    question :"6. How to create an unordered list (a list with the list items in bullets) in HTML?",
    a:"<ul>",
    b:"<ol>",
    c:"<li>",
    d:"<i>",
    correct:"a"
   } ,
   {
    question :"7. Which of the following tag is used to define options in a drop-down selection list?",
    a:"<select>",
    b:"<list>",
    c:"<dropdown>",
    d:"<option>",
    correct:"d"
   } ,
   {
    question :"8. Which of the following tag is used to add rows in the table?",
    a:"<td> and </td>",
    b:"<th>and</th>",
    c:"<tr>and</tr>",
    d:"<hr>and</hr>",
    correct:"c"
   } ,
   {
    question :"9. Which of the following attribute is used to provide a unique name to an element?",
    a:"class",
    b:"id",
    c:"type",
    d:"none of the above",
    correct:"b"
   } ,
   {
    question :"10. Which of the following HTML tag is used to display the text with scrolling effect",
    a:"<marquee>",
    b:"<scroll>",
    c:"<div>",
    d:"<frame>",
    correct:"a"
   } 
 ];
 
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll(' .answer')
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
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
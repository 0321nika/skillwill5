//დავალება 1

const text = document.querySelector("#text");
const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
    text.style.display = "none"
})


//დავალება 2

//div
const newDiv = document.createElement('div');
newDiv.id = 'card';

//h2
const newHeading = document.createElement('h2');
newHeading.textContent = 'Gandalf';

//a
const newLink = document.createElement('a');
newLink.href = '#';
newLink.textContent = 'Go to profile';

newDiv.append(newHeading,newLink,);
document.body.appendChild(newDiv);


//დავალება3 

const answer1 = document.querySelector(".answer1")
const answer2 = document.querySelector(".answer2")
const answer3 = document.querySelector(".answer3")
const answer4 = document.querySelector(".answer4")
const answer5 = document.querySelector(".answer5")
const answer6 = document.querySelector(".answer6")
const answer7 = document.querySelector(".answer7")
const answer8 = document.querySelector(".answer8")
const question = document.querySelector(".question")
const question1 =document.querySelector(".question2")
const point = document.querySelector("#point")
curentPoint = 0 


answer1.addEventListener("click", (e) => {
    answer1.style.color = "green"
    curentPoint++
    point.innerHTML = `score: ${curentPoint}`
    question.style.display = "none"
    question1.style.display = "block"
})

answer2.addEventListener("click", (e) => {
    answer2.style.color = "red"
    question.style.display = "none"
    question1.style.display = "block"
})

answer3.addEventListener("click", (e) => {
    answer3.style.color = "red"
    question.style.display = "none"
    question1.style.display = "block"
})

answer4.addEventListener("click", (e) => {
    answer4.style.color = "red"
    question.style.display = "none"
    question1.style.display = "block"
})
answer5.addEventListener("click", (e) => {
    answer5.style.color = "green"
    curentPoint++
    point.innerHTML = `score: ${curentPoint}`
    question1.style.display = "none"

})

answer6.addEventListener("click", (e) => {
    answer6.style.color = "red"
    question1.style.display = "none"

})

answer7.addEventListener("click", (e) => {
    answer7.style.color = "red"
    question1.style.display = "none"

})

answer8.addEventListener("click", (e) => {
    answer8.style.color = "red"
    question1.style.display = "none"

})


const checkAnswers=()=>{
    const marked=Array.from(document.querySelectorAll('a.duringGame__answerBtn--clicked'))
    const answers=marked.map(marked=>marked.textContent)
    /*check answers and show final view */
    console.log(answers)
}

export const finishQuizBtn = ()=>{
    const finish=document.createElement('button');
    finish.textContent="Finish Quiz!";
    finish.classList.add('duringGame__finish')
    finish.addEventListener("click",()=>checkAnswers())
    return finish;
}
import {quizSummary} from '../quizSummary'

const getAnswers=()=>{
    const userAnswers:string[]=[];
    for(let i=1;i<6;i++){
        const element=document.querySelector(`.duringGame__item[data-id='${i}'] > .duringGame--bottom > a.duringGame__answerBtn--clicked`)
        userAnswers[i-1] = element===null ? null :element.textContent;
    }
    return userAnswers;
}

export const finishQuizBtn = ()=>{
    const finish=document.createElement('button');
    finish.textContent="Finish Quiz!";
    finish.classList.add('duringGame__finish')
    finish.addEventListener("click",()=>{
        quizSummary(getAnswers())
    })
    return finish;
}
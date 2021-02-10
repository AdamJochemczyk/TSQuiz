import {userPoints} from './atoms/userPoints'
import {btnCloseSummary} from './atoms/btnCloseSummary'

const generateRow=(question:string,userAnswer:string,correctAnswer:string)=>{
    console.log("Question:",question,"User:",userAnswer,"Correct:",correctAnswer)
    const node=document.createElement('div')
    node.classList.add('finalView__item')
    const title=document.createElement('p')
    title.innerHTML=question
    const user=document.createElement('p')
    user.innerHTML=`Your answer: ${userAnswer===null ? "none": userAnswer}`
    if(userAnswer===correctAnswer){
        user.classList.add('gallery__easy')
        let points:number=parseInt(sessionStorage.getItem("points"))
        points++;
        sessionStorage.setItem("points",points.toString());
    }else{
        user.classList.add('gallery__hard')
    }
    const answer=document.createElement('p')
    answer.innerHTML=`Answer: ${correctAnswer}`
    answer.classList.add('gallery__easy')
    node.appendChild(title)
    node.appendChild(user)
    node.appendChild(answer)
    return node;
}

export const quizSummary = (userAnswers:string[])=>{
    document.body.removeChild(document.querySelector('.duringGame'))
    const correctAnswers:string[]=JSON.parse(sessionStorage.getItem("correct"));
    const questions:string[]=JSON.parse(sessionStorage.getItem("question"));
    const node=document.createElement('div');
    node.classList.add('finalView')
    for(let i=0;i<questions.length;i++){
        node.appendChild(generateRow(questions[i],userAnswers[i],correctAnswers[i]))
    }
    node.appendChild(userPoints())
    node.appendChild(btnCloseSummary())
    document.body.appendChild(node)
}
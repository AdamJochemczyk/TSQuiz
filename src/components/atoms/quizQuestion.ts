import {questionDescription} from "../atoms/questionDescription"
import {questionAnswers} from '../atoms/questionAnswers'

export type quizQuestion={
    category:string,
    correct_answer:string,
    difficulty:string,
    incorrect_answers:string[],
    question:string,
    questionType: string
}

export const quizAnswerBlock = (question:quizQuestion)=>{
    const node=document.createElement('div')
    node.classList.add('duringGame__item')
    const title=document.createElement('h3')
    title.textContent=question.category;
    node.appendChild(title);
    node.appendChild(questionDescription(question.question,question.difficulty))
    node.appendChild(questionAnswers(question.correct_answer,question.incorrect_answers,question.questionType))
    return node;
}
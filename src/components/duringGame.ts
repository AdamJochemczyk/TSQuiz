import {AxiosResponse} from "axios"
import {quizAnswerBlock,quizQuestion} from '../components/atoms/quizQuestion'
import {finishQuizBtn} from "../components/atoms/finishQuizBtn";

const processQuestionData=(el:Object):quizQuestion=>{
    return {
            category: Object(el)["category"],
            correct_answer: Object(el)["correct_answer"],
            difficulty: Object(el)["difficulty"],
            incorrect_answers: Object(el)["incorrect_answers"],
            question:Object(el)["question"],
            questionType:Object(el)["type"]
        }
}

export const duringGame = (questions:AxiosResponse)=>{
    const randomQuestions:Object[]=Object(questions)
    const node=document.createElement('div')
    node.classList.add('duringGame')
    randomQuestions.map(el=>node.appendChild(quizAnswerBlock(processQuestionData(el))));
    node.appendChild(finishQuizBtn());
    document.body.appendChild(node);
}
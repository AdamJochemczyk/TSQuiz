import { QuestionApi,questionDifficulty,questionType } from "./api";
import {AxiosResponse} from "axios";
import {duringGame} from "../components/duringGame";

const getCategory=()=>{
    return sessionStorage.getItem('categoryId')===null ? 0 : parseInt(sessionStorage.getItem('categoryId'));
}

const getType=()=>{
    switch (sessionStorage.getItem('quizType')) {
        case "all":
            return questionType.all
        case "multiple":
            return questionType.multiple
        case "boolean":
            return questionType.boolean
    }
}
const getDifficulty=()=>{
    switch (sessionStorage.getItem('quizDifficulty')) {
        case "all":
            return questionDifficulty.all
        case "easy":
            return questionDifficulty.easy
        case "medium":
            return questionDifficulty.medium
        case "hard":
            return questionDifficulty.hard
    }
}

const setQAData=(questions:AxiosResponse)=>{
    const arrQuestions:Object[]=Object(questions)
    const correct:string[]=[]
    const question:string[]=[]
    for(let i=0;i<arrQuestions.length;i++){
        correct.push(Object(questions)[i].correct_answer)
        question.push(Object(questions)[i].question)
    }
    sessionStorage.setItem("correct",JSON.stringify(correct))
    sessionStorage.setItem("question",JSON.stringify(question))
}
export const startGame =async ()=>{
    const categoryId=getCategory();
    const difficulty:questionDifficulty=getDifficulty();
    const type:questionType=getType();
    const api=new QuestionApi(5,categoryId,difficulty,type)
    await api.setSessionToken();
    const questions:AxiosResponse=await api.getQuizQuestions();
    setQAData(questions)
    duringGame(questions)
}
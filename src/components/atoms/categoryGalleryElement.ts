import { QuestionApi } from "../../scripts/api";
import {questionsByDifficulty} from './questionsByDifficulty';

const extractQuestionsData=(data:Object)=>{
    const totalQuestions:number=Object(data)["total_question_count"]
    const easyQuestions:number=Object(data)["total_easy_question_count"]
    const mediumQuestions:number=Object(data)["total_medium_question_count"]
    const hardQuestions:number=Object(data)["total_hard_question_count"]
    return {totalQuestions, easyQuestions, mediumQuestions,hardQuestions};
}

const getCategoryData=async (id:number)=>{
    const api=new QuestionApi()
    const data=await api.getQuestionForCategory(id);
    return extractQuestionsData(data);
}

const handleClick=(e:MouseEvent)=>{
    const target=e.target as HTMLElement;
    const parent=target.parentNode;
    const id=parent.querySelector('h2').dataset.id;
    const categoryName=parent.querySelector('h2').textContent;
    const currentCategory=document.querySelector('#currentCategory')
    currentCategory.textContent=`Current category: ${categoryName}`;
    sessionStorage.setItem('categoryId',id);
    (<HTMLElement>document.querySelector('.startQuizForm')).style.display='flex';
    document.body.removeChild(document.querySelector('.gallery'))
}

export const categoryGalleryElement =async (id:number,name:string)=>{
    const node=document.createElement('div');
    node.classList.add('gallery__item')
    const title=document.createElement('h2');
    title.textContent=name;
    title.dataset.id=id.toString();
    const {totalQuestions,easyQuestions,mediumQuestions,hardQuestions}:{totalQuestions:number,easyQuestions:number,mediumQuestions:number,hardQuestions:number}=await getCategoryData(id);
    const total=document.createElement('p')
    total.textContent=`Total: ${totalQuestions}`;
    total.classList.add('gallery__total')
    node.appendChild(title);
    node.appendChild(total)
    node.appendChild(questionsByDifficulty(easyQuestions,mediumQuestions,hardQuestions));
    const btn=document.createElement('button');
    btn.textContent="Choose me!";
    btn.classList.add('gallery__cta');
    btn.addEventListener('click',e=>handleClick(e))
    node.appendChild(btn);
    return node;
}
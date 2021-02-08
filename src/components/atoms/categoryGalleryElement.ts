import { QuestionApi } from "../../scripts/api";

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
const questionsData=(name:string,value:number)=>{
    const node=document.createElement('div');
    const title=document.createElement('p')
    title.textContent=`${name}`
    const count=document.createElement('p')
    count.textContent=`${value}`;
    node.appendChild(title);
    node.appendChild(count);
    return node;
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
    node.appendChild(title);
    node.appendChild(total)
    node.appendChild(questionsData("Easy:",easyQuestions))
    node.appendChild(questionsData("Medium:",mediumQuestions))
    node.appendChild(questionsData("Hard:",hardQuestions))
    //remove on choose
        /*
        on click choose category show all categories in grid
         (<HTMLElement>document.querySelector('.startQuizForm')).style.display='flex';
    */
    return node;
}
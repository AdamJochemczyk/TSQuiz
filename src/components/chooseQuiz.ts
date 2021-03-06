import { questionDifficulty, questionType } from "../scripts/api";
import {chooseDifficulty} from './atoms/chooseDifficulty'
import {chooseQuestionType} from './atoms/chooseQuestionType'
import {btnToCategoryGallery} from './atoms/btnToCategoryGallery'
import {submitFormBtn} from './atoms/submitFormBtn';

export const StartQuizForm =()=>{
    const container=document.createElement('div')
    container.classList.add('container')
    const node = document.createElement('form');
    node.classList.add('startQuizForm')
    const title=document.createElement('h2')
    title.textContent="Choose quiz parameters";
    node.appendChild(title)
   node.appendChild(btnToCategoryGallery());
    const currentCategory=document.createElement('p')
    currentCategory.id="currentCategory"
    currentCategory.textContent=`Current category: all`
    node.appendChild(currentCategory)
   node.appendChild(chooseDifficulty(questionDifficulty));
   node.appendChild(chooseQuestionType(questionType));
   node.appendChild(submitFormBtn());
    container.appendChild(node)
    return container;
}
import { questionDifficulty, questionType } from "../scripts/api";
import {chooseDifficulty} from './atoms/chooseDifficulty'
import {chooseQuestionType} from './atoms/chooseQuestionType'
import {btnToCategoryGallery} from './atoms/btnToCategoryGallery'
import {submitFormBtn} from './atoms/submitFormBtn';

export const StartQuizForm =()=>{
    const node = document.createElement('form');
    node.classList.add('startQuizForm')
    const title=document.createElement('h2')
    title.textContent="Choose quiz parameters";
    node.appendChild(title)
   node.appendChild(btnToCategoryGallery());
   node.appendChild(chooseDifficulty(questionDifficulty));
   node.appendChild(chooseQuestionType(questionType));
   node.appendChild(submitFormBtn());

    return node;
}
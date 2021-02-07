import {questionType} from '../../scripts/api';

export const chooseQuestionType = (e: typeof questionType)=>{
    const div=document.createElement('div');
    div.classList.add('formRow');
    const label=document.createElement('label');
    label.textContent="Question type: ";
    label.htmlFor="type";
    const chooseDifficulty=document.createElement("select");
    chooseDifficulty.name="type";
   for(let option in e as any){
       const newOption=document.createElement("option");
       newOption.value=option;
       newOption.text=option;
       chooseDifficulty.appendChild(newOption);
   }
   div.appendChild(label)
   div.appendChild(chooseDifficulty)
   return div;
}
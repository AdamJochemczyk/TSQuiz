import { questionDifficulty} from '../../scripts/api'

export const chooseDifficulty = (e: typeof questionDifficulty)=>{
    const div=document.createElement('div');
    div.classList.add('formRow');
    const label=document.createElement('label');
    label.textContent="Difficulty: ";
    label.htmlFor="difficulty";
    const chooseDifficulty=document.createElement("select");
    chooseDifficulty.name="difficulty";
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
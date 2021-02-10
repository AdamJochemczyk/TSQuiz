import {startGame} from '../../scripts/startGame';

const setQuizParams=()=>{
    sessionStorage.setItem("quizDifficulty",(<HTMLInputElement>document.querySelector("select[name='difficulty']")).value)
    sessionStorage.setItem("quizType",(<HTMLInputElement>document.querySelector("select[name='type']")).value);
    sessionStorage.setItem("points","0")
}

export const submitFormBtn = ()=>{
    const submit = document.createElement('input');
    submit.setAttribute("type","submit");
    submit.value="Start quiz";
    submit.addEventListener("click",e=>{
        e.preventDefault();
        setQuizParams();
        (<HTMLElement>document.querySelector('.startQuizForm')).style.display='none';
        startGame();
    })
    return submit;
}
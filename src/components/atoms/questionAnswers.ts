const removeMark=(parent:ParentNode)=>{
    const elements=Array.from(parent.querySelectorAll('a'))
    elements.map(el=>el.classList.remove('duringGame__answerBtn--clicked'))
}

const markCorrectAnswer=(element:HTMLAnchorElement)=>{
    const parent=element.parentNode;
    removeMark(parent)
    element.classList.add('duringGame__answerBtn--clicked')
}

const playerAnswer=(e:MouseEvent)=>{
    const target=e.target as HTMLAnchorElement
    markCorrectAnswer(target);
}

export const questionAnswers=(correct:string,incorrect:string[],type:string)=>{
    const node=document.createElement('div');
    node.classList.add('duringGame--bottom')
    const answers:HTMLAnchorElement[]=[];
    const possibleAnswersBtnCount=type==="multiple"?4:2;
    for(let i=0;i<possibleAnswersBtnCount;i++){
        answers[i]=document.createElement('a');
        answers[i].classList.add('duringGame__answerBtn')
        answers[i].addEventListener("click",(e:MouseEvent)=>playerAnswer(e))
    }
    if(possibleAnswersBtnCount===2){
        answers[0].textContent=correct;
        node.appendChild(answers[0])
        answers[1].textContent=incorrect[0];
        node.appendChild(answers[1])
    }else{
        const correctAnswerIndex=Math.floor(Math.random()*4)
        answers[correctAnswerIndex].textContent=correct;
        const index = answers.indexOf(answers[correctAnswerIndex]);
         node.appendChild(answers[correctAnswerIndex])
        if (index > -1) answers.splice(index, 1);
        for(let i=0;i<answers.length;i++){
            answers[i].textContent=incorrect[i];
            node.appendChild(answers[i])
        }
    }
    return node;
}
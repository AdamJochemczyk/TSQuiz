const removeMark=(parent:ParentNode)=>{
    const elements=Array.from(parent.querySelectorAll('button'))
    elements.map(el=>el.classList.remove('duringGame__answerBtn--clicked'))
}

const markAnswer=(element:HTMLButtonElement)=>{
    element.classList.add('duringGame__answerBtn--clicked')
}

const playerAnswer=(e:MouseEvent)=>{
    const target=e.target as HTMLButtonElement
    const parent=target.parentNode;
    removeMark(parent)
    markAnswer(target);
}

export const questionAnswers=(correct:string,incorrect:string[],type:string)=>{
    const node=document.createElement('div');
    node.classList.add('duringGame--bottom')
    const answers:HTMLButtonElement[]=[];
    const possibleAnswersBtnCount=type==="multiple"?4:2;
    for(let i=0;i<possibleAnswersBtnCount;i++){
        answers[i]=document.createElement('button');
        answers[i].classList.add('duringGame__answerBtn')
        answers[i].addEventListener("click",(e:MouseEvent)=>playerAnswer(e))
    }
    if(possibleAnswersBtnCount===2){
        answers[0].innerHTML=correct;
        node.appendChild(answers[0])
        answers[1].innerHTML=incorrect[0];
        node.appendChild(answers[1])
    }else{
        const correctAnswerIndex=Math.floor(Math.random()*4)
        answers[correctAnswerIndex].innerHTML=correct;
        const index = answers.indexOf(answers[correctAnswerIndex]);
         node.appendChild(answers[correctAnswerIndex])
        if (index > -1) answers.splice(index, 1);
        for(let i=0;i<answers.length;i++){
            answers[i].innerHTML=incorrect[i];
            node.appendChild(answers[i])
        }
    }
    return node;
}
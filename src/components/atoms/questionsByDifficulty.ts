const questionsData=(name:string,value:number)=>{
    const node=document.createElement('div');
    const title=document.createElement('p')
    title.textContent=`${name}`
    const count=document.createElement('p')
    count.textContent=`${value}`;
    switch(name){
        case "Easy:":
            count.classList.add('gallery__easy')
        break;
        case "Medium:":
            count.classList.add('gallery__medium')
        break;
        case "Hard:":
            count.classList.add('gallery__hard')
        break;

    }
    node.appendChild(title);
    node.appendChild(count);
    return node;
}

export const questionsByDifficulty=(easyQuestions:number,mediumQuestions:number,hardQuestions:number)=>{
    const node=document.createElement('div')
    node.classList.add('gallery__difficultyContainer')
    node.appendChild(questionsData("Easy:",easyQuestions))
    node.appendChild(questionsData("Medium:",mediumQuestions))
    node.appendChild(questionsData("Hard:",hardQuestions))
    return node;
}
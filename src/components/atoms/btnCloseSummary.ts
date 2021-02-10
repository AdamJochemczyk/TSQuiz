const showStartQuizForm=()=>{
    (<HTMLElement>document.querySelector('.startQuizForm')).style.display='flex';
    document.body.removeChild(document.querySelector('.finalView'))
}

export const btnCloseSummary=()=>{
    const node=document.createElement('div');
    node.style.display='flex';
    node.style.justifyContent='center';
    const button=document.createElement('button');
    button.classList.add('finalView__btn')
    button.textContent="Close summary"
    button.addEventListener("click",()=>showStartQuizForm())
    node.appendChild(button)
    return node;
}
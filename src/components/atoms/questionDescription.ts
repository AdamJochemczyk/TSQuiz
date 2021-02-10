export const questionDescription=(question:string,difficulty:string)=>{
    const questionDescription=document.createElement('p')
    questionDescription.textContent=question;
    questionDescription.classList.add('duringGame--margin')
    switch (difficulty){
        case "easy":
        questionDescription.classList.add("gallery__easy")
        break;
        case "medium":
        questionDescription.classList.add("gallery__medium")
        break;
        case "hard":
        questionDescription.classList.add("gallery__hard")
        break;
    }
    return questionDescription;
}
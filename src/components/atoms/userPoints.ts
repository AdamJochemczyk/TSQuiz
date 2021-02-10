export const userPoints=()=>{
    const points=document.createElement('div')
    const pointsCount=document.createElement('p')
    pointsCount.textContent=`Your score: ${sessionStorage.getItem("points")}`;
    pointsCount.classList.add('finalView__points')
    points.appendChild(pointsCount)
    return points
}
const container=document.querySelector("#container");
const button=document.querySelector(".button");
const reset=document.querySelector("#reset-button");
reset.addEventListener("click",()=>{
 location.reload();
})
button.addEventListener("click",()=>{
    let info=prompt("choose the number of boxes Between 20-100 😁and Start Drawing✌️Enjoy!") **2;
    let number=0;
    while (number<=info){
        const NewDiv=document.createElement('div');
        NewDiv.classList.add("box");
        container.appendChild(NewDiv);
        NewDiv.textContent=" ";
        NewDiv.addEventListener('mouseover', () => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        NewDiv.style.backgroundColor = randomColor;});
        number=number+1;
    }
        
});



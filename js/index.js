let btn1 = document.getElementById("mybutton"); 
let btn2 = document.getElementById("mybutton2"); 
let copyDiv = document.querySelector(".copycode");
let rgb1 = "#fff";
let rgb2 = "#000";
const Hexavalues = () => {
    let myHexavalues = "0123456789abcdef";
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
        color += myHexavalues[Math.floor(Math.random() * 16)];
    }
    
    return color; 
};

const handlebutton1 = () => {
    rgb1 = Hexavalues(); 
    console.log(rgb1); 
    btn1.innerText=rgb1;
    btn1.style.backgroundColor = rgb1; 
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`; 
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`; 
};

const handlebutton2 = () => {
 rgb2 = Hexavalues();
    console.log(rgb2);
    btn2.innerText=rgb2;
    btn2.style.backgroundColor = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`; 
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
};
 


btn1.addEventListener('click', handlebutton1);
btn2.addEventListener('click', handlebutton2);

copyDiv.addEventListener('click',()=>{
    navigator.clipboard.writeText(copyDiv.innerText);
}); 
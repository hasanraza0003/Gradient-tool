const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const info =document.querySelector(".info");
const gradient=document.querySelector(".container");

const randomGen = () => {
    var colour="#";
    for(let i=0;i<6;i++){
        var rand=Math.floor(Math.random()*16);
        var hexValue="0123456789abcdef";
        colour += hexValue[rand];
    }
    return colour;
}

btn1.addEventListener("click",()=>{
    var clr1 = randomGen();
    var sam = gradient.style.backgroundImage = `linear-gradient(to right,${clr1},${btn2.innerText})`;
    btn1.innerText=clr1;
    info.textContent= `background-image : ${sam}`;
    
});

btn2.addEventListener("click",()=>{
    var clr2 = randomGen();
    var sam = gradient.style.backgroundImage = `linear-gradient(to right,${btn1.innerText},${clr2})`;
    btn2.innerText=clr2;
    info.textContent= `background-image : ${sam}`;
});

info.addEventListener("click", () => writeClipboardText(info.innerText));

async function writeClipboardText(text) {
  try {
    await navigator.clipboard.writeText(text);
    alert("Thanks For Using Our Tool..😊")
  } catch (error) {
    console.error(error.message);
  }
}



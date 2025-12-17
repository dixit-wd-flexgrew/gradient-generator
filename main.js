let leftBtn = document.querySelector(".box-cont .color-left");
let rightBtn = document.querySelector(".box-cont .color-right");
let output = document.querySelector(".box-cont .output");

let leftColor = "rgb(92, 145, 229)";
let rightColor = "rgb(152, 63, 198)";

let leftHexColor = "5C91E5";
let rightHexColor = "983FC6";

const hexGenerator = () => {
    let myHexCode = "0123456789ABCDEF";
    let colors = "#";
    for(let i = 0; i < 6; i++) {
        colors = colors + myHexCode[Math.floor(Math.random() * 16)];
    }
    return colors;  
}

const updateUI = () => {
    document.body.style.background = `linear-gradient(to right, ${leftColor}, ${rightColor})`;
    output.innerHTML = `background: linear-gradient(to right, ${leftColor}, ${rightColor});`;
    leftBtn.style.backgroundColor = leftColor;
    rightBtn.style.backgroundColor = rightColor;
};

const updateBtn = (hexColor, e) => {
   if(e.target.classList.contains('color-left')) {
     leftBtn.textContent = hexColor;
   } else if (e.target.classList.contains('color-right')) {
     rightBtn.textContent = hexColor;
   }
}

const hexToRgbConverter = (color, e) => {    
    let rgb1 = color.slice(1, 3);
    let rgb2 = color.slice(3, 5);
    let rgb3 = color.slice(5, 7);    
    rgb1 = parseInt(rgb1, 16);
    rgb2 = parseInt(rgb2, 16);
    rgb3 = parseInt(rgb3, 16);
    if(e.target.classList.contains('color-left')){
        leftColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    } else if (e.target.classList.contains('color-right')) {
        rightColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    }
    updateUI();
    // return `${rgb1} ${rgb2} ${rgb3}`;
}


let handleBtn = (e) => {
    if(e.target.classList.contains('color-left')) {
        leftColor = hexGenerator();
        updateBtn(leftColor, e);
        hexToRgbConverter(leftColor, e);
    } else if (e.target.classList.contains('color-right')) {
        rightColor = hexGenerator();
        updateBtn(rightColor, e);
        hexToRgbConverter(rightColor, e);
    }
    // hexToRgbConverter();
}

leftBtn.addEventListener("click", handleBtn);
rightBtn.addEventListener("click", handleBtn);
output.addEventListener("click", (e) => {
    navigator.clipboard.writeText(e.target.innerText);
})

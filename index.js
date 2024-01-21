// SLIDES ENDS
const F_Slider = () =>{
    const F_imagelist = document.querySelector("#F-list");
    const slideButton = document.querySelectorAll(".F-slideButton");
        
    slideButton.forEach(button => {
        button.addEventListener("click",() =>{
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = F_imagelist.clientWidth * direction;
            F_imagelist.scrollBy({left: scrollAmount, behavior: "smooth"}); 
       });
   });
}
window.addEventListener("load", F_Slider);

const M_Slider = () =>{
    const M_imagelist = document.querySelector("#M-list");
    const slideButton = document.querySelectorAll(".M-slideButton");
        
    slideButton.forEach(button => {
        button.addEventListener("click",() =>{
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = M_imagelist.clientWidth * direction;
            M_imagelist.scrollBy({left: scrollAmount, behavior: "smooth"}); 
       });
   });
}
window.addEventListener("load", M_Slider);

const FM_Slider = () =>{
    const FM_imagelist = document.querySelector("#FM-list");
    const slideButton = document.querySelectorAll(".FM-slideButton");
        
    slideButton.forEach(button => {
        button.addEventListener("click",() =>{
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = FM_imagelist.clientWidth * direction;
            FM_imagelist.scrollBy({left: scrollAmount, behavior: "smooth"}); 
       });
   });
}
window.addEventListener("load", FM_Slider);

// SLIDES ENDS


// SIZE BEGINS
let box1 = document.querySelector(".box1");
box1.onclick = clickBox1;
box1.onmouseout = mouseOut;

function clickBox1(){
    document.getElementById("sizeLabel").innerHTML = "M"
    box1.style.backgroundColor = "black"
    box1.style.color = "white"
}

let box2 = document.querySelector(".box2");
box2.onclick = clickBox2;
box2.onmouseout = mouseOut;

function clickBox2(){
    document.getElementById("sizeLabel").innerHTML = "L"
    box2.style.backgroundColor = "black"
    box2.style.color = "white"
}

let box3 = document.querySelector(".box3");
box3.onclick = clickbox3;
box3.onmouseout = mouseOut;

function clickbox3(){
    document.getElementById("sizeLabel").innerHTML = "XL"
    box3.style.backgroundColor = "black"
    box3.style.color = "white"
}

let box4 = document.querySelector(".box4");
box4.onclick = clickbox4;
box4.onmouseout = mouseOut;

function clickbox4(){
    document.getElementById("sizeLabel").innerHTML = "XXL"
    box4.style.backgroundColor = "black"
    box4.style.color = "white"
}

let box5 = document.querySelector(".box5");
box5.onclick = clickbox5;
box5.onmouseout = mouseOut;

function clickbox5(){
    document.getElementById("sizeLabel").innerHTML = "XXXL"
    box5.style.backgroundColor = "black"
    box5.style.color = "white"
}
function mouseOut(){
    this.style.backgroundColor = ""
    this.style.color = ""
}
// SIZE ENDS


// QUATITY BEGINS
let count = 0;
document.getElementById("buttonDecr").onclick = function(){
    count = 1
    document.getElementById("labelCount").innerHTML = count
}
document.getElementById("buttonIncr").onclick = function(){
    count+=1
    document.getElementById("labelCount").innerHTML = count
}
// QUATITY ENDS
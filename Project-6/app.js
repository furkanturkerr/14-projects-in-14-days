const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes(){
    const triggerbotom = (window.innerHeight / 6) * 5
    // console.log(window.innerHeight / 6) * 4
    
    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerbotom){
            box.classList.add("show");
        }else{
            box.classList.remove("show")
        }
    })
}
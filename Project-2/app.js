const progress = document.getElementById("progress");
const circle = document.querySelectorAll(".circle");// 4 tane <div class="circle"> var.
const button = document.getElementById("prev");
const buttonnext = document.getElementById("next");

let currentActive = 1;

buttonnext.addEventListener("click", () => {
    currentActive++;

    if (currentActive > circle.length) {// 4 yazdırır çünkü 4 tane circle var
        currentActive = circle.length;
    }

    update();
})

    button.addEventListener("click", () => {
        currentActive--;

        if (currentActive < 1) {// Eğer ilk adımdaysak, bir önceki adıma gidilemez    
            currentActive = 1;
        }

        update();
    })

function update() {
    circle.forEach((circle, index) => { //Bu, her bir öğenin dizideki sırasıdır. Yani, ilk öğe için 0, ikinci öğe için 1, üçüncü öğe için 2, vb. olur.
        if (index < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    })

    const actives = document.querySelectorAll(".active");
    progress.style.width = ((actives.length - 1) / (circle.length - 1)) * 100 + "%"; // Bu hesaplama, aktif olan dairelerin oranını ilerleme çubuğuna yansıtır.

    // Butonların aktiflik durumlarını ayarlama
    if (currentActive === 1) {
        button.disabled = true;
    } else if (currentActive === circle.length) {
        buttonnext.disabled = true;
    } else {
        button.disabled = false;
        buttonnext.disabled = false;
    }
}
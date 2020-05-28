const screen = document.querySelector(".screen");
const btnAc = document.querySelector(".btn-ac");
const btnEqual = document.querySelector(".btn-equal");
const buttons = document.querySelectorAll(".btn");
const btnPercent = document.querySelector(".btn-percent");
const btnPlusMinus = document.querySelector(".btn-plus-minus");



for (let i = 0; i < buttons.length; i++) {
    
    buttons[i].addEventListener("click", function() {
    let number = buttons[i].getAttribute("data-num");
    screen.value += number;
    if (screen.value.length > 0) {
        btnAc.innerHTML = "C";
    };
    })
}


btnEqual.addEventListener("click", function() {


if (screen.value === "") {
    alert("Hey, the input is empty."); 
}
else {
    screen.value = eval(screen.value);
}
})


btnAc.addEventListener("click", function() {
    screen.value = "";
    btnAc.innerHTML = "AC";
})

btnPercent.addEventListener("click", getPercent);

    function getPercent () {
        screen.value = screen.value / 100;
    }

btnPlusMinus.addEventListener("click", plusMinus);

function plusMinus () {
    if (screen.value > 0) {
        screen.value = (screen.value)*-1;
    }
    else {
        screen.value = (screen.value)/-1; 
    }

}


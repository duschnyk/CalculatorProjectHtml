

const display = document.getElementById("display");

function appendToDisplay(input){
    let lastNumber = display.value;

    ['+', '-', '*', '/'].forEach(function (sign) {
        const signPos = lastNumber.lastIndexOf(sign);
        if (signPos >= 0) {
            lastNumber = lastNumber.slice(signPos);
        }
    });
    // 1+3*2/6
    // 3*2/6

    if (lastNumber === "0" && input === "0") {
        return;
    }

    if (lastNumber.indexOf('.') >= 0 && input === ".") {
        return;
    }

    const last = display.value[display.value.length - 1];
    const special = ['+', '-', '*', '/', '.'];

    if (special.includes(input) && special.includes(last)) {
        return;
    }

    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    if (display.value) {
      display.value = eval(display.value)
    }
}

function deleteFromDisplay(){
    display.value = display.value.slice(0, -1);
}
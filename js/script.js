const changeTheme = () => {
    const theme = document.querySelector('input[name="theme"]:checked').value;
    const toggle = document.querySelector('.circle')
    
    if(theme === "theme1"){
        //Background
        document.body.style.setProperty('--theme-main-background', 'hsl(222, 26%, 31%)');
        document.body.style.setProperty('--theme-toggler-background', 'hsl(223, 31%, 20%)');
        document.body.style.setProperty('--theme-screen-background', 'hsl(224, 36%, 15%)');

        //Key
        document.body.style.setProperty('--theme-key-background', 'hsl(225, 21%, 49%)');
        document.body.style.setProperty('--theme-key-shadow', 'hsl(224, 28%, 35%)');

        document.body.style.setProperty('--theme-key-secondary-background', 'hsl(6, 63%, 50%)');
        document.body.style.setProperty('--theme-key-secondary-shadow', 'hsl(6, 70%, 34%)');

        document.body.style.setProperty('--theme-key-primary-background', 'hsl(30, 25%, 89%)');
        document.body.style.setProperty('--theme-key-primary-shadow', 'hsl(28, 16%, 65%)');

        //Text
        document.body.style.setProperty('--theme-text-very-dark', 'hsl(221, 14%, 31%)');
        document.body.style.setProperty('--theme-text-white', 'white');

        //Position button Toggle
        toggle.style.left = "5px";

        document.querySelectorAll('header span')
        .forEach((element) => { element.style.color = "white"})
        document.querySelector('header h1').style.color = "white"
        document.querySelector('.result').style.color = "white"
        document.querySelector('.btn-result').style.color = "white"
    } else if(theme === "theme2"){
         //Background
        document.body.style.setProperty('--theme-main-background', 'hsl(0, 0%, 90%)');
        document.body.style.setProperty('--theme-toggler-background', 'hsl(0, 5%, 81%)');
        document.body.style.setProperty('--theme-screen-background', 'hsl(0, 0%, 93%)');

        //Key
        document.body.style.setProperty('--theme-key-background', 'hsl(185, 42%, 37%)');
        document.body.style.setProperty('--theme-key-shadow', 'hsl(185, 58%, 25%)');

        document.body.style.setProperty('--theme-key-secondary-background', 'hsl(25, 98%, 40%)');
        document.body.style.setProperty('--theme-key-secondary-shadow', 'hsl(25, 99%, 27%)');

        document.body.style.setProperty('--theme-key-primary-background', 'hsl(45, 7%, 89%)');
        document.body.style.setProperty('--theme-key-primary-shadow', 'hsl(35, 11%, 61%)');

        //Text
        document.body.style.setProperty('--theme-text-very-dark', 'hsl(60, 10%, 19%)');
        document.body.style.setProperty('--theme-text-white', 'white');

        //Position button Toggle
        toggle.style.left = "30px";

        document.querySelectorAll('header span')
        .forEach((element) => { element.style.color = "hsl(60, 10%, 19%)"})
        document.querySelector('header h1').style.color = "hsl(60, 10%, 19%)"
        document.querySelector('.result').style.color = "hsl(60, 10%, 19%)"
        document.querySelector('.btn-result').style.color = "white"
    } else {
        document.body.style.setProperty('--theme-main-background', 'hsl(268, 75%, 9%)');
        document.body.style.setProperty('--theme-toggler-background', 'hsl(268, 71%, 12%)');
        document.body.style.setProperty('--theme-screen-background', 'hsl(268, 71%, 12%)');

        document.body.style.setProperty('--theme-key-background', 'hsl(281, 89%, 26%)');
        document.body.style.setProperty('--theme-key-shadow', 'hsl(285, 91%, 52%)');

        document.body.style.setProperty('--theme-key-secondary-background', 'hsl(176, 100%, 44%)');
        document.body.style.setProperty('--theme-key-secondary-shadow', 'hsl(177, 92%, 70%)');

        document.body.style.setProperty('--theme-key-primary-background', 'hsl(268, 47%, 21%)');
        document.body.style.setProperty('--theme-key-primary-shadow', 'hsl(290, 70%, 36%)');

        document.body.style.setProperty('--theme-text-very-dark', 'hsl(52, 100%, 62%)');
        document.body.style.setProperty('--theme-text-white', 'white');

        //Position button Toggle
        toggle.style.left = "55px";

        document.querySelectorAll('header span')
        .forEach((element) => { element.style.color = "var(--theme-text-very-dark)"})
        document.querySelector('header h1').style.color = "var(--theme-text-very-dark)"
        document.querySelector('.result').style.color = "var(--theme-text-very-dark)"
        document.querySelector('.btn-result').style.color = "hsl(198, 20%, 13%)"
    }
}

let operandoA = "";
let isOperandoA = true;
let isOperador = false
let operandoB = "";
let operador = ""
const allOperador = ["+", "-", "x", "/"];
let result = "";

const showScreen = (result) => {
    const resultScreen = document.querySelector('.result');
    resultScreen.innerHTML = result;
}

const del = () => {
    const result = document.querySelector('.result');
    const value = result.innerHTML
    const newResult = value.slice(0, value.length - 1)
    
    result.innerHTML = newResult
    
    return newResult
}

const reset = () => {
    const result = document.querySelector('.result');
    result.innerHTML = "0"
    operandoA = "";
    isOperandoA = true;
    isOperador = false
    operandoB = "";
    operador = ""
}

const calc = () => {
    switch(operador){
        case "+":
            operandoA = Number(operandoA) + Number(operandoB)
            break
        case "-":
            operandoA = Number(operandoA) - Number(operandoB)
            break
        case "x":
            operandoA = Number(operandoA) * Number(operandoB)
            break
        case "/":
            operandoA = Number(operandoA) / Number(operandoB)
            break
    }
}

const digitScreen = (e) => {
    console.log(e.target.innerHTML) 
    const digit = Number(e.target.innerHTML)
    const isNumber = !isNaN(Number(e.target.innerHTML))

    if(isNumber){
        console.log(digit)
        if(isOperandoA && operandoA.length < 8){
            operandoA = operandoA.concat(digit)
            showScreen(operandoA)
        } else if(!isOperandoA && operandoB.length < 8){
            operandoB = operandoB.concat(digit)
            showScreen(operandoB)
        }

    } else if(e.target.innerHTML === "RESET"){
        reset()

    } else if(e.target.innerHTML === "DEL"){
        if(!isOperador){
            if(isOperandoA){
                operandoA = del()
            } else {
                operandoB = del()
            }
        } else {
            operador = ""
        }

    } else if(allOperador.includes(e.target.innerHTML)){
        console.log("calculando...")
        console.log("[Operando A]: ", operandoA);
        console.log("[Operador]: ", e.target.innerHTML);
        console.log("[Operando B]: ", operandoB);

        if(operandoB != ""){
            calc()

            operandoB = ""
            if(operandoA.length > 8){
                showScreen("ERR")
            } else {
                showScreen(operandoA)
            }
        } else {
            isOperandoA = false
        }

        operador = e.target.innerHTML

    } else if(e.target.innerHTML === "="){
        calc()

        operandoB = ""
        operador = ""

        if(operandoA.length > 8){
            showScreen("ERR")
        } else {
            showScreen(operandoA)
        }
    }
}

document.querySelector('.main').addEventListener('click', digitScreen.bind(this), false)
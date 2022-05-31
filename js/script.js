const calculator = {
    operandoA: "",
    isOperandoA: true,
    isOperador: false,
    pointFloat: false,
    maxNumberPointFloat: 3,
    numberPointFloat: 0,
    operandoB: "",
    operador: "",
    allOperador: ["+", "-", "x", "/"],

    showScreen: function(info) {
        const infoScreen = document.querySelector('.result');
        infoScreen.innerHTML = info;
    },

    del: () => {
        const info = document.querySelector('.result');
        const value = info.innerHTML
        const newInfo = value.slice(0, value.length - 1)
        
        info.innerHTML = newInfo
        
        return newInfo
    },

    reset: function() {
        const info = document.querySelector('.result');
        info.innerHTML = "0"
        this.operandoA = "";
        this.isOperandoA = true;
        this.isOperador = false
        this.operandoB = "";
        this.operador = ""
    },

    calc: function() {
        switch(this.operador){
            case "+":
                this.operandoA = Number(this.operandoA) + Number(this.operandoB)
                break
            case "-":
                this.operandoA = Number(this.operandoA) - Number(this.operandoB)
                break
            case "x":
                this.operandoA = Number(this.operandoA) * Number(this.operandoB)
                break
            case "/":
                this.operandoA = Number(this.operandoA) / Number(this.operandoB)
                break
        }
    },
}


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


const verifyPointFloat = (operando) => {
    const indexPoint = operando.indexOf(".")
    if(indexPoint === -1){
        calculator.pointFloat = false;
        calculator.numberPointFloat = 0;

    } else {
        calculator.pointFloat = true;

        let numberFloat = operando.slice(indexPoint);
        calculator.numberPointFloat = numberFloat.length;
        console.log("Números float: ", calculator.numberPointFloat);
    }
}

const verifyNumberDigits = () => {
    if(String(calculator.operandoA).length > 8){
        calculator.showScreen("ERR")
    } else {
        calculator.showScreen(calculator.operandoA)
    }
}



const digitScreen = (e) => {
    const digit = Number(e.target.innerHTML)
    const isNumber = !isNaN(Number(e.target.innerHTML))

    if(isNumber){
        if(calculator.isOperandoA){
            verifyPointFloat(calculator.operandoA);
        } else {
            verifyPointFloat(calculator.operandoB);
        }

        const showDigitInOperandoA = (calculator.isOperandoA && calculator.operandoA.length < 8) && (calculator.numberPointFloat <= calculator.maxNumberPointFloat);
        const showDigitInOperandoB = (!calculator.isOperandoA && calculator.operandoB.length < 8) && (calculator.numberPointFloat <= calculator.maxNumberPointFloat);

        if(showDigitInOperandoA){
            calculator.operandoA = calculator.operandoA.concat(digit)
            calculator.showScreen(calculator.operandoA)

        } else if(showDigitInOperandoB){
            calculator.operandoB = calculator.operandoB.concat(digit)
            calculator.showScreen(calculator.operandoB)
        }

    } else if (e.target.innerHTML === ".") {
        if(!calculator.pointFloat){
            const point = e.target.innerHTML;
            const showPointInOperandoA = calculator.isOperandoA && calculator.operandoA.length < 8 && calculator.operandoA.length > 0;
            const showPointInOperandoB = !calculator.isOperandoA && calculator.operandoB.length < 8 && calculator.operandoB.length > 0;
            
    
            if(showPointInOperandoA){
                calculator.operandoA = calculator.operandoA.concat(point)
                calculator.showScreen(calculator.operandoA)
    
            } else if(showPointInOperandoB){
                calculator.operandoB = calculator.operandoB.concat(point)
                calculator.showScreen(calculator.operandoB)
            }
        }

    } else if(e.target.innerHTML === "RESET"){
        calculator.reset()

    } else if(e.target.innerHTML === "DEL"){
        if(!calculator.isOperador){
            if(calculator.isOperandoA){
                calculator.operandoA = calculator.del()

                if(calculator.operandoA.length === 0){
                    calculator.showScreen("0")
                }

            } else {
                calculator.operandoB = calculator.del()

                if(calculator.operandoB.length === 0){
                    calculator.showScreen(calculator.operandoA)
                }
            }
        } else {
            calculator.operador = ""
        }

    } else if(calculator.allOperador.includes(e.target.innerHTML)){
        console.log("Calculando...")
        console.log("[Operando A]: ", calculator.operandoA);
        console.log("[Operador]: ", e.target.innerHTML);
        console.log("[Operando B]: ", calculator.operandoB);

        if(calculator.operandoB != ""){
            calculator.calc()
            calculator.operandoB = ""

            verifyNumberDigits();
            
        } else {
            calculator.isOperandoA = false
        }

        calculator.operador = e.target.innerHTML

    } else if(e.target.innerHTML === "="){
        calculator.calc()

        calculator.operandoB = ""
        calculator.operador = ""
        
        verifyNumberDigits();
    }
}

document.querySelector('.main').addEventListener('click', digitScreen.bind(this), false)
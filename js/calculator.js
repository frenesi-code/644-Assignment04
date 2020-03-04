

window.addEventListener("load", init, false);

function init() {
        
    const textBox = document.getElementById("result");    
    const buttons = document.querySelectorAll('input[type=button]');
    const clearBtn = document.getElementById("clear");
    var symbolControl = 0;

    var operationsAvailable = {
        ADD: 'add',
        SUBTRACT: 'subtract',
        MULTIPLY: 'multiply',
        DIVIDE: 'divide'
    }
        
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (object) {            
            let value = object.target.value;

            if (value === "=") {
                calculate(object);
                return;
            } 
            if (value === "Clear") { 
                clearCalc(); 
                return;
            }

            value.indexOf('+') > -1 || value.indexOf('-') > -1 || value.indexOf('/') > -1 || value.indexOf('*') > -1 ? symbolControl++ : false;
            
            if (symbolControl == 2) {
                alert('Complete the math with "=" before type another symbol');
                return;
            }

            enter(object);            
            
        }, false);
    }

    function enter(object) {                        
        console.log('Value => ', object.target.value);        
        textBox.value += object.target.value;
    }

    function calculate(object) {
        let typedMath = textBox.value;
        let result;        

        if (typedMath.indexOf('+') > -1) {            
            var res = typedMath.split("+");
            
            if (res.length == 2) {
                result = parseFloat(res[0]) + parseFloat(res[1]);                
            }   
        }

        if (typedMath.indexOf('*') > -1) {            
            var res = typedMath.split("*");
            
            if (res.length == 2) {
                result = parseFloat(res[0]) * parseFloat(res[1]);                
            }   
        }

        if (typedMath.indexOf('/') > -1) {            
            var res = typedMath.split("/");
            
            if (res.length == 2) {
                result = parseFloat(res[0]) / parseFloat(res[1]);                
            }   
        }

        if (typedMath.indexOf('-') > -1) {            
            var res = typedMath.split("-");
            
            if (res.length == 2) {
                result = parseFloat(res[0]) - parseFloat(res[1]);                
            }   
        }
        
        symbolControl = 0;
        textBox.value = result ? result : alert("Type another number to complete the math");
    }

    function clearCalc() {
        textBox.value = '';
    }
}
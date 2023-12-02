let input1 = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input1.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input1.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input1.value = string;
        }
        else{
            string += e.target.innerHTML;
            input1.value = string;
        }
        
    })
})
const binaryNum = document.querySelector('.submitNumber');
const button = document.querySelector('button');
const result = document.querySelector('.result');

function binToDec(bin){
    bin = binaryNum.value;
    let decimal = 0;
    binaryNum.focus()
        for(let i = 0; i < bin.length; i++){
            decimal = decimal + parseInt(bin[i]) * Math.pow(2, bin.length - 1 - i)
        }
        return result.value = decimal;
}


binaryNum.addEventListener('keydown', function(e){
    if (e.key == 1 || e.key == 0) {
        button.onclick = binToDec;
    } else if (e.key === 'Enter'){
        binToDec();
    } else if (e.key === 'Backspace'){
        const newValue = binaryNum.length - 1;
        binaryNum.textContent = newValue;
    }else {
        e.preventDefault();
        result.value = 'Press only 1\'s or 0\'s';
    }    
})
function getPin(){
    const random = Math.random()* 10000;
    const pin = (random +'').split('.')[0];
    if(pin.length === 4){
        return pin;
    }else{
        console.log(pin)
        return getPin;
    }
}
//display generate pin
 function generatePin(){
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();
 }

 //part calculator

 function typePin(num){
     let inputVar= 
     document.getElementById('input')
    switch(num){
        case 1:
            inputVar.value += '1';
            break;
        case 2:
            inputVar.value += '2';
            break;
        case 3:
            inputVar.value += '3';
            break;
        case 4:
            inputVar.value += '4';
            break;
        case 5:
            inputVar.value += '5';
            break;
        case 6:
            inputVar.value += '6';
            break;
        case 7:
            inputVar.value += '7';
            break;
        case 8:
            inputVar.value += '8';
             break;
         case 9:
            inputVar.value += '9';
            break;
        case 0:
            inputVar.value += '0';
            break;  
 }
}
// clear screen
function clearScreen(){
    document.getElementById('input').value = "";
}
 // backspace
 function backspace(){
    var inputVar = document.getElementById('input');
    var x = inputVar.value;
    if(x.length > 0){
        x= x.substring(0, x.length-1);
        inputVar.value = x;
    }
 }
 //verify pin
 function verifyPin(){
     const pin = document.getElementById('pin').value;
     const typePin = document.getElementById('input').value;
     if(typePin == pin){
    //     const correct = document.getElementById('matched');
    //  correct.style.display= 'block';
    //  const missMatch = document.getElementById('missMatched');
    //  missMatch.style.display = 'none';
    displayMatchResults('block', 'none');
       
         
     }else{
        displayMatchResults('none', 'block');
         
     }
 }
 function displayMatchResults( matchedStatus, missMatchStatus){
    const correct = document.getElementById('matched');
     correct.style.display= matchedStatus;
     const missMatch = document.getElementById('missMatched');
     missMatch.style.display = missMatchStatus;
         
 }
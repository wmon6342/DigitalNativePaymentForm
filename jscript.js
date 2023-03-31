/*let cardNumber= [7,9,9,2,7,3,9,8,7,1,3];*/

function luHN(array) {
let luhnArray = [];
let count = 0;
for(i = 0; i < array.length; i++) {
/* this part is to cycle through the values of the array */
if(i % 2 !== 0) {
/* for every second value (zero-index) */
array[i] *= 2;
/*double the value*/
luhnArray.push(array[i]);
/*put the value into luhnArray*/
} else {
luhnArray.push(array[i]);
/*just put the value into luhnArray*/
}
}
console.log(luhnArray);
/*if one part of luhnArray > 9, split the number into two */
for(i = 0; i < luhnArray.length; i++) {
if(luhnArray[i] > 9) {
/* convert to a string */
let num = String(luhnArray[i]);
/* delete original number*/
luhnArray.splice(i, 1);
/*split the string*/
let splitNumber = num.split('');
/* put back into luhnArray*/
for(k = 0; k < splitNumber.length; k++) {
luhnArray.splice(i, 0, splitNumber[k]);
}
}
}
for(j = 0; j < luhnArray.length; j++) {
/* I need every number added onto each other */
count += Number(luhnArray[j]);
}
if(count % 10 === 0 && count !== 0) {
return true;
} else {
console.log(count);
return false;
}
}

function stringArrayConvert(x) {
    /* split the string */
    let y = x.split('');
    return y;
}

/*luHN(cardNumber);*/

const redgreenbtn = document.getElementById('redgreen');
const submit = document.getElementById('sub');
const form = document.getElementById('form');
const cardnumber = document.getElementById('cardnumber');


redgreenbtn.addEventListener('click', (event) => {
    event.preventDefault();
    if(document.getElementById('form').style.backgroundColor = 'rgb(137, 200, 46)') {
        document.getElementById('form').style.backgroundColor = 'white';
        redgreenbtn.textContent = 'Sorted !';
    }
});

submit.addEventListener('click', (event) => {
    let arrayLUHN = stringArrayConvert(cardnumber.value);
    let resultLUHN = luHN(arrayLUHN);
    if(resultLUHN === false) {
        event.preventDefault();
        cardnumber.value = 'LUHN algorithm darling!'
    }
});

/*  */
/*  */
/*  */
/*  */
/*  */

const error = cardnumber.getElementsByClassName('error')[0];














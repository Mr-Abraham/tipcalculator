console.log('hello world')
 
const bill = document.getElementById('bill');
const peoples = document.getElementById('peoples');
const tipbtns = document.querySelectorAll('.tipbtn');
const tipAmountPerPerson = document.getElementById('tipAmountPerPerson');
const totalPerPerson = document.getElementById('totalPerPerson')

let btnvalue,tipAmount,totalBill,tipPerPerson;

tipbtns.forEach((btns)=>{
 btns.addEventListener('click',()=>{
btnvalue = parseFloat(btns.innerHTML) /100;
tipAmount = parseFloat(bill.value) * btnvalue;
totalBill =parseFloat(bill.value) + tipAmount; 
tipPerPerson = parseFloat(tipAmount) / parseFloat(peoples.value);
tipAmountPerPerson.innerText = tipPerPerson;
totalPerPerson.innerText = parseFloat(totalBill) / parseFloat(peoples.value);
 });
});

const reset = () =>{
    bill.value = 0;
    peoples.value = 0;
    tipAmountPerPerson.innerText = '$0.00';
totalPerPerson.innerText = '$0.00';
}
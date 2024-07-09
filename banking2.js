let depositBtn = document.getElementById('deposit-btn')
depositBtn.addEventListener('click', function(){
// alert('working')
let depositInput = document.getElementById('deposit-input').value
if(depositInput == ''){
    alert('Please Enter the Deposit Amount')
}  
else{ 
alert(depositInput)}
}
)

let withdrawBtn = document.getElementById('withdraw-btn')
withdrawBtn.addEventListener('click', function(){
// alert('working')
let withdrawInput = document.getElementById('withdraw-input').value
if(withdrawInput == ''){
    alert('Please Enter the Withdrawal Amount')
}  
else{ 
alert(withdrawInput)}
}
)
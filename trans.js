let Btn = document.querySelector('.buttonSave')
Btn.addEventListener("click", transactions)

function transactions(e){
    // alert("o ti click")

    let type = document.getElementById('type').value 
    let name = document.getElementById('name').value 
    let amount = document.getElementById('amount').value 
        amount = parseFloat(amount).toFixed(2)
        // console.log(type,name,amount)
       
       if(type== "chooseOne" && name === '' && amount== '' ){
        alert("Please fill all the empty spaces")
       }
              
        e.preventDefault();
}
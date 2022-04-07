document.getElementById('calculate-button').addEventListener('click',function(){
    const alartFliled = document.getElementById('alert');
    // food 
    const foodField = document.getElementById('food-input')
    const foodText = foodField.value;
    const foodMmount = parseInt(foodText);
        // ERROR CHECK 
        if((foodText >= 'a' && foodText <='z') || ( foodText >= 'A' && foodText<= 'Z') ){
            alartFliled.innerText='Your input will be number';
            
        }
        //NEGATIVE ERROR CHECK 
        if(foodText<0){
            alartFliled.innerText='Your input will be positive number';
        }
    // rent 
    const rentField = document.getElementById('rent-input')
    const rentText = rentField.value;
    const rentMmount = parseInt(rentText);
    // ERROR CHECK 
    if((rentText >= 'a' && rentText <='z') || ( rentText >= 'A' && rentText<= 'Z') ){
        alartFliled.innerText='Your input will be number';
        
    }
    //NEGATIVE ERROR CHECK 
    if(rentText<0){
        alartFliled.innerText='Your input will be positive number';
    }
    // clothes 
    const clothesField = document.getElementById('clothes-input')
    const clothesText = clothesField.value;
    const clothesAmount = parseInt(clothesText);
        // ERROR CHECK 
        if((clothesText >= 'a' && clothesText <='z') || ( clothesText >= 'A' && clothesText<= 'Z') ){
            alartFliled.innerText='Your input will be number';
            
        }
        //NEGATIVE ERROR CHECK 
        if(clothesText<0){
            alartFliled.innerText='Your input will be positive number';
        }

        // income 
    const incomeField = document.getElementById('income')
    const incomeText = incomeField.value;
        // ERROR CHECK 
        if((incomeText >= 'a' && incomeText <='z') || ( incomeText >= 'A' && incomeText<= 'Z') ){
            alartFliled.innerText='Your input will be number';
            
        }
        //NEGATIVE ERROR CHECK 
        if(incomeText<0){
            alartFliled.innerText='Your input will be positive number';
        }
    const incomeAmount = parseInt(incomeText);

    // Total Expence 

    const totalExpance = foodMmount + rentMmount + clothesAmount;
    
    // get expanse field 
    const expanse = document.getElementById('expenses');
    if(totalExpance > incomeText){
        expanse.innerText = 'You expence gatter than income'; 
    }
    else{
        expanse.innerText = totalExpance;

    }

    

    //balance
   const totalBalance = incomeAmount - totalExpance;
   const balanceField = document.getElementById('balance')
   if(totalBalance < 0){
    balanceField.innerText='Error';

   }
   else{
       // get balance field 
    
    balanceField.innerHTML=totalBalance;

   }

    

})

document.getElementById('save-button').addEventListener('click',function(){
    //    save  
const saveField = document.getElementById('save');
const saveText = saveField.value;
const saveAmount = parseFloat(saveText);
// income 
const incomeField = document.getElementById('income')
    const incomeText = incomeField.value;
    const incomeAmount = parseInt(incomeText);

    // saving amount 
    const saveingAmount = (incomeAmount * saveAmount) / 100;
    const savingFlied = document.getElementById('saving-amount');
    

    // savingFlied.innerText=saveingAmount;

//   remaing Balance 
const reamingBalance = document.getElementById('remaing -balance');
const balanceField = document.getElementById('balance');
const balanceText = balanceField.innerText;
const balanceAmount = parseInt(balanceText);
reamingBalance.innerText = balanceAmount - saveingAmount;


// saving error handaling

if(saveAmount > balanceAmount ){
    savingFlied.innerText='You hava not anough money to saving';
}
else{
    savingFlied.innerText=saveingAmount;
}
    




})
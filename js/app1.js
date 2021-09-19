// calculate Extra memory Cost 
function extraMemory(isExtra){
    const extraMemory = document.getElementById('extra-memory');
    if(isExtra == true){
        extraMemory.innerText = 0;
    }else{
        extraMemory.innerText = 100;
    }
    calculateTotal();
};
document.getElementById('8gb-memory').addEventListener('click', ()=>{
    extraMemory(true)
});
document.getElementById('16gb-memory').addEventListener('click', ()=>{
    extraMemory(false)
});

// calculate Extra Storage Cost 
function calculateExtraSotrage(price){
    const extraStorage = document.getElementById('extra-storage');
    extraStorage.innerText = price;
    calculateTotal();
}
document.getElementById('256gb-storage').addEventListener('click',()=>{
    calculateExtraSotrage(0)
});
document.getElementById('512gb-storage').addEventListener('click',()=>{
    const extraStorage = document.getElementById('extra-storage');
    calculateExtraSotrage(100)
});
document.getElementById('1tb-storage').addEventListener('click',()=>{
    const extraStorage = document.getElementById('extra-storage');
    calculateExtraSotrage(180)
});

// calculate Delivery Cost 
function calculateDelivery(isFree){
    const deliveyCost = document.getElementById('extra-delivery');
    if(isFree == true){
        deliveyCost.innerText = 0;
    }else{
        deliveyCost.innerText = 20;
    }
    calculateTotal();
}
document.getElementById('free-delivery').addEventListener('click' ,()=>{
    calculateDelivery(true)
});
document.getElementById('paid-delivery').addEventListener('click' ,()=>{
    calculateDelivery(false)
});

// calculate total Coat 

function shortFunc(product){
    const initialPrice = document.getElementById('extra-' + product);
    const initialPriceText = initialPrice.innerText;
    const initialPriceValue = parseInt(initialPriceText);
    return initialPriceValue;
}

function calculateTotal(){
    const initialPriceValue = shortFunc('price');
    const extraMemoryValue = shortFunc('memory');
    const extraStorageValue = shortFunc('storage');
    const deliveyCostValue = shortFunc('delivery');
    const totalPrice = initialPriceValue + extraMemoryValue + extraStorageValue + deliveyCostValue;
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('final-sum').innerText = totalPrice;
}


// apply promo code 
document.getElementById('promo-btn').addEventListener('click',()=>{
    const promoInput = document.getElementById('promo-input');
    const promoInputField = promoInput.value;
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceValue = parseInt(totalPriceText);
    let afterDiscount = document.getElementById('final-sum');
    const discountPrice = totalPriceValue - (totalPriceValue * 20 /100)
    if(promoInputField.toLowerCase() == 'stevekaku'.toLowerCase()){
        afterDiscount.innerText = discountPrice;
        document.getElementById('falid').style.display = 'none';
    }else{
        document.getElementById('falid').style.display = 'block';
    }
})
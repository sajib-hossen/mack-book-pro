
const memoryType = document.getElementById('extra-memory');
const storage = document.getElementById('extra-storage');
const deliveryField = document.getElementById('delivery');
const initialPrice = document.getElementById('initial-price');
const totalPrice = document.getElementById('total-price');

// memory event handler
function getMemoryPrice(isPrice){
    
    if(isPrice == true){
        memoryType.innerText = 0;
    }else{
        memoryType.innerText = 180;
    }
    calculateTotal()
}
document.getElementById('8gb-memory').addEventListener('click', function(){
    getMemoryPrice(true);
    
});
document.getElementById('16gb-memory').addEventListener('click', function(){
      getMemoryPrice(false);
});

// storage event handler

function getStorageValue(price){
    
    storage.innerText = price;
    calculateTotal()
    
};
document.getElementById('256gb-storage').addEventListener('click', function(){
    getStorageValue(0)
   
});
document.getElementById('512gb-storage').addEventListener('click', function(){
    getStorageValue(100)
});
document.getElementById('1tb-storage').addEventListener('click', function(){
    getStorageValue(180)
});

// delivery event handler

function getDeliveryValue(isFree){
    
    if(isFree == true){
        deliveryField.innerText = 0;
    }else{
        deliveryField.innerText = 20;
    }
    calculateTotal()
   
}
document.getElementById('free-delivery').addEventListener('click', function(){
    getDeliveryValue(true);
});
document.getElementById('paid-delivery').addEventListener('click', function(){
    getDeliveryValue(false);
});

// Count total price 
function calculateTotal(){
    const initialText  = initialPrice.innerText;
    const initialValue = parseFloat(initialText)
    const memoryText = memoryType.innerText;
    const memoryValue = parseFloat(memoryText);
    const storageText = storage.innerText;
    const storageValue = parseFloat(storageText);
    const deliveryText = deliveryField.innerText;
    const deliveryValue = parseFloat(deliveryText)

    const tottalValue =initialValue+ memoryValue + storageValue + deliveryValue;
    document.getElementById('final-sum').innerText = tottalValue ;
    document.getElementById('total-price').innerText = tottalValue;
}

// promo code event handeler

document.getElementById('promo-btn').addEventListener('click', function(){
    const promoField = document.getElementById('promo-input');
    const promoValu = promoField.value;
    const totalPricePro = document.getElementById('final-sum');
    const totalpriceprmoText = document.getElementById('total-price').innerText;
    let totalPricePromoValue = parseFloat(totalpriceprmoText);
    if(promoValu == 'stevekaku'){
        totalPricePromoValue =  totalPricePromoValue - (totalPricePromoValue * 0.20)
        totalPricePro.innerText = totalPricePromoValue;
    }
    
})
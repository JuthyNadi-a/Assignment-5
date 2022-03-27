//-------------------MEMORY---------------------
function baseMemoryPrice(){
    // initial memory cost
    let initialMemory = document.getElementById("extraMemoryCost").innerText;
    initialMemory = 0;
    document.getElementById("extraMemoryCost").innerText = initialMemory;
    let storage512Cost = document.getElementById("storageCost").innerText;
    let totalDeliveryCost = document.getElementById("deliveryCharge").innerText;
    // initial base price
    let basePrice = document.getElementById("bestPrice").innerText;
    basePrice = 1299 + parseInt(storage512Cost) + parseInt(totalDeliveryCost);
    document.getElementById("bestPrice").innerText = basePrice;
    // initial total price
    let initialTotalPrice = document.getElementById("totalPrice").innerText;
    initialTotalPrice = 1299 + parseInt(storage512Cost) + parseInt(totalDeliveryCost);
    document.getElementById("totalPrice").innerText = initialTotalPrice;
    document.getElementById("discountPrice").innerText = initialTotalPrice;
}

function memoryPrice(){
    // extra memory cost
    let extraMemoryCost = document.getElementById("extraMemoryCost").innerText;
    extraMemoryCost = 180;
    document.getElementById("extraMemoryCost").innerText = extraMemoryCost;
    let storage512Cost = document.getElementById("storageCost").innerText;
    let totalDeliveryCost = document.getElementById("deliveryCharge").innerText;
    //best price increase
    let finalBestPrice = document.getElementById("bestPrice").innerText;
    finalBestPrice = 1299 + parseInt(extraMemoryCost) + parseInt(storage512Cost) + parseInt(totalDeliveryCost);
    // let finalBestPrice = parseInt(bestPrice) + extraMemoryCost;
    document.getElementById("bestPrice").innerText = finalBestPrice;
    //total price increase
    let price = document.getElementById("totalPrice").innerText;
    price = 1299 + parseInt(extraMemoryCost) + parseInt(storage512Cost) + parseInt(totalDeliveryCost);
    // let totalPrice = parseInt(price) + extraMemoryCost;
    document.getElementById("totalPrice").innerText = price;
    document.getElementById("discountPrice").innerText = price;
}
// ------------------STORAGE------------------------
function baseStorage(){
    // initial storage cost
    let initialStorage = document.getElementById("storageCost").innerText;
    initialStorage = 0;
    document.getElementById("storageCost").innerText = initialStorage;
    let extraMemoryCost = document.getElementById("extraMemoryCost").innerText;
    let totalDeliveryCost = document.getElementById("deliveryCharge").innerText;
    // initial base price
    let basePrice = document.getElementById("bestPrice").innerText;
    basePrice = 1299 + parseInt(extraMemoryCost) + parseInt(totalDeliveryCost);
    document.getElementById("bestPrice").innerText = basePrice;
    // initial total price
    let initialTotalPrice = document.getElementById("totalPrice").innerText;
    initialTotalPrice = 1299 + parseInt(extraMemoryCost) + parseInt(totalDeliveryCost);
    document.getElementById("totalPrice").innerText = initialTotalPrice;
    document.getElementById("discountPrice").innerText = initialTotalPrice;
}
// Additional storage

function storage512(){
    // extra storage cost
    let storage512Cost = document.getElementById("storageCost").innerText;
    storage512Cost = 100;
    document.getElementById("storageCost").innerText = storage512Cost;
    let extraMemoryCost = document.getElementById("extraMemoryCost").innerText;
    let totalDeliveryCost = document.getElementById("deliveryCharge").innerText;
    //best price increase
    let finalBestPrice = document.getElementById("bestPrice").innerText;
    finalBestPrice = 1299 + parseInt(storage512Cost) + parseInt(extraMemoryCost) + parseInt(totalDeliveryCost);
    // finalBestPrice = parseInt(bestPrice) + storage512Cost;
    document.getElementById("bestPrice").innerText = finalBestPrice;
    //total price increase
    let totalPrice = document.getElementById("totalPrice").innerText;
    totalPrice = 1299 + parseInt(storage512Cost) + parseInt(extraMemoryCost) + parseInt(totalDeliveryCost);
    // let totalPrice = parseInt(price) + storage512Cost;
    document.getElementById("totalPrice").innerText = totalPrice;
    document.getElementById("discountPrice").innerText = totalPrice;
}
function storage1TB(){
    // extra storage cost
    let storage1TBCost = document.getElementById("storageCost").innerText;
    storage1TBCost = 180;
    document.getElementById("storageCost").innerText = storage1TBCost;
    let extraMemoryCost = document.getElementById("extraMemoryCost").innerText;
    let totalDeliveryCost = document.getElementById("deliveryCharge").innerText;
    //best price increase
    let finalBestPrice = document.getElementById("bestPrice").innerText;
    finalBestPrice = 1299 + parseInt(storage1TBCost) + parseInt(extraMemoryCost) + parseInt(totalDeliveryCost);
    // let finalBestPrice = parseInt(bestPrice) + storage1TBCost;
    document.getElementById("bestPrice").innerText = finalBestPrice;
    //total price increase
    let totalPrice = document.getElementById("totalPrice").innerText;
    totalPrice = 1299 + parseInt(storage1TBCost) + parseInt(extraMemoryCost) + parseInt(totalDeliveryCost);
    // let totalPrice = parseInt(price) + storage1TBCost;
    document.getElementById("totalPrice").innerText = totalPrice;
    document.getElementById("discountPrice").innerText = totalPrice;
}
//------------------DELIVERY---------------------
function deliveryFree(){
    // initial memory cost
    let freeDelivery = document.getElementById("deliveryCharge").innerText;
    freeDelivery = 0;
    document.getElementById("deliveryCharge").innerText = freeDelivery;
    let extraMemoryCost = document.getElementById("extraMemoryCost").innerText;
    let initialStorage = document.getElementById("storageCost").innerText;
    // initial base price
    let basePrice = document.getElementById("bestPrice").innerText;
    basePrice = 1299 + parseInt(extraMemoryCost) + parseInt(initialStorage);
    document.getElementById("bestPrice").innerText = basePrice;
    // initial total price
    let initialTotalPrice = document.getElementById("totalPrice").innerText;
    initialTotalPrice = 1299 + parseInt(extraMemoryCost) + parseInt(initialStorage);
    document.getElementById("totalPrice").innerText = initialTotalPrice;
    document.getElementById("discountPrice").innerText = initialTotalPrice;
}
function deliveryCost(){
    // extra memory cost
    let totalDeliveryCost = document.getElementById("deliveryCharge").innerText;
    totalDeliveryCost = 20;
    document.getElementById("deliveryCharge").innerText = totalDeliveryCost;
    let extraMemoryCost = document.getElementById("extraMemoryCost").innerText;
    let initialStorage = document.getElementById("storageCost").innerText;
    //best price increase
    let finalBestPrice = document.getElementById("bestPrice").innerText;
    finalBestPrice = 1299 + parseInt(totalDeliveryCost) + parseInt(extraMemoryCost) + parseInt(initialStorage);
    // let finalBestPrice = parseInt(bestPrice) + totalDeliveryCost;
    document.getElementById("bestPrice").innerText = finalBestPrice;
    //total price increase
    let totalPrice = document.getElementById("totalPrice").innerText;
    totalPrice = 1299 + parseInt(totalDeliveryCost) + parseInt(extraMemoryCost) + parseInt(initialStorage);
    // let totalPrice = parseInt(price) + totalDeliveryCost;
    document.getElementById("totalPrice").innerText = totalPrice;
    document.getElementById("discountPrice").innerText = totalPrice;
}
// ----------------------------PROMO CODE----------------------
function addPromoCode() {
    // get code
    const codeInput = document.getElementById('code-input').value;
    // check code
    if (codeInput == "stevekaku") {
        let finalPrice = document.getElementById("totalPrice").innerText;
        //  total price update
        let discountPrice = parseInt(finalPrice) - (parseInt(finalPrice)*(20/100));
        document.getElementById("discountPrice").innerText = discountPrice;
    }
}
function calculateTotal() {
    let adultQuantity = document.getElementById("adultQuantity").value;
    let childQuantity = document.getElementById("childQuantity").value;
    let total = 0;

    for (let i = 0; 1==1; i++) {
        if (adultQuantity >= 2 && childQuantity >= 2) {
            total += 100;
            adultQuantity -= 2;
            childQuantity -= 2;
        }else{
            total += adultQuantity*40;
            total += childQuantity*20;
            break;
        }
    }


    
    document.getElementById("totalPrice").textContent = "Samlet Pris: " + total + ",- kr.";
}
    function calculateTotal() {
       
        var adultQuantity = document.getElementById("adultQuantity").value;
        var childQuantity = document.getElementById("childQuantity").value;

        
        if (adultQuantity >= 2 && childQuantity >= 2) {
            const kombo = 100;
            var total = 100;
        } else {
            
            var totalAdult = adultQuantity * 40; 
            var totalChild = childQuantity * 20; 
        
            var total = totalAdult + totalChild;
        }

        
        document.getElementById("totalPrice").textContent = "Total Pris: $" + total.toFixed(2);
    }

function CalculateGST(price){
    return price * 0.18;
}
document.getElementById("btn").addEventListener("click", 
    function() {
        var price = document .getElementById("price").valuec;
        let gst = CalculateGST(price);
        document.getElementById("result").innerText = "Total Price: " + (Number(price) + Number(gst));
    });
    
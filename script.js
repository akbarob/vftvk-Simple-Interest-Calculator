
function compute(){
    var years = document.getElementById("years").value;
    var amount = document.getElementById("principal").value;
    
    
    var rate = document.getElementById("rate").value;
    var d = new Date() ;
    v = parseInt(d.getFullYear()) + parseInt(years);
    result = (years*amount*rate)/100;
    newAmount = parseInt(amount) + parseInt(result);
    console.log(newAmount);
    

    if (document.getElementById("bb").onclick) 
    
    if (amount == ""){
        alert("Please fill the amount field.");
        document.getElementById("amount").focus();
        return false;
    } else if (parseInt(amount) <= 0) {
        alert("Please fill out the amount field with a number higher than zero.");
        document.getElementById("amount").focus();
        return false;
    } else if (parseInt(rate) == 0) {
        alert("Please fill out the rate field with a number higher than zero.");
        document.getElementById("rate").focus();
        return false;
    }
    
{amount.style.backgroundColor = "yellow";
    document.getElementById("akbar").innerHTML = "If you deposit" + " " + amount + "<br>" +"at an interest rate of" +" "+ rate +"<br>"+ "You will recive an amount of" +" "+newAmount+ "" +"<br>" + "in the year" +" "+ v + "."
   
    
}
}
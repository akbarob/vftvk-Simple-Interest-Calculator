function load(){
    var q = prompt("Please Enter Your Name")
    document.getElementById("name").innerHTML = "Hello" +" "+ q;
    if (q === null || q == "" ){
        document.getElementById("name").style.display ="none";
    }
}




function compute(){
    var amount = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    
    if (amount == "" || amount <= 0){
        alert("Please fill the amount field.");
        document.getElementById("principal").focus();
        return;
    }
    else if (rate =="0"|| parseInt(rate) <= 0)
     {
        alert("Please fill out the rate field with a number higher than zero.");
        document.getElementById("rate").focus();
        return;
    }
    var years = document.getElementById("years").value;
     var d = new Date() ;
    v = parseInt(d.getFullYear()) + parseInt(years);
    result = (years*amount*rate)/100;
    newAmount = parseInt(amount) + parseInt(result);
    console.log(newAmount);
    
    {
    document.getElementById("akbar").innerHTML = "If you deposit" + " " + "<span class='yellow'>" + amount + "</span>" + "," + "<br>" + "at an interest rate of" + " " + "<span class='yellow'>" + rate +"%." + "</span>"+"<br>" + "You will recieve an amount of" + " " + "<span class='yellow'>"+newAmount+ "</span>" + "," + "<br>" + "in the year" + " " + "<span class='yellow'>"+ v + "</span>" +"."
   
    
}
}
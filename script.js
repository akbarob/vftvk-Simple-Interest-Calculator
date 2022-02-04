function load(){
    var q = prompt("What do you like to be called?")
   
if(q.value == "null"){
    document.getElementById("name").style.display = "none";
}
document.getElementById("name").innerHTML = "hello" +" "+ q ; 

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
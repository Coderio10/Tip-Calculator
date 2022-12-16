// Tip Calculation Function
function CalTip(){ 
    // Defining bill
    let bill        = document.getElementById("bill").value;
    // Number of People
    let No_ppl      = document.getElementById("no_ppl").value; 
    if (No_ppl == ''){
        No_ppl  == '0';
    }else if( No_ppl == "0" ){
        let noppl  =  document.querySelector(".no_ppl");
        noppl.classList.add("error");
        document.getElementById("error").innerHTML="Can't be zero";
    }else{
        let noppl  =  document.querySelector(".no_ppl");
        document.getElementById("error").innerHTML="";
        noppl.classList.remove("error");

        // Chaning No_ppl to a float 
        No_ppl          = parseInt(No_ppl);
        // Defining bill per people
        let Result1     = bill / No_ppl;
            // Validating Bill Per People
            if (isNaN(Result1)== true){
                Result1 = "0";
            } 
        // Defining custom bill percent
        let TipPercent  = document.getElementById('TipPercent').value;
        // Defining Tip Amount
        let TipAmount   = Result1 * TipPercent / 100;
        TipAmount       = parseFloat(TipAmount).toFixed(2); 
        document.getElementById("Tipresult").innerHTML= "$" + TipAmount;
        // Defining Total and changing in to float 
        TipAmount       = parseFloat(TipAmount);
        Result1         = parseFloat(Result1);
        // Defining total
        let total       = TipAmount + Result1;
        total           = parseFloat(total).toFixed(2);
        document.getElementById("total").innerHTML= "$" + total;
    }      
    
}

// function to reset input
function reset(){
    // bill input
    document.getElementById("bill").value=''
    // number of people input
    document.getElementById("no_ppl").value='';
    // tip percentage input
    document.getElementById('TipPercent').value='';
    document.getElementById("total").innerHTML='$0.00';
    document.getElementById("Tipresult").innerHTML= "$0.00";
}


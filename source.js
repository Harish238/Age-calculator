function age(){
    let d1 = document.getElementById("date").value;
    let m1 = document.getElementById("month").value;
    let y1 = document.getElementById("year").value;
    if(isNaN(d1)||d1<1||d1>31){
        alert("Please enter a valid date (1-31).");
        document.getElementById("date").focus();
        return;
    }
    if(isNaN(m1)||m1<1||m1>12){
        alert("Please enter a valid date (1-12).");
        document.getElementById("month").focus();
        return;
    }
    if(isNaN(y1)||y1.length!==4){
        alert("Please enter a valid date (4-digit format).");
        document.getElementById("year").focus();
        return;
    }

    let date = new Date();
    let d2 = date.getDate();
    let m2 = 1+date.getMonth();
    let y2 = date.getFullYear();
    let month = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(d1>d2){
        d2 = d2+month[m2-1];
        m2=m2-1;
    }
    if(m1>m2){
        m2 = m2+1;
        y2 = y2-1;
    }
    let d = d2-d1;
    let m = m2-m1;
    let y = y2-y1;
    
    document.getElementById("age").innerHTML = "Your Age is"+" "+ y +"Years"+" "+ m +"Months"+" "+ d +"Days";
}
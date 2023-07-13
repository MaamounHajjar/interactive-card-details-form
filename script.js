function reflectName() {
    n = document.getElementById("name").value
    if (n != "") {
        document.getElementById("reflect-name").innerText = n
    }
    else {
        document.getElementById("reflect-name").innerText = "Jane Appleseed"
    }
    
}

function reflectCcn() {
    n = document.getElementById("ccn").value
    regex = /^[0-9]{4}[ ]{1}[0-9]{4}[ ]{1}[0-9]{4}[ ]{1}[0-9]{4}$/
    if (n == "" || !regex.test(n)) {
        document.getElementById("reflect-ccn").innerText = n
        document.getElementById("ccn-error").innerText = "Wrong format, nubmer only"
        ccn.style.borderColor = "red";
    }
    else {
        document.getElementById("reflect-ccn").innerText = n
        document.getElementById("ccn-error").innerText = ""
        ccn.style.borderColor = "black";
    }
}

function reflectMM() {
    n = document.getElementById("MM").value
    if (n == "" || isNaN(n) || (n < 1 || n > 12)) {
        document.getElementById("info-error").innerText = "invalid"
        MM.style.borderColor = "red";
        document.getElementById("reflect-MM").innerText = "00"
    }
        
    else {
        MM.style.borderColor = "black";
        document.getElementById("reflect-MM").innerText = n
        document.getElementById("info-error").innerText = ""
    }
}

function reflectYY() {
    n = document.getElementById("YY").value
    if (n == "" || isNaN(n) || (n < 23|| n > 99)) {
        document.getElementById("info-error").innerText = "invalid"
        YY.style.borderColor = "red";
        document.getElementById("reflect-YY").innerText = "00"
    }   
    else {
        document.getElementById("reflect-YY").innerText = n
        document.getElementById("info-error").innerText = ""
        YY.style.borderColor = "black";
    }
}

function reflectCvc() {
    n = document.getElementById("Cvc").value
    if (n == "" || isNaN(n) || (n < 100 || n > 999)) {
        document.getElementById("info-error").innerHTML = "<span style='padding-left: 155px;'>invalid"
        Cvc.style.borderColor = "red";
        document.getElementById("reflect-Cvc").innerText = "000"
    }
        
    else {
        document.getElementById("reflect-Cvc").innerText = n
        document.getElementById("info-error").innerText = ""
        Cvc.style.borderColor = "black";
    }
}

function verify() {
    a = document.getElementById("reflect-name").textContent
    b = document.getElementById("reflect-ccn").textContent 
    c = document.getElementById("reflect-Cvc").textContent 
    d = document.getElementById("reflect-MM").textContent 
    e = document.getElementById("reflect-YY").textContent 
    if (a != "Jane Appleseed" && b != "0000 0000 0000 0000" && c != "000" && d != "00" && e != "00") {
        localStorage.setItem("cardholder",a)
        localStorage.setItem("ccn",b)
        localStorage.setItem("Cvc",c)
        localStorage.setItem("MM",d)
        localStorage.setItem("YY",e)
    }
    else {
        reflectName()
        reflectCcn()
        reflectMM()
        reflectYY()
        reflectCvc()
        return false
    }
}


function loadCardInfo() {
    document.getElementById("reflect-name").textContent = localStorage.getItem("cardholder");
    document.getElementById("reflect-ccn").textContent = localStorage.getItem("ccn");
    document.getElementById("reflect-Cvc").textContent = localStorage.getItem("Cvc");
    document.getElementById("reflect-MM").textContent = localStorage.getItem("MM");
    document.getElementById("reflect-YY").textContent = localStorage.getItem("YY");
}

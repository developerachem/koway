$('.counter').counterUp({
    delay: 10,
    time: 7000
});

function myFunction() {
    var pricingchk = document.getElementById("pricingchk");
    var mainDib = document.getElementById("mainDib");
    var mainDib2 = document.getElementById("mainDib2");


    if (pricingchk.checked == true) {
        mainDib.style.display = "block";
    }
    else {mainDib.style.display = "none";}

    if (pricingchk.checked == false) {
        mainDib2.style.display = "block";
    }
    else {mainDib2.style.display = "none";}
     
}
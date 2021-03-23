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
    } else {
        mainDib.style.display = "none";
    }

    if (pricingchk.checked == false) {
        mainDib2.style.display = "block";
    } else {
        mainDib2.style.display = "none";
    }

}
var btn = $('#topBtn');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});

$(document).ready(() => {
    new WOW().init();
    $('#btn_form').click(function () {

        $('.error-input').hide();
        let name = $('#name').val();
        let adr = $('#address').val();
        let tel = $('#telephone').val();
        let loader = $('#loader');
        let order = $('#order-form > div > input');
        let orderForm = $('#order-form');
        let orderMessage = $('#order-message');
        let success = 0;

        for (let i = 0; i < order.length; i++) {
            $(order[i]).css('border-color', 'rgb(185, 145, 80)');
            if (!$(order[i]).val()) {
                $(order[i]).siblings('.error-input').show();
                $(order[i]).css('border-color', 'red');
            } else {
                success += 1;
            }
        }

        if (success === 3) {
            loader.css('display', 'flex');
            $.ajax({
                method: "POST",
                url: "mail.php",
                data: {name: name, location: adr, telephone: tel}
            })
                .done(function (message) {
                    if (message.success === 1) {
                        setTimeout(loader.hide(), 75);
                        orderForm.css('display', 'none');
                        orderMessage.css('display', 'flex');
                    } else {
                        setTimeout(loader.hide(), 75);
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                    }

                });
        }
    });

    $('.cookie-close').click(function () {
        $('#cookie').hide();
        localStorage.setItem('cookieHide', '1');
    });

    document.getElementById('burger').onclick = function () {
        document.getElementById('menu').classList.add('open');
    };

    document.querySelectorAll('#menu > *').forEach((item) => {
        item.onclick = () => {
            document.getElementById('menu').classList.remove('open');
        }
    })
});
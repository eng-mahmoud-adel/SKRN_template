$(function() {
    // changing background for cards
    $('.card').on('click', function() {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        // toggle the check-true div
        // $('.card .card-body .check-true').addClass('active');
        // $('.card .card-body .check-true i').addClass('active');
    });


    // changing check-true at payment gateway section
    $('.payment .paypal button').on('click', function () {
        if($('.payment .paypal button .check-true i').hasClass('active')) {
            $('.payment .paypal button .check-true i').css('display', 'inline');
            $('.payment .bank button .check-true i').css('display', 'none');
            $('.payment .bank button .check-true i').removeClass('active');
        } else {
            $('.payment .paypal button .check-true i').addClass('active');
            $('.payment .paypal button .check-true i').css('display', 'inline');
            $('.payment .bank button .check-true i').css('display', 'none');
            $('.payment .bank button .check-true i').removeClass('active');
        }
    });

    $('.payment .bank button').on('click', function () {
        if($('.payment .bank button .check-true i').hasClass('active')) {
            $('.payment .bank button .check-true i').css('display', 'inline');
            $('.payment .paypal button .check-true i').css('display', 'none');
            $('.payment .paypal button .check-true i').removeClass('active');
        } else {
            $('.payment .bank button .check-true i').addClass('active');
            $('.payment .bank button .check-true i').css('display', 'inline');
            $('.payment .paypal button .check-true i').css('display', 'none');
            $('.payment .paypal button .check-true i').removeClass('active');
        }
    });

    // toggle the pricing plan section
    $('.pricing-plan .next-step button').on('click', function () {
        $('.pricing-plan').fadeOut(700);
        $('.registeration-form').fadeIn(1000);
    });

    $('.registeration-form .back button').on('click', function () {
        $('.registeration-form').fadeOut(700);
        $('.pricing-plan').fadeIn(1000);
    });
    
})
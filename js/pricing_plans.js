$(function() {
    // changing background for cards
    $('.card').on('click', function() {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        // toggle the check-true div
        // $('.card .card-body .check-true').addClass('active');
        // $('.card .card-body .check-true i').addClass('active');
    });
    
})
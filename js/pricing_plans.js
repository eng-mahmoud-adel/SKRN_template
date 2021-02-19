$(function() {
    // changing background for cards at pricing plan section
    $('.card').on('click', function() {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        // toggle the check-true div at pricing plan section
        $('.card.active .card-body .card-title').each(function (index, element) {
            if($(element).text() == 'Free title') {
                if($('.card .card-body .check-true').hasClass('active') && $('.card .card-body .card-title').text() != 'Free title') {
                    $('.card .card-body .check-true').removeClass('active');
                    $('.card .card-body .check-true i').removeClass('active');
                }

                $('.card.active .card-body .check-true').addClass('active');
                $('.card.active .card-body .check-true i').addClass('active');
            } else if($(element).text() == 'Starter') {
                if($('.card .card-body .check-true').hasClass('active') && $('.card .card-body .card-title').text() != 'Starter') {
                    $('.card .card-body .check-true').removeClass('active');
                    $('.card .card-body .check-true i').removeClass('active');
                }

                $('.card.active .card-body .check-true').addClass('active');
                $('.card.active .card-body .check-true i').addClass('active');
            } else if($(element).text() == 'Premium') {
                if($('.card .card-body .check-true').hasClass('active') && $('.card .card-body .card-title').text() != 'Premium') {
                    $('.card .card-body .check-true').removeClass('active');
                    $('.card .card-body .check-true i').removeClass('active');
                }

                $('.card.active .card-body .check-true').addClass('active');
                $('.card.active .card-body .check-true i').addClass('active');
            }
        });
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

    // toggle the pricing plan section and registeration form
    $('.pricing-plan .next-step button').on('click', function () {
        $('.pricing-plan').fadeOut(700);
        $('.registeration-form').fadeIn(1000);
    });

    $('.registeration-form .back button').on('click', function () {
        $('.registeration-form').fadeOut(700);
        $('.pricing-plan').fadeIn(1000);
    });
    
});


// login form to send to the server
document.getElementById("form").addEventListener("submit", async function(event){
    let end_point = "/login";
    let loggedIn_user = {};

    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    loggedIn_user.username = username;
    loggedIn_user.password = password;
    
    // sending username and password from loggedIn_user object
    let data_sent = await fetch(`http://anyservice.imassoft.com/1907${end_point}`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "Content-Type"
        },
        body: JSON.stringify(loggedIn_user)
    });

    // retrieving data from server to check
    let data_get = await data_sent.json();

    // checking if there is a token or not
    if(data_get.token) {
        // alert("login success");
        window.location.href = `./dashboard.html?username=${data_get.data.username}`;
        localStorage.setItem('token', data_get.token);
    } else {
        alert("invalid username or password");
    }

});

// check if there is an authenticated user or not
document.getElementById('video_library').onclick = () => {
    if(!localStorage.getItem('token')) {
        alert('please login first');
    } else {
        window.location.href = `./dashboard.html?username=${loggedIn_user.username}`;
    }
}


// registeration form to send to the server
document.getElementById("register_form").addEventListener("submit", async function(event){
    let end_point = "/register";
    let registered_user = {};
    
    event.preventDefault();
    let username = document.getElementById("register_username").value;
    let first_name = document.getElementById("register_first_name").value;
    let last_name = document.getElementById("register_last_name").value;
    let password = document.getElementById("register_password").value;
    let email = document.getElementById("register_email").value;

    registered_user.username = username;
    registered_user.first_name = first_name;
    registered_user.last_name = last_name;
    registered_user.password = password;
    registered_user.email = email;
    
    // sending username and password from registered_user object
    let data_sent = await fetch(`http://anyservice.imassoft.com/1907${end_point}`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "Content-Type"
        },
        body: JSON.stringify(registered_user)
    });

    // retrieving data from server to check
    let data_get = await data_sent.json();
    if(!data_get.error) {
        alert("created account successfully");
        window.location.href = './index.html';
    } else {
        alert('username already exists please use another one');
    }
});
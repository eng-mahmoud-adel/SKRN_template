$(function(){
    $(".loading .sk-folding-cube").fadeOut(1000,function(){
        $(this).parent().fadeOut(1000,function(){
            $("body").css({"overflow":"auto"})
            $(this).remove()
        })
    var scrollButton = $(".scroll-up")
    $(window).scroll(function(){

        if($(this).scrollTop() >= 500){
            scrollButton.show(1000)
        }else{
            scrollButton.hide(1000)
        }
    })
    scrollButton.click(function(){
        $("html").animate({scrollTop:0},600)
    })


})})

let end_point = "/login";
let loggedIn_user = {};

// login form to send to the server
document.getElementById("form").addEventListener("submit", async function(event){
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    loggedIn_user.username = username;
    loggedIn_user.password = password;
    
    // sending username and password from loggedIn_user object
    let data_sent = await fetch(`https://cryptic-gorge-43148.herokuapp.com/http://anyservice.imassoft.com/1907${end_point}`, {
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
        loggedIn_user.token = localStorage.getItem('token');
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
let end_point = "/login";
let loggedIn_user = {};

document.getElementById("form").addEventListener("submit", async function(event){
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
        alert("login success");
    } else {
        alert(data_get.error);
    }

});
// assigning name for the logged in user
var urlParams = new URLSearchParams(window.location.search);
let id=urlParams.get('id'); 
let username = document.getElementById('user-name');
username.textContent = 'admin';
document.getElementById('logo').onclick = () => window.location.href = `./dashboard.html?username=admin`;
document.getElementById('tv').onclick = () => window.location.href = `./dashboard.html?username=admin`;
document.getElementById('movies').onclick = () => window.location.href = `./dashboard.html?username=admin`;
document.getElementById('new').onclick = () => window.location.href = `./dashboard.html?username=admin`;
document.getElementById('soon').onclick = () => window.location.href = `./dashboard.html?username=admin`;
document.getElementById('news').onclick = () => window.location.href = `./dashboard.html?username=admin`;

async function addvideo(){
    let addObj = {
        video_link : document.getElementById("video_link").value,
        title: document.getElementById("title").value,
        video_image :document.getElementById("video_image").value,
        genre : document.getElementById("genre").value,
        reviews:[]
    }
    console.log(addObj)
    let httpResponse = await fetch("http://anyservice.imassoft.com/1907/videos/",{
    method : "POST",
    headers : {
      'Content-type':'application/json',
      'token' : localStorage.getItem('token'),
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "Content-Type"
    },
    body:JSON.stringify(addObj)
  });
        let jsonObj = await httpResponse.json();
        console.log(jsonObj)
        console.log(addObj)
  
  window.location.href = `./dashboard.html?username=${username}`;
}
 
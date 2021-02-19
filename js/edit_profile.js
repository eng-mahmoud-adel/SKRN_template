// assigning name for the logged in user
var urlParams = new URLSearchParams(window.location.search);
let id=urlParams.get('id'); 
let username = urlParams.get('username');
document.getElementById('user-name').textContent = username;
document.getElementById('logo').onclick = () => window.location.href = `./dashboard.html?username=${username}`;
document.getElementById('edit').onclick = () => window.location.href = `./edit_profile.html?username=${username}`;
document.getElementById('tv').onclick = () => window.location.href = `./dashboard.html?username=${username}`;
document.getElementById('movies').onclick = () => window.location.href = `./dashboard.html?username=${username}`;
document.getElementById('new').onclick = () => window.location.href = `./dashboard.html?username=${username}`;
document.getElementById('soon').onclick = () => window.location.href = `./dashboard.html?username=${username}`;
document.getElementById('news').onclick = () => window.location.href = `./dashboard.html?username=${username}`;

if(username != 'admin') {
  document.getElementById('add').style.display = 'none';
} else {
  document.getElementById('add').onclick = () => window.location.href = 'add.html';
}
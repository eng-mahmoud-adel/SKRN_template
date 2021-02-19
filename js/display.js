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
document.getElementById('edit_btn').onclick = () => window.location.href = `./edit.html?id=${id}`;

if(username != 'admin') {
  document.getElementById('add').style.display = 'none';
  document.getElementById('edit_btn').style.display = 'none';
} else {
  document.getElementById('add').onclick = () => window.location.href = 'add.html';
}


const req = async () => {
    const response = await fetch(
      `http://anyservice.imassoft.com/1907/videos/${id}`,
      {
        method: "GET",
        headers: { token: window.localStorage.getItem('token') },
      }
    );
    const json = await response.json();
    console.log(json)
    $('iframe').attr('src',json.data.video_link)
    $('.card-title').text(json.data.title)
    $('.card-img').attr('src',json.data.video_image)
    $('.card-text').text('movie description')

    $('.movie_title').text(json.data.title);
  };

  
  req();
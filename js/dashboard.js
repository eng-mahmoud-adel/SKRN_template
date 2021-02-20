// assigning name for the logged in user
let urlParams = new URLSearchParams(window.location.search);
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

let movies;
const req = async () => {
  const response = await fetch("https://cryptic-gorge-43148.herokuapp.com/http://anyservice.imassoft.com/1907/videos", {
    method: "GET",
    headers: { token:localStorage.getItem('token') },
  });
  const json = await response.json();
  console.log(json)

  for (let i = 0; i < json.length; i++) {
    $(".movies .row")
      .append(`<div class="card col-xl-3 col-lg-3 col-md-4 col-sm-6" id="${json[i].id}"
                  alt="Card image cap"
                  data-genre='${json[i].genre}' >
                <img
                  class="card-img-top"
                  src="${json[i].video_image}"
                />
              <div class="card-body">
                <h5 class="card-title">${json[i].title}</h5>
              </div>
            </div>`);
  }
  $(".card").click(function () {
    var elmId = $(this).attr("id");
    console.log(elmId);
    window.location.href = `./display.html?id=${elmId}&username=${username}`;
  });
};
req();

$('.genre-card').click(function(){
 let genre=$(this).find("img").attr('alt')
 $(this).siblings().removeClass('genre-card-active')
 $(this).addClass('genre-card-active')
 $('.movies .row').children('div').each(function(){
   if($(this).attr('data-genre')!=genre && genre!='All'){
    $(this).css('display','none')
   }
   else{
    $(this).css('display','block')
   }
 })

})
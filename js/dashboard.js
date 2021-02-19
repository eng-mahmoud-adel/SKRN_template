// assigning name for the logged in user
let urlParams = new URLSearchParams(window.location.search);
let username = urlParams.get('username');
document.getElementById('user-name').textContent = username;

if(username != 'admin') {
  document.getElementById('add').style.display = 'none';
} else {
  document.getElementById('add').onclick = () => window.location.href = 'add.html';
}

let movies;
const req = async () => {
  const response = await fetch("http://anyservice.imassoft.com/1907/videos", {
    method: "GET",
    headers: { token:localStorage.getItem('token') },
  });
  const json = await response.json();
  console.log(json)

  for (let i = 0; i < json.length; i++) {
    $(".movies .row")
      .append(`<div class="card col-xl-3 col-lg-4 col-md-6 col-sm-12" id="${json[i].id}"
                  alt="Card image cap"
                  data-genre='${json[i].genre}' >
                <img
                  class="card-img-top"
                  src="${json[i].img}"
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
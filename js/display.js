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

let movie_data;
const req = async () => {
    const response = await fetch(
      `http://anyservice.imassoft.com/1907/videos/${id}`,
      {
        method: "GET",
        headers: { token: window.localStorage.getItem('token') },
      }
    );
    const json = await response.json();
    movie_data=json
    console.log(json)
    $('iframe').attr('src',json.data.video_link)
    $('.card-title').text(json.data.title)
    $('.card-img').attr('src',json.data.video_image)
    $('.card-text').text('movie description')

    $('.movie_title').text(json.data.title);
    for(let i in json.data.reviews){
      let stars=json.data.reviews[i].stars
      $('#reviews').append(`<div class="review-card"><h5 class="review-name" data-stars=${stars}>${json.data.reviews[i].username} 
      <small>${json.data.reviews[i].date}</small>
      <i class="fas fa-star" aria-hidden="true" id="s1"></i>
                        <i class="fas fa-star" aria-hidden="true" id="s2"></i>
                        <i class="fas fa-star" aria-hidden="true" id="s3"></i>
                        <i class="fas fa-star" aria-hidden="true" id="s4"></i>
                        <i class="fas fa-star" aria-hidden="true" id="s5"></i>
      </h5>             
      <p class="review-text" </div>${json.data.reviews[i].review}</p>`)
        }
      $('.review-name').each(function(){
        stars=$(this).attr('data-stars')
        $(this).children(`i:lt(${stars})`).addClass('highlighted ')
      })
      }
  
  req();

$(function(){
  $("#s1").on("click", function(){
    $(".fa-star").css({"color":"black"})
    $("#s1").css({"color":"yellow"})
  })
  $("#s2").on("click", function(){
    $(".fa-star").css({"color":"black"})
    $("#s1,#s2").css({"color":"yellow"})
  })
  $("#s3").on("click", function(){
    $(".fa-star").css({"color":"black"})
    $("#s1, #s2, #s3").css({"color":"yellow"})
  })
  $("#s4").on("click", function(){
    $(".fa-star").css({"color":"black"})
    $("#s1, #s2, #s3, #s4").css({"color":"yellow"})
  })
  $("#s5").on("click", function(){
    $(".fa-star").css({"color":"black"})
    $(".fa-star").css({"color":"yellow"})
  })

})



async function addRate(e){
  e.preventDefault();
  let stars=0;
  $( ".stars" ).children('i').each(function(){
    if($(this).css('color') == 'rgb(255, 255, 0)'){
      stars++;
    }
    console.log(stars)
  })

  let addObj = {
      video_link : movie_data.data.video_link,
      title: movie_data.data.title,
      video_image :movie_data.data.video_image,
      genre : movie_data.data.genre,
      reviews : (movie_data.data.reviews).concat({
        username:username,
        review:document.getElementById('review').value,
        stars:stars,
        date:new Date()
      })
  }
  let httpResponse = await fetch(`http://anyservice.imassoft.com/1907/videos/${id}`,{
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
      window.location.href = `./display.html?id=${id}&username=${username}`;
    }

document.getElementById('rate_btn').addEventListener('click',addRate)

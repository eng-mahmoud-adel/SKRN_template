let movies;
const req = async () => {
  const response = await fetch("http://anyservice.imassoft.com/501/videos", {
    method: "GET",
    headers: { token: "f72c4067-e750-4da1-91af-fc2d95441479" },
  });
  const json = await response.json();
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
    window.location.href = `./display.html?id=${elmId}`;
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
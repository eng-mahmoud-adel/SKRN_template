var urlParams = new URLSearchParams(window.location.search);
let id=urlParams.get('id'); 


const req = async () => {
    const response = await fetch(
      `http://anyservice.imassoft.com/501/videos/${id}`,
      {
        method: "GET",
        headers: { token: "f72c4067-e750-4da1-91af-fc2d95441479" },
      }
    );
    const json = await response.json();
    $('iframe').attr('src',json.data.url)
    $('.card-title').text(json.data.title)
    $('.card-img').attr('src',json.data.img)
    $('.card-text').text('movie description')

  };
  req();
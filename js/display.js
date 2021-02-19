var urlParams = new URLSearchParams(window.location.search);
let id=urlParams.get('id'); 


const req = async () => {
    const response = await fetch(
      `http://anyservice.imassoft.com/1907/videos/${id}`,
      {
        method: "GET",
        headers: { token: window.localStorage.getItem('token') },
      }
    );
    const json = await response.json();
    $('iframe').attr('src',json.data.url)
    $('.card-title').text(json.data.title)
    $('.card-img').attr('src',json.data.img)
    $('.card-text').text('movie description')

  };
  req();
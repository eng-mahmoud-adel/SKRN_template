async function addvideo(){
    let addObj = {
        video_link : document.getElementById("video_link").value,
        title: document.getElementById("title").value,
        video_image :document.getElementById("video_image").value,
        genre : document.getElementById("genre").value
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
}
 
async function addvideo(){
    let addObj = {
        url : document.getElementById("url").value,
        title: document.getElementById("title").value,
        img :document.getElementById("url-vid").value,
        genre : document.getElementById("genre").value
    }
    console.log(addObj)
    let httpResponse = await fetch("http://anyservice.imassoft.com/1907/videos/",{
    method : "POST",
    headers : {
      'content-type':'application/json',
      'token' : localStorage.getItem('token')
    },
    body:JSON.stringify(addObj)
  });
        let jsonObj = await httpResponse.json();
        console.log(jsonObj)
        console.log(addObj)

}
 
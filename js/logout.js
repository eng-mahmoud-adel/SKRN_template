$('#logout').click(function(){
    window.localStorage.removeItem('token');
    window.location.href = './index.html';
})
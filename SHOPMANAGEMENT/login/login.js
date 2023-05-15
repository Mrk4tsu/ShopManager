setTimeout(function() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("content").classList.add("fadein");
    document.getElementById("content").style.display = "block";
}, 1000); // Thời gian chờ 1 giây (1000 mili giây)
let pass_text=document.querySelector('.ps');
let pass_icon=document.querySelector('.icon');
    pass_icon.addEventListener('click',() =>{
        if(pass_text.type=='password')
        {
            pass_text.type='text';
            pass_icon.setAttribute('name','eye-outline')
        }
        else
        {
            pass_text.type='password';
            pass_icon.setAttribute('name','eye-off-outline')
        }
});
//
let loginBtn=document.querySelector('.login-btn');
loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    var userField = document.getElementById('user').value;
    var passwordField = document.getElementById('password').value;
        if (userField=="" || passwordField=="") {
            event.preventDefault();
            alert('Vui lòng nhập đủ thông tin!');
        }
        else
        alert('Đăng nhập thành công!');
        window.location.assign("/SHOPMANAGEMENT/main/display1.html");
    });
let ggloginBtn=document.querySelector('.google-login')
ggloginBtn.addEventListener('click',() => {
    location.assign("https://accounts.google.com/login")
});
let fbloginBtn=document.querySelector('.facebook-login')
fbloginBtn.addEventListener('click',() => {
    location.assign("https://www.facebook.com/login/")
});


  

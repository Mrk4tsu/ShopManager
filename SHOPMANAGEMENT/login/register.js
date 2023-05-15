let ggloginBtn=document.querySelector('.google-register')
ggloginBtn.addEventListener('click',() => {
    location.assign("https://accounts.google.com/login")
});
let fbloginBtn=document.querySelector('.facebook-register')
fbloginBtn.addEventListener('click',() => {
    location.assign("https://www.facebook.com/login/")
});
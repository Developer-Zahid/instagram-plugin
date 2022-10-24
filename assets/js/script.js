let imagesArr = [
    'http://insta-api.contact-support.co/1.jpeg',
    'http://insta-api.contact-support.co/2.jpeg',
    'http://insta-api.contact-support.co/3.jpeg',
    'http://insta-api.contact-support.co/4.jpeg',
    'http://insta-api.contact-support.co/5.jpeg'
];

let instagramContainer = document.querySelector(".instagram-container");

window.addEventListener("DOMContentLoaded", function(){
    setTimeout(function(){
        imagesArr.map((item)=>{
            instagramContainer.innerHTML += `<img src="${item}" alt="instagram image" class="instagram__imgage" />`
        })
    },1000)
})
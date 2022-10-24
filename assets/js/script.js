let imagesArr = [
    'http://insta-api.contact-support.co/1.jpeg?not-from-cache-please',
    'http://insta-api.contact-support.co/2.jpeg?not-from-cache-please',
    'http://insta-api.contact-support.co/3.jpeg?not-from-cache-please',
    'http://insta-api.contact-support.co/4.jpeg?not-from-cache-please',
    'http://insta-api.contact-support.co/5.jpeg?not-from-cache-please'
];

let instagramContainer = document.querySelector(".instagram-container");

window.addEventListener("DOMContentLoaded", function(){
    setTimeout(function(){
        imagesArr.map((item)=>{
            instagramContainer.innerHTML += `<img src="${item}" alt="instagram image" class="instagram__imgage" />`
        })
    },1000)
})

// const url = "http://insta-api.contact-support.co/2.jpeg";
// const image = new Image();
// image.src = url;

// const corsImage = new Image();
// corsImage.crossOrigin = "Anonymous";
// corsImage.src = url;
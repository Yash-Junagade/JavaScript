const imageBanner = document.querySelector(".banner-image");
const visitBtn = document.querySelector("#visitBtn");
const followBtn = document.querySelector("#followBtn");
const name = document.querySelector(".wrapper h1");
const text = document.querySelector(".wrapper p");

const xhr = new XMLHttpRequest();
const requestUrl = "https://api.github.com/users/YashJunagade";
xhr.open("GET", requestUrl);
xhr.onreadystatechange = function (){
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText);
        imageBanner.style.backgroundImage = `url(${data.avatar_url})`;
        name.innerHTML = `${data.name}`;
        text.innerHTML = `Followers : ${data.followers} <br>
                            Following : ${data.following}`;
        visitBtn.setAttribute('href', `${data.html_url}`)
        followBtn.setAttribute('href', `${data.repos_url}`)
    }
}
xhr.send();
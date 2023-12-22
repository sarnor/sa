import './menu/index.js'

const radio = new Audio();

let chanel, radioPlayeer, favorit, listWrapper, elSpan, radioData, radioDatav;


const httpAjax = (method, url, body = null) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = "json";
        xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
        xhr.onload = () =>
            xhr.status >= 400 ? reject(xhr.response) : resolve(xhr.response);
        xhr.onerrror = () => reject(xhr.response);
        xhr.send(JSON.stringify(body));
    });
};


radioPlayeer = (radioUrl, btnPlay, bg) => {
    btnPlay.forEach((e, i) => {
        e.addEventListener("pointerup", event => {
            radio.muted = false;
            localStorage.setItem('radioDetails', JSON.stringify({
                name: radioUrl[i].name,
                url: radioUrl[i].url,
                index: i,
                favorites: []
            }))
            radioData = localStorage.getItem('radioDetails')
            if (radio.src === "") {
                e.classList.add("active");
                radio.src = radioUrl[i].url;
                radio.play();
                location.hash = `${radioUrl[i].name}`;
            } else if (radio.src === radioUrl[i].url && !radio.paused) {
                e.classList.add("active-pause")
                radio.pause();
            } else if (radio.src === radioUrl[i].url && radio.paused) {
                e.classList.remove("active-pause")
                radio.play();
                location.hash = radioUrl[i].name;
            } else if (radio.src !== '' && radio.src !== radioUrl[i].url && (radio.paused || radio.played)) {
                btnPlay.forEach(e => e.classList.remove("active", "active-pause"));
                e.classList.add("active");
                radio.src = radioUrl[i].url;
                radio.play();
                location.hash = radioUrl[i].name;
            }
            radioDatav = JSON.parse(radioData)
        });
    });
};


let buildTracks = new Promise((resolve, reject) => {
    resolve(httpAjax("GET", "/pers").then((data) => data));
});


buildTracks
    .then(data => {
        listWrapper = document.querySelector(".list-wrapper");
        return data;
    })
    .then(data => {
        elSpan = document.createElement("li");
        return data;
    })
    .then(data => {
        data.forEach((e, i) => {
            listWrapper.insertAdjacentElement("beforeend", elSpan.cloneNode(false));
        });
        return data;
    })
    .then(data => {
        listWrapper.querySelectorAll("li").forEach((e, i) => {
            e.insertAdjacentHTML("beforeend",
                `<span> 
         ${data[i].name}
      </span>
      <div class="favorit">
         <i class="fa-solid fa-star"></i>
         <i class="fa-regular fa-star"></i>
      </div>`)
        });
        return data;
    })
    .then(data => radioPlayeer(data, listWrapper.querySelectorAll("li")))
    .then(() => favorit = document.querySelectorAll('.favorit'))










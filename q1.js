let url = "https://kontests.net/api/v1/all"

fetch(url, {
    method: "GET",
}).then((resp) => {
    resp.json().then((data) => {
        for (item in data) {

           
            const endTime = data[item].end_time;

            const timeDifference = calculateTimeDifference(endTime);
            if(timeDifference.hours>=0)

            container.innerHTML += `<div class="card" style="width: 18rem;">
            <!-- <img id="image" class="card-img-top" src="..." alt="Loading..."> -->
            <div class="card-body">
              <h5 class="card-title" id="title">${data[item].name}</h5>
              <br>
              <div id="imageContainer"><img src="${getRandomImageUrl(200, 200)}" alt="Loading img.."></div>
              <br>
              <b class="card-text" id="description">${timeDifference.days+" days "+timeDifference.hours+" hours remaining"}</b>
              <br>
              <br>
              <a  href="${data[item].url}" class="btn btn-primary" id="url" "target"="_blank">Check out!</a>
            </div>
          </div>`
        }
    })
})

function calculateTimeDifference(endTimeStr) {
    const endTime = new Date(endTimeStr);
    const currentTime = new Date();
  
    const timeDifference = endTime - currentTime;
  
    const days = Math.floor(timeDifference / 86400000);
    const hours = Math.floor((timeDifference % 86400000) / 3600000);
    const minutes = Math.floor((timeDifference % 3600000) / 60000);
    const seconds = Math.floor((timeDifference % 60000) / 1000);
  
    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }
  function getRandomImageUrl(width, height) {
    const randomNumber = Math.floor(Math.random() * 1000); // Generate a random number
    return `https://picsum.photos/${width}/${height}?programing=${randomNumber}?programing`;
  }

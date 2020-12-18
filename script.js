const api = {
    key : "60daa442e6a731b9412a5539af908004",
    url : "https://api.openweathermap.org/data/2.5/"
}

const search = document.querySelector('.searching');
search.addEventListener('keypress', (evt) => {
    if(evt.keyCode === 13){
        console.log(search.value);
        getresult(search.value);
    }
})

async function getresult(weather){
    const response = await fetch(`${api.url}weather?q=${weather}&appid=${api.key}&units=metric`)
    const data = await response.json();
    displayresult(data);
}

function displayresult(weather){
    console.log(weather)
   let city =  document.querySelector('.data-container .city');
   city.innerText = `${weather.name}, ${weather.sys.country}`;

   let now = new Date();
   let date = document.querySelector('.data-container .date');
   date.innerText = exactDate(now);

   let temp = document.querySelector('.data-container .temp');
   temp.innerText = `${Math.round(weather.main.temp)}c`;

   let climate = document.querySelector('.data-container #description');
   climate.innerText = `${weather.weather[0].main}`;
}

function exactDate(d){
    let months = ["jan","feb", "mar","Apr"," May", "Jun", "Jul", "AUg", "Sep", "Oct", "Nov", "Dec"];
    let days = ["sunday", "monday","tuesday", "wednesday", "thursday", "friday", "saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
}
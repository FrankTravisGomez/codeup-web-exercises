


console.log("is it working");

// $.ajax(`api.openweathermap.org/data/2.5/forecast?lat=${results[1]}&lon=${results[0]}&appid=${openWeatherKey}&units=imperial`)
function geoCodeBuildWeather(searchString) {
    let html = "";
    geocode(searchString, mapboxKey).then(function (results) {

console.log(results)
    console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${results[1]}&lon=${results[0]}&appid=${openWeatherKey}&units=imperial`)
        //my home cord: 29.623148749882247, -98.50846661345147
        $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${results[1]}&lon=${results[0]}&appid=${openWeatherKey}&units=imperial`).done(function (data) {
                console.log(data);

                //the following code is tailored to the object that comes back from the /weather
                html += `<h4>Current location: ${data.name}</h4>`;

                html += `<h4>Current weather: ${data.weather[0].description}</h4>`;


                html += `<h5>Current average wind speed: ${parseInt(data.wind.speed)} knots</h5>`;

                html += `<h5>Current Temperature: ${parseInt(data.main.temp)} &deg;</h5>`;


                html += `<h5>Current humidity: ${parseInt(data.main.humidity)}</h5>`;
            $("#day1").html(html);
                // $("#weatherBody").html(html);
            //Second request inside-of first request: goal is to have current conditions built and stored inside of variable then continue building more html next with forecast data

                $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${results[1]}&lon=${results[0]}&appid=${openWeatherKey}&units=imperial`).done(function (data) {
                console.log(data);
            var html4cast="";
                //What shape is my object? How do I build more html here?
                //  for(let i=0; i<list.length; i+=0)
                    html4cast += `<h4>Current location: ${data.city.name}</h4>`
                    html4cast += `<h4>Date: ${data.list[2].dt_txt}</h4>`
                    html4cast += `<h4>Future weather: ${data.list[2].weather[0].description}</h4>`
                    html4cast += `<h5>Future average wind speed: ${parseInt(data.list[2].wind.speed)} knots</h5>`
                    html4cast += `<h5>Future Temperature:${parseInt(data.list[2].main.temp)} &deg;</h5>`
                    html4cast += `<h5>Future humidity: ${parseInt(data.list[2].main.humidity)}</h5>`
                    $("#day2").html(html4cast);
            var html4pt2="";

                    html4pt2 += `<h4>Current location: ${data.city.name}</h4>`
                    html4pt2 += `<h4>Date: ${data.list[9].dt_txt}</h4>`
                    html4pt2 += `<h4>Future weather: ${data.list[9].weather[0].description}</h4>`
                    html4pt2 += `<h5>Future average wind speed: ${parseInt(data.list[9].wind.speed)} knots</h5>`
                    html4pt2 += `<h5>Future Temperature:${parseInt(data.list[9].main.temp)} &deg;</h5>`
                    html4pt2 += `<h5>Future humidity:${parseInt(data.list[9].main.humidity)}</h5>`
                    $("#day3").html(html4pt2);
            var html4pt3="";

                    html4pt3 += `<h4>Current location: ${data.city.name}</h4>`
                    html4pt3 += `<h4>Date: ${data.list[17].dt_txt}</h4>`
                    html4pt3 += `<h4>Future weather: ${data.list[17].weather[0].description}</h4>`
                    html4pt3 += `<h5>Future average wind speed: ${parseInt(data.list[17].wind.speed)} knots</h5>`
                    html4pt3 += `<h5>Future Temperature: ${parseInt(data.list[17].main.temp)} &deg;</h5>`
                    html4pt3 += `<h5>Future humidity: ${parseInt(data.list[17].main.humidity)}</h5>`
                    $("#day4").html(html4pt3);
            var html4pt4="";

                    html4pt4 += `<h4>Current location: ${data.city.name}</h4>`
                    html4pt4 += `<h4>Date: ${data.list[25].dt_txt}</h4>`
                    html4pt4 += `<h4>Future weather: ${data.list[25].weather[0].description}</h4>`
                    html4pt4 += `<h5>Future average wind speed: ${parseInt(data.list[25].wind.speed)} knots</h5>`
                    html4pt4 += `<h5>Future Temperature: ${parseInt(data.list[25].main.temp)} &deg;</h5>`
                    html4pt4 += `<h5>Future humidity: ${parseInt(data.list[25].main.humidity)}</h5>`
                    $("#day5").html(html4pt4);
            })
            }
        )





    })


}

$("#btn1").click(function(e){
    e.preventDefault();
    geoCodeBuildWeather($("#searchInput").val());
})
// let myToken = 'pk.eyJ1IjoidHJhdmlzY29kZXVwIiwiYSI6ImNsZjJzdm5pNDBsaGgzcmxoYWNueHlkcnQifQ.0xOFa6MG7IZFECJVLYQOZQ';

mapboxgl.accessToken = mapboxKey;

//javascript map cords 29.626185451652596, -98.4949673897373
const map = new mapboxgl.Map(
    {
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/dark-v11', //  URL to make it look cool
        center: [-98.4949673897373, 29.626185451652596], // positioning lng, lat goes inside []
        zoom: 10,
    }
);
let testArray= [{
    name: "raising cane's",
    location:[1, 0],
    review: 'best chicken on this side of town',
},{
    name: "trilogy pizza",
    location: [1, 0],
    review:"almost like chicago but not as good",
},{
    name: "Boiler House at the Pearl",
    location: [1, 0],
    review: "fany place for them fancy people",
}
];
testArray.forEach(place => {
    let marker = new mapboxgl.Marker()
        .setLngLat(place.location)
        .addTo(map);
    let popup = new mapboxgl.Popup()
    popup.setHTML(`<p>${place.name} - ${place.review}</p>`)
    marker.setPopup(popup);
});
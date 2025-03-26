const apiKey="6ead530ad575fe0ecd56a2bc443c1057";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let time=new Date;
document.querySelector("#timeDisplay").innerHTML=`${time.getHours() - 12}:${time.getMinutes()}`;
async function getWeather(city) {
  const response=await fetch(apiUrl+`${city}&appid=${apiKey}`);
    var data= await response.json();
    console.log(data);
    document.querySelector("#city").innerHTML=data.name;
    document.querySelector("#temp").innerHTML=Math.round(data.main.temp)+"°";
    document.querySelector("#humidity").innerHTML=Math.round(data.main.humidity)+"%";
    document.querySelector("#feelslike").innerHTML=Math.round(data.main.feels_like);
}

const btn=document.querySelector("#search");

document.addEventListener('keydown',(event)=>{
    if(event.key==="Enter"){
        getCity();}
})
btn.addEventListener('click',getCity);
function getCity(){
    var cityName=document.querySelector("#cityName").value;
    getWeather(cityName);
}
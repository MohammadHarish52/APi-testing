const express = require("express");
const https = require("https");

const app =  express();

app.get("/",(req,res)=>{

    // we can only have one res.send

    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=334579555c16d8f383591da138e15101&units=metric";

    // making http get request to the browser to fetch data from an api endpoint

    https.get(url ,(response) => {
        console.log(response.statusCode)

        response.on('data',(data)=>{
            // we do this since the data coming from the api is in hex values

            const WeatherData=JSON.parse(data);

            const Alphabetdata = JSON.stringify(data);

            const object = {
                name:"harish",
                bfff:"ridhhi"
            }

            //gettting individual data from an api

            const temp  = WeatherData.main.temp;
            const feels = WeatherData.main.feels_like;
            const dsp = WeatherData.weather[0].description;
            const weatherimage = WeatherData.weather[0].icon;
            const imageURL = `http://openweathermap.org/img/${weatherimage}@2x.png`

            console.log(dsp , feels);
           
            res.write("<h1>Temperature in london is " + temp  + "C</h1>");
            res.write("<p>The weather is currently " + dsp + "</p>");
            res.write("<img src = " + imageURL + ">");
            res.send();

       //it will convert the object into a string

            console.log(JSON.stringify(object));
        })
    })
   
})

app.listen(3000,()=>{
    console.log("server stared on 3000");
})


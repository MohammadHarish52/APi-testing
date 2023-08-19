const express = require("express");
const https = require("https");

const bodyParser = require("body-parser");

const app =  express();

//Neccasory code to get access the body

app.use(bodyParser.urlencoded({extended:true})
    );

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
 
})

app.post("/",(req,res)=>{

    console.log(req.body.cityName);
     const city = req.body.cityName;
const apikey = "334579555c16d8f383591da138e15101";
const unit = "metric";

// we can only have one res.send

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=${unit}`;

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
        const icon = WeatherData.weather[0].icon;
        const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

        console.log(dsp , feels);
       
        res.write("<h1>Temperature in " + city + " is "  + temp  + "C</h1>");
        res.write("<p>The weather is currently " + dsp + "</p>");
        res.write("<img src = " + imageURL + ">");

        res.send();

   //it will convert the object into a string

        console.log(JSON.stringify(object));
        
        console.log(icon)
    })
})

})



app.listen(3000,()=>{
    console.log("server stared on 3000");
})


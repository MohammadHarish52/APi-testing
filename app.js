const express = require("express");
const https = require("https");

const app =  express();

app.get("/",(req,res)=>{

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

            console.log(WeatherData)

       //it will convert the object into a string

            console.log(JSON.stringify(object));
        })
    })
    res.send("<h1>Hello World</h1>");
})

app.listen(3000,()=>{
    console.log("server stared on 3000");
})


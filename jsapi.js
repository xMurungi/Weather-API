//const dataout = document.getElementById("dataOut");
//const url = "https://api.open-meteo.com/v1/forecast?latitude=-1.2833&longitude=36.8167&hourly=temperature_2m,is_day&current_weather=true&start_date=2023-07-23&end_date=2023-07-23";

// Get Input fnct 
const info_class = document.getElementsByClassName("info");

let Input_Value = document.querySelector(".search-info input");
const searchbtn = document.querySelector(".search-info button").addEventListener("click", async (e)=> {
    //Input_Value = city_name;
    
    /*info_class.style.display = `block`;*/
    const Location_Weather_Info = await City_GEO_Search(Input_Value.value);

    console.log(Location_Weather_Info); 
    // Feeding input to display 

    document.getElementById("id-city").textContent        =   `${Input_Value.value}`;
    document.getElementById("actual-temp").textContent    =   `Actual temp ${Math.ceil(Location_Weather_Info.main.temp-273.15)} °C`;
    document.getElementById("humidity").textContent       =   `Humidity ${Location_Weather_Info.main.humidity} %`;
    document.getElementById("pressure").textContent       =   `Pressure ${Location_Weather_Info.main.pressure} hPa`;
    document.getElementById("feels").textContent          =   `It feels like ${Math.ceil(Location_Weather_Info.main.feels_like-273.15)} °C`;
    document.getElementById("windspeed").textContent      =   `Wind speed ${Location_Weather_Info.wind.speed} m/s`;

});

// SEARCH DATA

// function to get lat and lon of location 

/*
async function LAT_LONG_FETCH_FUNCTION(city_name){
    const API_key = "f53bebc260bea8433c92cc7e877ff629";
    //let city_name = "Mombasa";
    const CITY_RETURN_LIMIT = 5;

    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=${CITY_RETURN_LIMIT}&appid=${API_key}&units=metric`;

    const LAT_LONG_FETCH = await fetch(url);
    const LAT_LONG_RESPONSE = await LAT_LONG_FETCH.json();

    console.log(LAT_LONG_RESPONSE);
    const [Array_one] = LAT_LONG_RESPONSE; 

    return Array_one;
} */

/*
async function load_GEO(){
    const GEO_DATA = await LAT_LONG_FETCH_FUNCTION(url);
    console.log(GEO_DATA);

    return GEO_DATA;
}
*/

// function to search for location 

async function City_GEO_Search(city_name){

    const API_key = "f53bebc260bea8433c92cc7e877ff629";
    //let city_name = "Mombasa";
    const CITY_RETURN_LIMIT = 5;

    let url = `https://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=${CITY_RETURN_LIMIT}&appid=${API_key}&units=metric/`;

    const LAT_LONG_FETCH = await fetch(url);
    const LAT_LONG_RESPONSE = await LAT_LONG_FETCH.json();

    console.log(LAT_LONG_RESPONSE);
    const [Array_one] = LAT_LONG_RESPONSE; 

    const Lat_Data = Array_one;
    const {lat} = Lat_Data;
    const {lon} = Lat_Data;

    console.log(lat);
    console.log(lon);

    const City_Search = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}/`;

    const City_Weather_Fetch = await fetch(City_Search);
    const City_Response =  await City_Weather_Fetch.json();

    return City_Response;
}


/*
async function fetchingdata(url){
    const obj = await fetch(url);
    const response = await obj.json();
    console.log(response);


    return response;
}

async function loadData(){
    const data = await fetchingdata(url);
    /*
    const {current_weather} = data;
    const {temperature} = current_weather;

    const output = document.createElement("p");
    output.textContent = `Temperature: ${temperature}`;
    dataout.replaceChildren(output);                                         

    const output2 = document.createElement("div");
}

loadData(); 


/*
async function loadData() {
    try {
        const data = await fetchingdata(url); // Pass the 'url' parameter to 'fetchingdata'

        // Create a new div element to hold the weather data
        const output = document.createElement("div");

        // Add the fetched data to the 'output' div
        output.textContent = JSON.stringify(data);

        // Replace the content of 'dataout' with the 'output' div
        dataout.replaceChildren(output);
    } catch (error) {
        // Handle any errors that occur during data fetching or processing
        console.error("Error fetching or processing data:", error);
    }
}

loadData();






/*

const dataout = document.getElementById("dataOut");
/*const url = "https://api.open-meteo.com/v1/forecast?latitude=-1.2833&longitude=36.8167&hourly=temperature_2m,is_day&current_weather=true&start_date=2023-07-23&end_date=2023-07-23";
*//*
const newurl = "https://api.openweathermap.org/data/2.5/weather?lat=1.2921&lon=36.8219";
const apiKey = "f53bebc260bea8433c92cc7e877ff629";

/*dataout.textContent = "hI"; */
/*
async function fetchingdata() {
    const obj = await fetch(newurl + `&appid=${apiKey}`);
    var response = await obj.json();
    console.log(response);
    /*
    const { latitude } = response.location; // Extract 'latitude' from 'response.location'
    return latitude;*/
/*}

/*fetchingdata();*/
/*

async function loadData() {
    try {
        const data = await fetchingdata(url);

        const output = document.createElement("div");
        output.textContent = `Latitude: ${data}`; // Display 'latitude' value

        dataout.replaceChildren(output);
    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
}


loadData();
*/ 
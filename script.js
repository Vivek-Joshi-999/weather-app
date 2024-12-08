async function getWeather() {
  //ye hai apana voi section jha se apne weather ka data milega 
  const location = document.getElementById("Location").value; //ye apana input aa rha hai 
  const weatherInfo = document.getElementById("weather"); // or ye apna vo bnda hai jo moosam dikhane wala hai bhai 
  const key = "47be93b874b838131e5218bdd8de8d28"; // ye apne locker ki chabi
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`;// or ye apna locker jisme apne data pda hai

  weatherInfo.innerHTML = ""
  console.log(location);
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    else {
      const data = await response.json();
      console.log(data);
      const{main,name,sys,weather} = data;
      console.log(name);
      const description= weather[0].description
      const tempature=main.temp;
      const country=sys.country;
      const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;


      weatherInfo.innerHTML = `
        <h2>${name}, ${country}</h2>
      <img src="${icon}" alt="${description}" />
      <p>${description.toUpperCase()}</p>
      <p>Temperature: ${tempature}\u00B0C</p>
    `;

    }
  }

  

  catch (error) {

    document.getElementById("weather").innerHTML = `<p style="color: red;">${error.message}</p>`;

  }

}
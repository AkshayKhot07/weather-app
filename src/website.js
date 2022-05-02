export const initializeWebsite = () => {
  let locSearchInput = document.querySelector(".locSearchInput");
  let locSearchIcon = document.querySelector(".locSearchIcon");
  let locDisplayText = document.querySelector(".locationDisplayText");
  let dateTime = document.querySelector(".date-time");

  let curTempIcon = document.querySelector(".current-temp-icon");
  let curTempDisplay = document.querySelector(".current-temp-display");
  let maxTempDisplay = document.querySelector(".max-temp-display");
  let minTempDisplay = document.querySelector(".min-temp-display");
  let feelsLikeTemp = document.querySelector(".feelslike-temp");
  let weatherDesp = document.querySelector(".weather-desp");

  console.log(locSearchInput, locSearchIcon, locDisplayText, dateTime);

  let date = new Date().toLocaleString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  let dateformatted = date.replace(",", "");
  console.log(dateformatted);

  const key = "51f1682bb898645ed8d10bc6c17f21c1";

  async function getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Mumbai&APPID=${key}`
    );

    const data = await response.json();
    console.log(data);
    console.log(data.name);
    locDisplayText.innerText = data.name;
    dateTime.innerText = dateformatted;
    console.log(data.weather[0].icon);

    let iconcode = data.weather[0].icon;
    curTempIcon.src = `http://openweathermap.org/img/w/${iconcode}.png`;

    curTempDisplay.innerText = kelvinToCelsius(data.main.temp);
    maxTempDisplay.innerText = kelvinToCelsius(data.main.temp_max);
    minTempDisplay.innerText = kelvinToCelsius(data.main.temp_min);
    feelsLikeTemp.innerText = kelvinToCelsius(data.main.feels_like);
    weatherDesp.innerText = data.weather[0].main;
  }

  getWeather();

  async function searchLocationWeather() {
    let locSearchInputValue = locSearchInput.value;
    if (locSearchInputValue == "") return;
    let errorDisplay = document.querySelector(".error-display");
    locSearchInput.value = "";

    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${locSearchInputValue}&APPID=${key}`
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      console.log(data.name);
      errorDisplay.style.visibility = "hidden";

      locDisplayText.innerText = data.name;
      dateTime.innerText = dateformatted;

      let iconcode = data.weather[0].icon;
      curTempIcon.src = `http://openweathermap.org/img/w/${iconcode}.png`;

      curTempDisplay.innerText = kelvinToCelsius(data.main.temp);
      maxTempDisplay.innerText = kelvinToCelsius(data.main.temp_max);
      minTempDisplay.innerText = kelvinToCelsius(data.main.temp_min);
      feelsLikeTemp.innerText = kelvinToCelsius(data.main.feels_like);
      weatherDesp.innerText = data.weather[0].main;
    } else if (!response.ok) {
      errorDisplay.style.visibility = "visible";
      return;
    }
  }

  locSearchInput.addEventListener("search", searchLocationWeather);
  locSearchIcon.addEventListener("click", searchLocationWeather);
};

function kelvinToCelsius(temp) {
  return Math.round(temp - 273.15);
}

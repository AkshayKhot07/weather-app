/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dailyforecast.js":
/*!******************************!*\
  !*** ./src/dailyforecast.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dailyForecast\": () => (/* binding */ dailyForecast),\n/* harmony export */   \"weekDay\": () => (/* binding */ weekDay)\n/* harmony export */ });\nconst key = \"51f1682bb898645ed8d10bc6c17f21c1\";\r\n\r\nasync function dailyForecast(lat, long) {\r\n  const response = await fetch(\r\n    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly,alerts&appid=${key}`\r\n  );\r\n\r\n  if (response.ok) {\r\n    const data = await response.json();\r\n    return data;\r\n  } else if (!response.ok) {\r\n    return;\r\n  }\r\n}\r\n\r\nfunction weekDay(timestamp, timezone) {\r\n  return new Date(timestamp * 1000).toLocaleString(\"en-US\", {\r\n    timeZone: timezone,\r\n    weekday: \"long\",\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/dailyforecast.js?");

/***/ }),

/***/ "./src/hourlyforecast.js":
/*!*******************************!*\
  !*** ./src/hourlyforecast.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hourlyForecast\": () => (/* binding */ hourlyForecast),\n/* harmony export */   \"timeInHour\": () => (/* binding */ timeInHour)\n/* harmony export */ });\n/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.js */ \"./src/website.js\");\n\r\n\r\nconst key = \"51f1682bb898645ed8d10bc6c17f21c1\";\r\n\r\nasync function hourlyForecast(lat, long) {\r\n  const response = await fetch(\r\n    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,daily,alerts&appid=${key}`\r\n  );\r\n\r\n  if (response.ok) {\r\n    const data = await response.json();\r\n    return data;\r\n  } else if (!response.ok) {\r\n    return;\r\n  }\r\n}\r\n\r\nfunction timeInHour(timestamp, timezone) {\r\n  return new Date(timestamp * 1000).toLocaleString(\"en-US\", {\r\n    // timeZone: \"Asia/Manila\",\r\n    timeZone: timezone,\r\n    hour: \"numeric\",\r\n    // minute: \"numeric\",\r\n    hour12: true,\r\n  });\r\n}\r\n\r\n/*\r\nnew Date(1651557600 * 1000).toLocaleString(\"en-US\", {\r\n  timeZone: \"Asia/Manila\",\r\n  hour: \"numeric\",\r\n  minute: \"numeric\",\r\n  hour12: true,\r\n});\r\n*/\r\n\n\n//# sourceURL=webpack://weather-app/./src/hourlyforecast.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.js */ \"./src/website.js\");\n\r\n\r\n\r\n\r\n(0,_website_js__WEBPACK_IMPORTED_MODULE_0__.initializeWebsite)();\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/timezone.js":
/*!*************************!*\
  !*** ./src/timezone.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timeZone\": () => (/* binding */ timeZone)\n/* harmony export */ });\nconst key = \"51f1682bb898645ed8d10bc6c17f21c1\";\r\n\r\nasync function timeZone(lat, long) {\r\n  const response = await fetch(\r\n    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=${key}`\r\n  );\r\n\r\n  if (response.ok) {\r\n    const data = await response.json();\r\n    // console.log(data);\r\n    return data;\r\n  } else if (!response.ok) {\r\n    return;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/timezone.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeWebsite\": () => (/* binding */ initializeWebsite)\n/* harmony export */ });\n/* harmony import */ var _timezone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timezone.js */ \"./src/timezone.js\");\n/* harmony import */ var _hourlyforecast_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hourlyforecast.js */ \"./src/hourlyforecast.js\");\n/* harmony import */ var _dailyforecast_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dailyforecast.js */ \"./src/dailyforecast.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// export const initializeWebsite = () => {\r\nlet locSearchInput = document.querySelector(\".locSearchInput\");\r\nlet locSearchIcon = document.querySelector(\".locSearchIcon\");\r\nlet locDisplayText = document.querySelector(\".locationDisplayText\");\r\nlet dateTime = document.querySelector(\".date-time\");\r\n\r\nlet curTempIcon = document.querySelector(\".current-temp-icon\");\r\nlet curTempDisplay = document.querySelector(\".current-temp-display\");\r\nlet maxTempDisplay = document.querySelector(\".max-temp-display\");\r\nlet minTempDisplay = document.querySelector(\".min-temp-display\");\r\nlet feelsLikeTemp = document.querySelector(\".feelslike-temp\");\r\nlet weatherDesp = document.querySelector(\".weather-desp\");\r\n\r\nconsole.log(locSearchInput, locSearchIcon, locDisplayText, dateTime);\r\n\r\nlet date = new Date().toLocaleString(\"en-US\", {\r\n  weekday: \"long\",\r\n  day: \"numeric\",\r\n  month: \"long\",\r\n  hour: \"numeric\",\r\n  minute: \"numeric\",\r\n  hour12: true,\r\n});\r\n\r\nlet dateformatted = date.replace(\",\", \"\");\r\nconsole.log(dateformatted);\r\n\r\nconst key = \"51f1682bb898645ed8d10bc6c17f21c1\";\r\n\r\nasync function getWeather() {\r\n  const response = await fetch(\r\n    `http://api.openweathermap.org/data/2.5/weather?q=Mumbai&APPID=${key}`\r\n  );\r\n\r\n  const data = await response.json();\r\n  console.log(data);\r\n  console.log(data.name);\r\n  locDisplayText.innerText = data.name;\r\n  dateTime.innerText = dateformatted;\r\n  console.log(data.weather[0].icon);\r\n\r\n  let iconcode = data.weather[0].icon;\r\n  curTempIcon.src = `http://openweathermap.org/img/w/${iconcode}.png`;\r\n\r\n  curTempDisplay.innerText = kelvinToCelsius(data.main.temp);\r\n  maxTempDisplay.innerText = kelvinToCelsius(data.main.temp_max);\r\n  minTempDisplay.innerText = kelvinToCelsius(data.main.temp_min);\r\n  feelsLikeTemp.innerText = kelvinToCelsius(data.main.feels_like);\r\n  weatherDesp.innerText = data.weather[0].main;\r\n\r\n  //Hourly Forecast\r\n  let hourlyForecastConatiner = document.querySelector(\".hourly-forecast\");\r\n  hourlyForecastConatiner.innerHTML = \"\";\r\n  let hourlyForecastData = await (0,_hourlyforecast_js__WEBPACK_IMPORTED_MODULE_1__.hourlyForecast)(data.coord.lat, data.coord.lon);\r\n  console.log(hourlyForecastData);\r\n\r\n  for (let i = 0; i < 24; i++) {\r\n    // console.log(hourlyForecastData.hourly[i].dt);\r\n    hourlyForecastConatiner.innerHTML += `\r\n    <div class=\"hour-day-container\">\r\n    <div>${(0,_hourlyforecast_js__WEBPACK_IMPORTED_MODULE_1__.timeInHour)(\r\n      hourlyForecastData.hourly[i].dt,\r\n      hourlyForecastData.timezone\r\n    ).toLocaleLowerCase()}</div>\r\n    <img src=\"http://openweathermap.org/img/w/${\r\n      hourlyForecastData.hourly[i].weather[0].icon\r\n    }.png\">\r\n    <div>${kelvinToCelsius(hourlyForecastData.hourly[i].temp)} °C</div>\r\n    </div>\r\n    `;\r\n  }\r\n\r\n  //Daily Forecast\r\n  let dailyForecastContainer = document.querySelector(\".daily-forecast\");\r\n  dailyForecastContainer.innerHTML = \"\";\r\n  let dailyForecastData = await (0,_dailyforecast_js__WEBPACK_IMPORTED_MODULE_2__.dailyForecast)(data.coord.lat, data.coord.lon);\r\n  console.log(dailyForecastData);\r\n  for (let i = 0; i < dailyForecastData.daily.length - 1; i++) {\r\n    dailyForecastContainer.innerHTML += `\r\n    <div class=\"hour-day-container\">\r\n    <div>${(0,_dailyforecast_js__WEBPACK_IMPORTED_MODULE_2__.weekDay)(\r\n      dailyForecastData.daily[i].dt,\r\n      dailyForecastData.timezone\r\n    )}</div>\r\n    <img src=\"http://openweathermap.org/img/w/${\r\n      dailyForecastData.daily[i].weather[0].icon\r\n    }.png\">\r\n    <div>${kelvinToCelsius(dailyForecastData.daily[i].temp.day)} °C</div>\r\n    </div>\r\n    `;\r\n  }\r\n}\r\n\r\n// getWeather();\r\n\r\nasync function searchLocationWeather() {\r\n  let locSearchInputValue = locSearchInput.value;\r\n  if (locSearchInputValue == \"\") return;\r\n  let errorDisplay = document.querySelector(\".error-display\");\r\n  locSearchInput.value = \"\";\r\n\r\n  const response = await fetch(\r\n    `http://api.openweathermap.org/data/2.5/weather?q=${locSearchInputValue}&APPID=${key}`\r\n  );\r\n\r\n  if (response.ok) {\r\n    const data = await response.json();\r\n    console.log(data);\r\n    console.log(data.name);\r\n    errorDisplay.style.visibility = \"hidden\";\r\n\r\n    //Date and Time as per Location\r\n    let timeZoneData = await (0,_timezone_js__WEBPACK_IMPORTED_MODULE_0__.timeZone)(data.coord.lat, data.coord.lon);\r\n    let locTimeZone = timeZoneData.timezone;\r\n    let locCurrTimeDate = new Date().toLocaleString(\"en-US\", {\r\n      timeZone: locTimeZone,\r\n      weekday: \"long\",\r\n      day: \"numeric\",\r\n      month: \"long\",\r\n      hour: \"numeric\",\r\n      minute: \"numeric\",\r\n      hour12: true,\r\n    });\r\n    console.log(locCurrTimeDate);\r\n\r\n    locDisplayText.innerText = data.name;\r\n    dateTime.innerText = locCurrTimeDate.replace(\",\", \"\");\r\n\r\n    let iconcode = data.weather[0].icon;\r\n    curTempIcon.src = `http://openweathermap.org/img/w/${iconcode}.png`;\r\n\r\n    curTempDisplay.innerText = kelvinToCelsius(data.main.temp);\r\n    maxTempDisplay.innerText = kelvinToCelsius(data.main.temp_max);\r\n    minTempDisplay.innerText = kelvinToCelsius(data.main.temp_min);\r\n    feelsLikeTemp.innerText = kelvinToCelsius(data.main.feels_like);\r\n    weatherDesp.innerText = data.weather[0].main;\r\n\r\n    //Hourly Forecast\r\n\r\n    let hourlyForecastConatiner = document.querySelector(\".hourly-forecast\");\r\n    hourlyForecastConatiner.innerHTML = \"\";\r\n    let hourlyForecastData = await (0,_hourlyforecast_js__WEBPACK_IMPORTED_MODULE_1__.hourlyForecast)(\r\n      data.coord.lat,\r\n      data.coord.lon\r\n    );\r\n    console.log(hourlyForecastData);\r\n\r\n    for (let i = 0; i < 24; i++) {\r\n      // console.log(hourlyForecastData.hourly[i].dt);\r\n      hourlyForecastConatiner.innerHTML += `\r\n      <div class=\"hour-day-container\">\r\n      <div>${(0,_hourlyforecast_js__WEBPACK_IMPORTED_MODULE_1__.timeInHour)(\r\n        hourlyForecastData.hourly[i].dt,\r\n        hourlyForecastData.timezone\r\n      ).toLocaleLowerCase()}</div>\r\n      <img src=\"http://openweathermap.org/img/w/${\r\n        hourlyForecastData.hourly[i].weather[0].icon\r\n      }.png\">\r\n      <div>${kelvinToCelsius(hourlyForecastData.hourly[i].temp)} °C</div>\r\n      </div>\r\n      `;\r\n    }\r\n\r\n    //Daily Forecast\r\n\r\n    let dailyForecastContainer = document.querySelector(\".daily-forecast\");\r\n    dailyForecastContainer.innerHTML = \"\";\r\n    let dailyForecastData = await (0,_dailyforecast_js__WEBPACK_IMPORTED_MODULE_2__.dailyForecast)(data.coord.lat, data.coord.lon);\r\n    console.log(dailyForecastData);\r\n    for (let i = 0; i < dailyForecastData.daily.length - 1; i++) {\r\n      dailyForecastContainer.innerHTML += `\r\n    <div class=\"hour-day-container\">\r\n    <div>${(0,_dailyforecast_js__WEBPACK_IMPORTED_MODULE_2__.weekDay)(\r\n      dailyForecastData.daily[i].dt,\r\n      dailyForecastData.timezone\r\n    )}</div>\r\n    <img src=\"http://openweathermap.org/img/w/${\r\n      dailyForecastData.daily[i].weather[0].icon\r\n    }.png\">\r\n    <div>${kelvinToCelsius(dailyForecastData.daily[i].temp.day)} °C</div>\r\n    </div>\r\n    `;\r\n    }\r\n  } else if (!response.ok) {\r\n    errorDisplay.style.visibility = \"visible\";\r\n    return;\r\n  }\r\n}\r\n\r\n// locSearchInput.addEventListener(\"search\", searchLocationWeather);\r\n// locSearchIcon.addEventListener(\"click\", searchLocationWeather);\r\n// };\r\n\r\nconst initializeWebsite = () => {\r\n  getWeather();\r\n  locSearchInput.addEventListener(\"search\", searchLocationWeather);\r\n  locSearchIcon.addEventListener(\"click\", searchLocationWeather);\r\n};\r\n\r\nfunction kelvinToCelsius(temp) {\r\n  return Math.round(temp - 273.15);\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/website.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
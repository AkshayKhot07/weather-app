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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.js */ \"./src/website.js\");\n\r\n\r\n\r\n\r\n(0,_website_js__WEBPACK_IMPORTED_MODULE_0__.initializeWebsite)();\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeWebsite\": () => (/* binding */ initializeWebsite)\n/* harmony export */ });\nconst initializeWebsite = () => {\r\n  let locSearchInput = document.querySelector(\".locSearchInput\");\r\n  let locSearchIcon = document.querySelector(\".locSearchIcon\");\r\n  let locDisplayText = document.querySelector(\".locationDisplayText\");\r\n  let dateTime = document.querySelector(\".date-time\");\r\n\r\n  let curTempIcon = document.querySelector(\".current-temp-icon\");\r\n  let curTempDisplay = document.querySelector(\".current-temp-display\");\r\n  let maxTempDisplay = document.querySelector(\".max-temp-display\");\r\n  let minTempDisplay = document.querySelector(\".min-temp-display\");\r\n  let feelsLikeTemp = document.querySelector(\".feelslike-temp\");\r\n  let weatherDesp = document.querySelector(\".weather-desp\");\r\n\r\n  console.log(locSearchInput, locSearchIcon, locDisplayText, dateTime);\r\n\r\n  let date = new Date().toLocaleString(\"en-US\", {\r\n    weekday: \"long\",\r\n    day: \"numeric\",\r\n    month: \"long\",\r\n    hour: \"numeric\",\r\n    minute: \"numeric\",\r\n    hour12: true,\r\n  });\r\n\r\n  let dateformatted = date.replace(\",\", \"\");\r\n  console.log(dateformatted);\r\n\r\n  const key = \"51f1682bb898645ed8d10bc6c17f21c1\";\r\n\r\n  async function getWeather() {\r\n    const response = await fetch(\r\n      `http://api.openweathermap.org/data/2.5/weather?q=Mumbai&APPID=${key}`\r\n    );\r\n\r\n    const data = await response.json();\r\n    console.log(data);\r\n    console.log(data.name);\r\n    locDisplayText.innerText = data.name;\r\n    dateTime.innerText = dateformatted;\r\n    console.log(data.weather[0].icon);\r\n\r\n    let iconcode = data.weather[0].icon;\r\n    curTempIcon.src = `http://openweathermap.org/img/w/${iconcode}.png`;\r\n\r\n    curTempDisplay.innerText = kelvinToCelsius(data.main.temp);\r\n    maxTempDisplay.innerText = kelvinToCelsius(data.main.temp_max);\r\n    minTempDisplay.innerText = kelvinToCelsius(data.main.temp_min);\r\n    feelsLikeTemp.innerText = kelvinToCelsius(data.main.feels_like);\r\n    weatherDesp.innerText = data.weather[0].main;\r\n  }\r\n\r\n  getWeather();\r\n\r\n  async function searchLocationWeather() {\r\n    let locSearchInputValue = locSearchInput.value;\r\n    if (locSearchInputValue == \"\") return;\r\n    let errorDisplay = document.querySelector(\".error-display\");\r\n    locSearchInput.value = \"\";\r\n\r\n    const response = await fetch(\r\n      `http://api.openweathermap.org/data/2.5/weather?q=${locSearchInputValue}&APPID=${key}`\r\n    );\r\n\r\n    if (response.ok) {\r\n      const data = await response.json();\r\n      console.log(data);\r\n      console.log(data.name);\r\n      errorDisplay.style.visibility = \"hidden\";\r\n\r\n      locDisplayText.innerText = data.name;\r\n      dateTime.innerText = dateformatted;\r\n\r\n      let iconcode = data.weather[0].icon;\r\n      curTempIcon.src = `http://openweathermap.org/img/w/${iconcode}.png`;\r\n\r\n      curTempDisplay.innerText = kelvinToCelsius(data.main.temp);\r\n      maxTempDisplay.innerText = kelvinToCelsius(data.main.temp_max);\r\n      minTempDisplay.innerText = kelvinToCelsius(data.main.temp_min);\r\n      feelsLikeTemp.innerText = kelvinToCelsius(data.main.feels_like);\r\n      weatherDesp.innerText = data.weather[0].main;\r\n    } else if (!response.ok) {\r\n      errorDisplay.style.visibility = \"visible\";\r\n      return;\r\n    }\r\n  }\r\n\r\n  locSearchInput.addEventListener(\"search\", searchLocationWeather);\r\n  locSearchIcon.addEventListener(\"click\", searchLocationWeather);\r\n};\r\n\r\nfunction kelvinToCelsius(temp) {\r\n  return Math.round(temp - 273.15);\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/website.js?");

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
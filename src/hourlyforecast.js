import { initializeWebsite } from "./website.js";

const key = "51f1682bb898645ed8d10bc6c17f21c1";

export async function hourlyForecast(lat, long) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,daily,alerts&appid=${key}`
  );

  if (response.ok) {
    const data = await response.json();
    return data;
  } else if (!response.ok) {
    return;
  }
}

export function timeInHour(timestamp, timezone) {
  return new Date(timestamp * 1000).toLocaleString("en-US", {
    // timeZone: "Asia/Manila",
    timeZone: timezone,
    hour: "numeric",
    // minute: "numeric",
    hour12: true,
  });
}

/*
new Date(1651557600 * 1000).toLocaleString("en-US", {
  timeZone: "Asia/Manila",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});
*/

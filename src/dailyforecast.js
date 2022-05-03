const key = "51f1682bb898645ed8d10bc6c17f21c1";

export async function dailyForecast(lat, long) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly,alerts&appid=${key}`
  );

  if (response.ok) {
    const data = await response.json();
    return data;
  } else if (!response.ok) {
    return;
  }
}

export function weekDay(timestamp, timezone) {
  return new Date(timestamp * 1000).toLocaleString("en-US", {
    timeZone: timezone,
    weekday: "long",
  });
}

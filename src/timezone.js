const key = "51f1682bb898645ed8d10bc6c17f21c1";

export async function timeZone(lat, long) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=${key}`
  );

  if (response.ok) {
    const data = await response.json();
    // console.log(data);
    return data;
  } else if (!response.ok) {
    return;
  }
}

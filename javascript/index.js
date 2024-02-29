function updateTime() {
  // Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");

  // Miami
  let miamiElement = document.querySelector("#miami");
  let miamiDateElement = miamiElement.querySelector(".date");
  let miamiTimeElement = miamiElement.querySelector(".time");
  let miamiTime = moment().tz("America/New_York");

  miamiDateElement.innerHTML = miamiTime.format("MMMM Do YYYY");
  miamiTimeElement.innerHTML = miamiTime.format("h:mm:ss [<small>]A[</small>]");

  // Valencia
  let valenciaElement = document.querySelector("#valencia");
  let valenciaDateElement = valenciaElement.querySelector(".date");
  let valenciaTimeElement = valenciaElement.querySelector(".time");
  let valenciaTime = moment().tz("Europe/Madrid");

  valenciaDateElement.innerHTML = valenciaTime.format("MMMM Do YYYY");
  valenciaTimeElement.innerHTML = valenciaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

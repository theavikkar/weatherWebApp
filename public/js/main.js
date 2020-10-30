const submitButton = document.getElementById("submitButton");
const cityName = document.getElementById("cityName");

const getInfo = async (event) => {
  event.preventDefault();
  let cityValue = cityName.value;
  if (cityValue === "") {
    alert("Please input city name");
  } else {
    try {
      let url = `api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=220fa53cfe634a4c36d6b598af275db1`;
      const response = await fetch(url);
      console.log(response);
    } catch {
      console.log("error");
    }
  }
};

submitButton.addEventListener("click", getInfo);

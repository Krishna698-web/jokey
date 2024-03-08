const joke = document.querySelector("#joke");
const fact = document.querySelector("#fact");
const joke_refresh = document.querySelector("#joke_refresh");
const fact_refresh = document.querySelector("#fact_refresh");

async function fetch_joke() {
  const res = await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1", {
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": "bB5TWArdQjV+M+o233qkuw==NPOWQpa3LTy7Ww2i",
    },
  });

  const data = await res.json();
  if (data) {
    joke.innerHTML = data[0].joke;
  } else {
    return null;
  }
  // console.log(data[0].joke);
}

fetch_joke();

joke_refresh.addEventListener("click", () => {
  fetch_joke();
});

const fetch_fact = async () => {
  const res = await fetch(`https://api.api-ninjas.com/v1/facts?limit=1`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": "bB5TWArdQjV+M+o233qkuw==NPOWQpa3LTy7Ww2i",
    },
  });
  const data = await res.json();
  if (data) {
    fact.innerHTML = data[0].fact;
  } else {
    return null;
  }
  //
  console.log(data[0].fact);
};

fetch_fact();

fact_refresh.addEventListener("click", () => {
  fetch_fact();
});

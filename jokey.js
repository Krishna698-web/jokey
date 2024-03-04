const joke = document.querySelector("#joke");
const refresh = document.querySelector("#refresh");

async function jokes() {
  const res = await fetch(
    "https://hindi-jokes-api.onrender.com/jokes?api_key=b09145cf3062fb13bce60017e846"
  );

  const data = await res.json();
  if (data) {
    joke.innerHTML = data.jokeContent;
  } else {
    return null;
  }
  //   console.log(data.jokeContent);
}

jokes();

refresh.addEventListener("click", () => {
  jokes();
});

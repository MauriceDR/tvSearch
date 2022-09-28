const form = document.querySelector("#searchForm");
const results = document.querySelector(".results");
const container = document.querySelector(".resultContainer");
const btn = document.querySelector("button");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  console.log("Submitted");
  const searchTerm = form.elements.query.value;
  const res = await axios.get(
    `http://api.tvmaze.com/search/shows?q=${searchTerm}`
  );
  makeImages(res.data);
});

btn.addEventListener("click", () => {
  container.classList.add("show");
});

const makeImages = function (shows) {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      results.append(img);
    }
  }
};

// append images, results to new div created

async function movie() {
  let m = document.getElementById("movi").value;
  let main = document.getElementById("main_div");
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  let div4 = document.createElement("div");
  let div5 = document.createElement("div");
  let img = document.createElement("img");

  try {
    let movie = await fetch(`http://www.omdbapi.com/?t=${m}&apikey=47d8ad5e`);
    let data = await movie.json();
    main.innerHTML = null;
    if (data.Title == undefined) {
      let img1 = document.createElement("img");
      img1.src =
        "https://thumbs.gfycat.com/InferiorAnxiousAustralianfreshwatercrocodile-max-1mb.gif";
      main.append(img1);
    } else {
      div1.innerHTML = `<b>Title :  ${data.Title}</b>`;
      div2.innerHTML = `<b>imdb : ${data.imdbRating}</b>`;
      div3.innerHTML = `<b>Relese Date :  ${data.Year}</b>`;
      img.src = data.Poster;
      div4.append(img);
      div5.innerHTML = `<b>Language :  ${data.Language}</b>`;
      main.append(div4, div1, div2, div3, div5);
      console.log(data);
    }
    if (data.imdbRating > 8.5) {
      let show = document.createElement("div");
      let h_2 = document.createElement("h2");
      h_2.innerHTML = "Recommended";
      show.append(h_2);
      main.append(show);
    }
  } catch (err) {
    console.log(err);
  }
}

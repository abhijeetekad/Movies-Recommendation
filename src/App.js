import React, { useState } from "react";
import "./styles.css";

const movieArr = {
  comedy: [
    {
      image: "./images1/welcome.jpg",
      name: "Welcome",
      productionHouse: " Base Industries Group",
      imdbRating: "4/5"
    },
    {
      image: "./images1/hera feri.jpg",
      name: "Hera Pheri",
      productionHouse: "A.G. Films, Base Industries Group",
      imdbRating: "4.5/5"
    },
    {
      image: "./images1/housefull.jpg",
      name: "HouseFull",
      productionHouse: "Nadiadwala Grandson Entertainment",
      imdbRating: "3.8/5"
    }
  ],
  horror: [
    {
      image: "./images1/tumbbad.jpg",
      name: "Tumbbad",
      productionHouse: "Eros International",
      imdbRating: "5/5"
    }
  ],
  Science_fiction: [
    {
      image: "./images1/pk2.jpg",
      name: "PK",
      productionHouse: "Vinod Chopra Films",
      imdbRating: "4.6/5"
    },
    {
      image: "./images1/krish2.jpg",
      name: "Krish",
      productionHouse: "Yash Raj Films",
      imdbRating: "3.5/5"
    },
    {
      image: "./images1/Ra.Oneposter.jpg",
      name: "RaOne",
      productionHouse: "Red Chillies Entertainment",
      imdbRating: "1/5"
    }
  ]
};

const movieDict = Object.keys(movieArr);

export default function App() {
  const [output, setOutput] = useState("comedy");
  function movieList(movies) {
    const list = movies.target.innerHTML;
    setOutput(list);
  }
  return (
    <div className="App">
      <h1>Movies Recommendation</h1>
      <div>
        {movieDict.map((Movies) => {
          return (
            <button className="btnEl" onClick={movieList}>
              {Movies}
            </button>
          );
        })}
      </div>
      <hr />
      {movieArr[output].map((movie) => {
        return (
          <span>
            <ul className="card">
              <img className="image" src={movie.image} alt="movies poster" />
              <h2>
                Name : <span style={{ color: "blue" }}>{movie.name}</span>
              </h2>
              <h3>
                Production House :{" "}
                <span style={{ color: "green" }}>{movie.productionHouse}</span>
              </h3>
              <h3>
                Imdb Rating :{" "}
                <span style={{ color: "red" }}>{movie.imdbRating}</span>
              </h3>
            </ul>
          </span>
        );
      })}
    </div>
  );
}

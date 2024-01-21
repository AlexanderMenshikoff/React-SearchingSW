import SearchingInput from "./components/SearchingInput";
import { useState } from "react";

const App = () => {
  const [heroList, setHeroList] = useState([]);
  const [inputValue, setInputValue] = useState();

  const getHeroesList = async () => {
    const heroesResp = await fetch("https://swapi.dev/api/people/", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const respDataHeroes = await heroesResp.json();
    console.log(respDataHeroes);
    const result = respDataHeroes.results;
    setHeroList(result);

    // setHeroList(result);

    // for (let index = 0; index < respDataHeroes.results.length; index++) {
    //   const el = respDataHeroes.results[index];

    //   const info = (
    //     <div>
    //       <p>{el.name}</p>
    //       <p>{el.birth_year}</p>
    //       <p>{el.gender}</p>
    //       <p>{el.height}</p>
    //       <p>{el.mass}</p>
    //     </div>
    //   );
    //   setHeroList(info);
    //   console.log(heroList);
    // }
  };

  // console.log(heroList);

  return (
    <div className="App">
      <div className="flex justify-center m-[30px]">
        <SearchingInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          getHeroes={getHeroesList}
        />
      </div>
      {heroList.map((el, i) => {
        return (
          el.name.toLowerCase() === inputValue.toLowerCase() && (
            <div key={i}>
              <p>{el.name}</p>
              <p>{el.birth_year}</p>
              <p>{el.gender}</p>
              <p>{el.height}</p>
              <p>{el.mass}</p>
            </div>
          )
        );
      })}
    </div>
  );
};

export default App;

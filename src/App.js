import SearchingInput from "./components/SearchingInput";
import { useEffect, useState } from "react";

const App = () => {
  const [heroList, setHeroList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const getHeroesList = async () => {
    const heroesResp = await fetch("https://swapi.dev/api/people/");
    const respDataHeroes = await heroesResp.json();
    const arr = [];
    for (let index = 1; index <= respDataHeroes.count; index++) {
      const heroesResp2 = await fetch("https://swapi.dev/api/people/" + index);
      const respDataHeroes2 = await heroesResp2.json();
      arr.push(respDataHeroes2);
    }
    setHeroList(arr);
  };

  useEffect(() => {
    getHeroesList();
  }, []);

  return (
    <div className="App">
      <div className="flex justify-center m-[30px]">
        <SearchingInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          getHeroes={getHeroesList}
        />
      </div>
      {inputValue
        ? heroList.map((el, i) => {
            return (
              el.name?.toLowerCase().includes(inputValue?.toLowerCase()) && (
                <div key={i}>
                  <p>{el.name}</p>
                  <p>{el.birth_year}</p>
                  <p>{el.gender}</p>
                  <p>{el.height}</p>
                  <p>{el.mass}</p>
                </div>
              )
            );
          })
        : ""}
    </div>
  );
};

export default App;

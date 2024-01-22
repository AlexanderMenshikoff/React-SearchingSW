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
    <div>
      <div className="flex justify-center mt-[30px] mb-[70px]">
        <SearchingInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          getHeroes={getHeroesList}
        />
      </div>
      <div>
        {inputValue
          ? heroList.map((el, i) => {
              return (
                el.name?.toLowerCase().includes(inputValue?.toLowerCase()) && (
                  <div
                    key={i}
                    className="rounded-[25px] border p-[30px] mb-[20px] w-[50vw] ml-[20px] text-[20px]"
                  >
                    <p>Name: {el.name}</p>
                    <p>Birth year: {el.birth_year}</p>
                    <p>Gender: {el.gender}</p>
                    <p>Height: {el.height}</p>
                    <p>Weight: {el.mass}</p>
                  </div>
                )
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default App;

import CharacterBlock from "./components/CharacterBlock";
import SearchingInput from "./components/SearchingInput";
import { useEffect, useState } from "react";

const App = () => {
  const [heroList, setHeroList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [visibility, setVisibility] = useState("hidden");
  const [loaderVisibility, setLoaderVisibility] = useState("block");

  const getHeroesList = async () => {
    const characters = [];
    const pagesArray = [];

    const heroesReq = await fetch("https://swapi.dev/api/people/");
    const heroesResp = await heroesReq.json();

    for (let index = 1; index <= Math.ceil(heroesResp.count / 10); index++) {
      pagesArray.push(index);
    }

    const pagesResponse = pagesArray.map((el) =>
      fetch(`https://swapi.dev/api/people/?page=` + el).then((resp) =>
        resp.json()
      )
    );

    Promise.all(pagesResponse)
      .then((result) => {
        result.map((el) => characters.push(...el.results));
        console.log(characters, "ready");
        setVisibility(loaderVisibility);
        setLoaderVisibility(visibility);
      })
      .catch((err) => console.log(err));
    setHeroList(characters);
  };

  useEffect(() => {
    getHeroesList();
  }, []);

  console.log(visibility);

  return (
    <div>
      <div className="flex justify-center mt-[30px] mb-[70px]">
        <SearchingInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          getHeroes={getHeroesList}
          visibility={visibility}
        />
      </div>

      <div className="flex flex-wrap justify-center">
        <div className={loaderVisibility}>
          <div className="loader"> </div>
        </div>

        <CharacterBlock inputValue={inputValue} heroList={heroList} />
      </div>
    </div>
  );
};

export default App;

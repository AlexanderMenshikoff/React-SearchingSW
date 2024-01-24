import CharacterBlock from "./components/CharacterBlock";
import SearchingInput from "./components/SearchingInput";
import { useEffect, useState } from "react";

const App = () => {
  const [heroList, setHeroList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [visibility, setVisibility] = useState(true);

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
        setVisibility(!visibility);
      })
      .catch((err) => console.log(err));
    setHeroList(characters);
  };

  useEffect(() => {
    getHeroesList();
  }, []);

  return (
    <div>
      {visibility ? (
        <div className="flex flex-wrap justify-center">
          <div className="loader"> </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-center mt-[30px] mb-[70px]">
            <SearchingInput
              inputValue={inputValue}
              setInputValue={setInputValue}
              visibility={visibility}
            />
          </div>
          <div className="flex flex-wrap justify-center">
            <CharacterBlock inputValue={inputValue} heroList={heroList} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

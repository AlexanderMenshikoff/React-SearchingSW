import SearchingInput from "./components/SearchingInput";

const App = () => {
  // const getHeroesList = async () => {
  //   const heroesResp = await fetch("https://swapi.dev/api/people/", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   const respDataHeroes = await heroesResp.json();
  //   console.log(respDataHeroes);
  // };

  return (
    <div className="App">
      <div className="flex justify-center m-[30px]">
        <SearchingInput />
      </div>
    </div>
  );
};

export default App;

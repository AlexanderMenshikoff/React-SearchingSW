const CharacterBlock = (props) => {
  return (
    <div className="relative">
      {props.inputValue
        ? props.heroList.map((el, i) => {
            return (
              el.name
                ?.toLowerCase()
                .includes(props.inputValue?.toLowerCase()) && (
                <div
                  key={i}
                  className="rounded-[25px] border-[2px] border-yellow-400 p-[30px] mb-[20px] w-[50vw] ml-[20px] text-[20px] text-yellow-400 text-center"
                >
                  <p>
                    <span className="font-sw ">Name:</span> {el.name}
                  </p>
                  <p>
                    <span className="font-sw">Birth year:</span> {el.birth_year}
                  </p>
                  <p>
                    <span className="font-sw ">Gender:</span> {el.gender}
                  </p>
                  <p>
                    <span className="font-sw">Height:</span> {el.height}
                  </p>
                  <p>
                    <span className="font-sw">Weight:</span> {el.mass}
                  </p>
                </div>
              )
            );
          })
        : ""}
    </div>
  );
};

export default CharacterBlock;

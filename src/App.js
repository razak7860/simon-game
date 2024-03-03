import React, { useState } from "react";

const App = () => {
  const [index, setIndex] = useState(0);
  console.log("component rendered");
  function clickHandler() {
    const random = Math.random();
    console.log("index is ", Math.floor(index * 4));
    console.log("random is ", Math.floor(random * 4));
    setIndex(random);
  }
  return (
    <div className="App">
      <div className="flex flex-col gap-10">
        <div className="flex w-96 gap-10">
          <div
            id="red"
            className={`bg-red-600 border-4 border-black h-[200px] w-[200px] ${
              Math.floor(index * 4) === 0 ? "animated-div" : ""
            }`}
            onClick={clickHandler}
          ></div>
          <div
            id="blue"
            className={`bg-blue-600 border-4 border-black h-[200px] w-[200px] ${
              Math.floor(index * 4) === 1 ? "animated-div" : ""
            }`}
            onClick={clickHandler}
          ></div>
        </div>
        <div className="flex w-96 gap-10">
          <div
            id="yellow"
            className={`bg-yellow-400 border-4 border-black h-[200px] w-[200px] ${
              Math.floor(index * 4) === 2 ? "animated-div" : ""
            }`}
            onClick={clickHandler}
          ></div>
          <div
            id="purple"
            className={`bg-purple-600 border-4 border-black h-[200px] w-[200px] ${
              Math.floor(index * 4) === 3 ? "animated-div" : ""
            }`}
            onClick={clickHandler}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default App;

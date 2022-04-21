import React, { useState } from "react";
import BackwardSide from "./components/BackwardSide";
import ForwardSide from "./components/ForwardSide";

const App = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSelfWeather, setIsSelfWeather] = useState("self");

  return (
    <div className="page-wrapper">
      {!isFlipped ? (
        <ForwardSide
          setIsFlipped={setIsFlipped}
          isSelfWeather={isSelfWeather}
          setIsSelfWeather={setIsSelfWeather}
        />
      ) : (
        <BackwardSide setIsFlipped={setIsFlipped} />
      )}
    </div>
  );
};

export default App;

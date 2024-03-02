import React, { useState } from "react";

const Home = () => {
  const [color, setColor] = useState(null);
  const [lights, setLights] = useState([
    { color: "red", active: false },
    { color: "yellow", active: false },
    { color: "green", active: false },
  ]);

  function resetColor(newColor) {
    setColor(newColor);
  }

  function changeColors() {
    const currentIndex = lights.findIndex((light) => light.color === color);
    const nextIndex = (currentIndex + 1) % lights.length;
    setColor(lights[nextIndex].color);
  }

  function addPurple() {
    if (lights.some((light) => light.color === "purple")) {
      return;
    }
    const greenIndex = lights.findIndex((light) => light.color === "green");
    const newLights = [
      ...lights.slice(0, greenIndex + 1),
      { color: "purple", active: false },
      ...lights.slice(greenIndex + 1),
    ];
    setLights(newLights);
  }

  return (
    <div className="trafficLight">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        height="600"
        fill="currentColor"
        className="bi bi-stoplights-fill"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M6 0a2 2 0 0 0-2 2H2c.167.5.8 1.6 2 2v2H2c.167.5.8 1.6 2 2v2H2c.167.5.8 1.6 2 2v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1c1.2-.4 1.833-1.5 2-2h-2V8c1.2-.4 1.833-1.5 2-2h-2V4c1.2-.4 1.833-1.5 2-2h-2a2 2 0 0 0-2-2zm3.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
        />
      </svg>
      <div className="blackBackground"></div>
      <span className="colorsContainer">
        {lights.map((light, index) => (
          <div
            key={index}
            className={`${light.color} light`}
            style={{
              backgroundColor: light.color,
              boxShadow:
                color === light.color ? "0px 0px 120px yellow" : "none",
            }}
            onClick={() => resetColor(light.color)}
          ></div>
        ))}
      </span>
      <button className="btn btn-dark" onClick={changeColors}>
        Select Color
      </button>
      <button className="btn btn-dark" onClick={addPurple}>
        Add Purple
      </button>
    </div>
  );
};

export default Home;

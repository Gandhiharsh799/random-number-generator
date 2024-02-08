import React, { useState } from "react";

export default function GenerateNumber({ title, button }) {
  const [randomNumber, setRandomNUmber] = useState(null);

  const generateRandomNumber = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    setRandomNUmber(random);

  };

  const generatedNumber = randomNumber % 2 === 0;

  return (
    <>
      <h1>{title}</h1>
      <p>
        <button onClick={generateRandomNumber}>{button}</button>
      </p>
      <p>Generated Number: {randomNumber}</p>
      {generatedNumber ? <p>{randomNumber} is even.</p>:<p>{randomNumber} is odd.</p> }
    </>
  );
}

import { useState } from "react";

function Detective() {
  const [sherlock, setSherlock] = useState("психопат");
  const handleClick = () => {
    setSherlock("высокоактивный социопат");
  };
  return (
    <div>
      <p>Шерлок - {sherlock}</p>
      <button onClick={handleClick}>узнать правду</button>
    </div>
  );
}
export default Detective;

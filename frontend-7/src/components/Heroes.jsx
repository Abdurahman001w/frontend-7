import { useState } from "react";

const Heroes = () => {
  const [names, setNames] = useState([
    "Шерлок Холмс",
    "Доктор Ватсон",
    "Профессор Мориарти",
    "Миссис Хадсон",
    "Ирен Адлер",
  ]);
  const handleDelete = (index) => {
    const upNames = names.filter((item) => item !== index);
    setNames(upNames);
  };
  return (
    <div>
      <ul>
        {names.map((name, index) => (
          <li key={index} onClick={() => handleDelete(name)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Heroes;

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

export const SearchBar = () => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((json) => {
        const result = json.results.filter((pokemon) => {
          return pokemon.name.includes(value.toLowerCase());
        });
        console.log(result);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="PokeSearch..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
